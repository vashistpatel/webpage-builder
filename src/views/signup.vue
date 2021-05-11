<template>
    <div class="signup">
        <body>
            <!-- Sign up form -->
            <div class ="column is-multiline is-mobile my-6" >
                <div class ="column  is-4 is-offset-4">
                    <div class="box ">
                        <!-- Prevents the page from reloading when submitted -->
                        <form @submit.prevent = "sendInfo()" action = "/signup" method="post">
                        <!-- Email input -->
                            <label class ="label">Email</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="email" placeholder="e.g janedoe@gmail.com" v-model ="Email">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                                <p class="has-text-danger has-text-weight-bold" ref="emailError"></p>

                            </div>
                        <!-- Full name input -->
                            <label class ="label">Full Name</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="name" placeholder="e.g Jane Doe " v-model="Fullname">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </div>
                        <!-- Address input -->
                            <label class ="label">Address</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="address" placeholder="e.g 2000 Simcoe St N" v-model="Address">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-map-marker "></i>
                                </span>
                            </div>
                        <!-- Password input -->
                            <label class ="label">Password</label>
                            <div class="control has-icons-left has-icons-right">
                                <input class="input" type="password" placeholder="••••••••••••" v-model="Password">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                </span>
                                <p class="has-text-danger has-text-weight-bold	" ref="passwordError"></p>

                            </div>
                        <!-- Submit button -->
                            <div class ="column has-text-centered">
                                <button id="signupSubmitButton" class ="button my-4">
                                    Submit
                                </button>

                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </body>

    </div>

</template>
<script>
// Importing Axios
import axios from 'axios';
axios.defaults.withCredentials = true;
export default{
    // Initailizing variables
    data(){
        return{
            Email: '',
            Fullname: '',
            Address: '',
            Password: ''
                
        }
        // Methods sections 
    }, methods: {
        // Sendinfo, willsend the submitted information to /signup in index,js
        async sendInfo(){

            await axios.post('http://localhost:4000/signup',{
                email: this.Email,
                name: this.Fullname,
                address: this.Address,
                password: this.Password
            })
                .then((response)=>{
                    // Will check to see if there are errors and display the type of error
                    // E.g email in use or password is bad
                    this.$refs.emailError.innerText = " "
                    this.$refs.passwordError.innerText = " ";

                    if(response["data"]["email"]){
                        this.$refs.emailError.innerText = response["data"]["error"];
                        console.log("hi2");
                    }else if(response["data"]["password"]){
                        this.$refs.passwordError.innerText = response["data"]["error"];
                        console.log("hi1");
                    }else{
                    // Else it will call the same stuff as /login to have the user automatically login when they signup
                    sessionStorage.setItem("token",response["data"]);
                    this.$store.commit('setNavTrue');
                    this.$store.commit('setToken',response["data"]);
                     
                    this.$store.commit('setToken',response["data"]);
                    // then push them to /builderPage
                    this.$router.push('/builderPage')
                    }

                }, (error) =>{
                    console.log(error);
                });

        }
    }


}

</script>
<style lang ="scss">
</style>