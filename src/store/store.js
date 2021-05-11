// https://www.youtube.com/watch?v=nFh7-HfODYY
// Link above taught us how to use vuex 

//Imports for the stores from vuex
import { createStore } from 'vuex'
//Importing axios with also setting axios.defaults.withcredentials to true because of certain browsers
//causing errors when it is not initailized 
import axios from 'axios'
axios.defaults.withCredentials = true;


//Creating state & mutations for the store

export default createStore({
  state: {
    //Initailizing store variables
    token: sessionStorage.getItem('token'),
    name: '',
    code: '',
    navType: sessionStorage.getItem('type'),
    auth: false
  },
  mutations:{
    //Setters for setting the store variables to a value. 
    setToken(state,tokens){
      state.token = tokens
      
    },
    setName(state, names){
      state.name = names
    },
    setCode(state,codes){
      state.code = codes
    },
    setNavTrue(state){
      state.navType = true;
    },
    setNavFalse(state){
      state.navType = false;
    },
    setAuth(state,value){
      state.auth = value
    },
    setTest(state){
      axios.get('http://localhost:4000/verifyIfAdmin')
        .then((response)=>{
          state.auth = response['data']
        })
        .catch((error)=>{
          console.log(error)
        })
      }
    
    
      
    }
})