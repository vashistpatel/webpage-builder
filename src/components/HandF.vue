<template>
<!-- 
 
    https://bulma.io/documentation/
 
 -->
    <body id="loginBody">
        <nav class="navbar is-dark">

            <div id="navbarHeader" class="navbar-menu">
                <div class="navbar-start">
                    <router-link to="/builderPage" class="title has-text-white my-2 mx-3" v-on:click="addNav()">Zing!</router-link>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div v-if="userToken">
                            <router-link v-if="userAuth" to="/stats" class="button is-dark mx-3" v-on:click="updateSave(); removeNav()">Statistics</router-link>

                            <router-link to="/builderPage" class="button is-dark mx-3" v-on:click="addNav()">Builder Page</router-link>


                            <div class="button is-danger" v-on:click="logout()">
                                Logout
                            </div>


                        </div>
                        <div v-else>
                            <div class="buttons">
                                <router-link to="/login" class="button is-light">Login</router-link>
                                <router-link to="/signup" class="button is-light">Signup</router-link>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    
    <div class ="bottom-nav" id="bottom">
        <div class ="navbar is-dark">
            <div class ="navbar-start">
                <div class ="control is-size-5 has-icons-left has-icons-right my-3 mx-3">
                    <span class="icon-text is-small ">
                        <i class ="fas fa-copyright">
                        </i>
                        
                    </span>
                    <span>2021</span>
                </div>
            </div>
            <div class ="navbar-end">
                <div class ="control is-size-5 has-icons-right my-3 mx-3" id ="FAQ">
                    <router-link to="/FAQ" class ="links" v-on:click="updateSave(); removeNav()">
                        <span class="icon-text is-small">
                            <i class ="far fa-question-circle">
                            </i>
                        </span>
                        <span >FAQ</span>
                    </router-link>
                </div>
                <div class ="control is-size-5 has-icons-right my-3 mx-3" >
                    <a class ="links" id="twit" href="https://twitter.com" target="_blank">
                        <span class="icon-text is-small">
                            <i class ="fab fa-twitter">
    
                            </i>
                        </span>
                        <span >Twitter</span>
                    </a>
                </div>

                <div class ="control is-size-5 has-icons-right my-3 mx-3">
                    <a class ="links" id="yt" href="https://youtube.com" target="_blank">
                        <span class="icon-text is-small">
                            <i class ="fab fa-youtube">
    
                            </i>
                        </span>
                        <span >Youtube</span>
                    </a>
                </div>


            </div>

        </div>
    </div>
    </body>
               
</template>


<script>

//Importing axios with also setting axios.defaults.withcredentials to true because of certain browsers
//causing errors when it is not initailized 
import axios from 'axios';
axios.defaults.withCredentials = true;

export default{
    //Computed section
   computed:{
       //userToken, used for getting the token retreived from logging
        userToken(){
            return this.$store.state.token;
        },
       //userAuth, used for getting the account type(admin or user)
        userAuth(){
            this.$store.commit('setTest');

            console.log(this.$store.state.auth)
            return this.$store.state.auth;
        }

    },
    //methods sections
    methods:{
       async logout(){
           //Will post to /logout and delete the session 
            await axios.post('http://localhost:4000/logout')
            .then((response)=>{
                sessionStorage.setItem("token",response["data"]);
                this.$store.commit('setToken',response["data"]);
                this.$store.commit('setCode'," ");
                //route to homepag btw
                this.$router.push("/homepage");
                },
                (error) =>{
                    console.log(error);
                });
        },
        updateSave(){
            //Will  save the code that is inside the builder page 
            const fileInput = document.querySelector("#import_box");
            this.$store.commit('setCode',fileInput.innerHTML);
        },
         removeNav(){
            //removes the second nav when not on the builder page
            sessionStorage.setItem("type",false);

            this.$store.commit('setNavFalse',false);
        },
        addNav(){
            //removes the second nav when not on the builder page
            sessionStorage.setItem("type",true);
            this.$store.commit('setNavTrue',true);
        }       
                    
    },


}
</script>

<style>
 @import '../assets/styles/HandF.css';

</style>
