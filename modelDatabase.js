//This was taken from Saenthuran Vignarajah's Lab 9 which was implemented from
//What Randy Fortier taught & from https://www.youtube.com/watch?v=OuCrHynro0w&start=1001s this video
//Which taught me in lab 9 how to use external databases like mongodb atlas
const mongoose = require('mongoose');
//admin
//9WolYqMBxzFaRk0e
//Connecting mongoose to the db 
mongoose.Promise = global.Promise;
const mongoDBURL = 'mongodb+srv://admin:9WolYqMBxzFaRk0e@zing-database.90dj6.mongodb.net/zingUsers?retryWrites=true&w=majority'
mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true

});
//Connection confirmation
mongoose.connection.on('connected',() =>{
    console.log("Db is connected");
})
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
//Creating the schema for  registering
let Schema = mongoose.Schema;
const dbSchema = new Schema({
    email: String,
    name: String,
    Address: String,
    password: String,
    Admin: Boolean

    
},{
    collection: 'userInfo'
})
//Creating the schema for daily statistics
const dbStats = new Schema({
    year: Number,
    day: Number,
    month: Number,
    timeSpent: Number,
    visitors: Number,

},{
    collection: 'dbStats'
})

module.exports.Stats = mongoose.model('dbStats', dbStats);
module.exports.Info = mongoose.model('userInfo', dbSchema);
