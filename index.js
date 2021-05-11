//https://www.youtube.com/watch?v=nFh7-HfODYY taught me how to use vuex
//Importing express, express-session, cors(because we are connecting a front-end localhost:8080 to a backend localhost:4000)
//d3 for graphs, model for the mongoose database
//uuidv for random session tokens
//
const express = require ('express');
const session = require('express-session');
const cors = require('cors');
const d3 = require('d3');
const model = require('./modelDatabase');

const { v4: uuidv4 } = require('uuid');

const app = express();



const port = process.env.PORT || 4000;

// https://glitteringglobofwisdom.com/session-cookies-auth-and-cors-using-axios-and-an-express-server/
// The article above helped us figure out why cors would not work properly and it was because
//we did not have our origin to localhost:8080 & credentials:true
const corsConfig = {
    origin: 'http://localhost:8080',
    credentials:true
}

app.use(cors(corsConfig));


app.use(express.json());

app.use(session({
    genid: () => uuidv4(),
    resave:false,
    saveUninitailized: false,
    secret: 'rat submarine version horse vertigo'
}));

app.post('/signup', function(request,response){

    //Const data used to store information sent by user for signup
    //Checks to see if the email is in the db
    model.Info.find({email:request.body.email})
    .then((data) =>{
        //If it comes back as not null then the email exists
        if(data[0]["email"] != null){
            response.json({"email": "true","error": "Email already exists!"})
        }
    })
    .catch((data) =>{
        //If the email does not come back as true then we go here
        //Where it checks the password tor see if it's less than 5 characters
            if(request.body.password.length <= 5){
                //Creating error to send back to front end
                response.json({"password": "true", "error": "Password is less than 5 characters"});
            }else if(request.body.password.length > 5){
                //an array is generated and it will send to the db to create the account
                const signup = new model.Info({
        
                    email: request.body.email,
                    name: request.body.name,
                    Address: request.body.address,
                    password: request.body.password,
                    Admin: false
        
                });
                //Here it saves the information in the db and checks to see if any errors occur
                signup.save((error)=>{
                    if(error){
                        console.log(error);
            
                    }else{
                        //Starts the session timer
                        request.session.start = (new Date()).getTime();
                        //This here will login the user
                        model.Info.find({email:request.body.email})
                        .then((data) =>{
                            console.log("It connected");
                            response.json(data[0]['_id']);
                        })
                    }
                })
            }
    })


});


app.post('/login', function(request,response){
    //Checks the submitted information, if its true then itll login
    //if its incorrect then an error will be snet back saying information is in correct
    model.Info.find({email:request.body.email,password:request.body.password})
    .then((data) =>{
        request.session.start= (new Date()).getTime();
        if(data[0]['Admin']){
            request.session.Admin = data[0]['Admin'];
        }
        request.session.Admin = data[0]['Admin'];
        request.session.newData = {
            '_id':data[0]['_id'],
            'Auth':data[0]['Admin']
        }
        console.log(request.session.newData);
        response.json(request.session.newData);
    })
    .catch((error) =>{
        console.log('error: ',error)
        response.json({"error": "Account information is incorrect or does not exist"})
    })
});
//This is  for getting all the information associated with what the date the user sent
app.post('/traffic',function(request,response){
    console.log("this has connected")
    var todaysDate = {'year':(new Date()).getFullYear(), 'month':(new Date()).getMonth(), 'day':(new Date()).getDate()}
    
    model.Stats.find({year:todaysDate.year,month:todaysDate.month,day:todaysDate.day})
    .then((data)=>{
        console.log(data)
        //Everytime a user refreshes the page it will accept it as a user connecting to the website and update the 
        //number of users who has visited the website that day
        model.Stats.findOneAndUpdate(todaysDate,{visitors:data[0]['visitors']+1},function(err,doc){
            if(err){


            }
            
        })
    })
    .catch((error) =>{
//If the search comes up empty then it will create the information for the new date and update it to zingUsers.dbStats in mongodb
        var todaysDateforCreating = new model.Stats({
            'year':(new Date()).getFullYear(), 
            'month':(new Date()).getMonth(), 
            'day':(new Date()).getDate(),
            'timeSpent':0,
            'visitors':1});

        todaysDateforCreating.save((error)=>{
            if(error){
                console.log("error:",error);
            }else{
                console.log("new date added to db")
            }
        })

    })


});
//This is for updating the data in the backend
app.post('/getData',function(request,response){
    console.log(request.body);
    if(request.body.day != "Day"){
        request.session.Year = request.body.year;
        request.session.Month = request.body.month-1;
        request.session.Day = request.body.day;
        model.Stats.find({year:request.session.Year,month:request.session.Month,day:request.session.Day})
        .then((data)=>{
            response.json(data);
        })
        .catch((error) =>{

            console.log('error: ',error)
        })
    }else{
        request.session.Year = request.body.year;
        request.session.Month = request.body.month-1;
        model.Stats.find({year:request.session.Year,month:request.session.Month})
        .then((data)=>{
            response.json(data);
        })
        .catch((error) =>{
            
            console.log('error: ',error)
        })      
    }
})

//This will destroy and delete any user sessions
//It will also  end the session timer and send the time to the db 
app.post('/logout',function(request,response){
    request.session.end= (new Date()).getTime();
    request.session.timeSpent = request.session.end - request.session.start;
    console.log(request.session.timeSpent);
    var todaysDateforTime = {'year':(new Date()).getFullYear(), 'month':(new Date()).getMonth(), 'day':(new Date()).getDate()}

    model.Stats.find({year:todaysDateforTime.year,month:todaysDateforTime.month,day:todaysDateforTime.day})
    .then((data)=>{
        request.session.timeSpent += data[0]['timeSpent']
        //Everytime a user refreshes the page it will accept it as a user connecting to the website and update the 
        //number of users who has visited the website that day
        model.Stats.findOneAndUpdate(todaysDateforTime,{timeSpent:request.session.timeSpent},function(err,doc){
            console.log("successfully updated")         
            request.session.destroy();
            response.json('');
        })
    })


});

//verifies if this is an admin account
app.get('/verifyIfAdmin',function(request,response){
    response.json(request.session.Admin)

})

app.listen(port, ()=>{  

    console.log(`listening on ${port}`);
});