<template>
<!-- https://bulma.io/documentation/overview/start/ -->
    <div class="login">
        <!-- Body for the login page -->
        <body id="loginBody">
            <div class = "container is-centered">
                <div class ="column is-multiline is-mobile my-6">
                    <div class ="column is-4 is-offset-4"> 
                        <div class="box" id="box">
                            <!-- Prevents page from reloading when submitting -->
                            <form @submit.prevent = "sendInfo()" action = "/login" method="post">
                                <!-- Input for Email -->
                                <label class ="label">Email</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input class="input" type="Email" placeholder="e.g janedoe@gmail.com" v-model ="Email">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-envelope"></i>
                                    </span>
                                </div>
                                <!-- Input for Password -->
                                <label class ="label">Password</label>
                                <div class="control has-icons-left has-icons-right">
                                    <input class="input" type="Password" placeholder="••••••••••••" v-model ="Password">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-lock"></i>
                                    </span>
                                    <!-- When an error occurs, the message will be displayed inside this p tag -->
                                    <p class="has-text-danger has-text-weight-bold	" ref="error"></p>
                                </div>
                                <div class ="column has-text-centered">
                                    <button id="loginSubmitButton" class ="button my-4">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </div>
</template>

<script>

//importing axios
import axios from 'axios';
axios.defaults.withCredentials = true;

export default{
    //initializing variables
    data(){
        return{
            Email: '',
            Password: '',
            auth:''
                
        }
        //Computed section
    },computed:{
        userInfo(){
            return this.$store.state.token;
        },
        //methods sections
    },methods: {
        //Send info, which will post the user information to verify it
        async sendInfo(){

            await axios.post('http://localhost:4000/login',{
                email: this.Email,
                password: this.Password
                

            })  //When it returns itll check to see if there is an error and if its true itll display the error
                .then((response)=>{
                    if(response["data"]["error"]){
                        this.$refs.error.innerText = response["data"]["error"];
                        console.log("hi");
                    }else{
                        // This will get the token received from the login  
                        //set the type to true
                        //and check if its an admin or user account
                        sessionStorage.setItem("token",response["data"]['_id']);
                        sessionStorage.setItem("type",true);
                        this.$store.commit('setNavTrue');
                        this.$store.commit('setToken',response["data"]['_id']);
                        this.$store.commit('setTest');
                        //will push to the builderPage
                        this.$router.push('/builderPage');

                    }

                });

        }
    }


}

</script>
<style lang ="scss">
</style>