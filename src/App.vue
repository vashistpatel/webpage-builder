
<template>
  <body>
    <div id="app">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <HandF />
      <div v-if="userToken">
            <functionLayout/>
            <!-- <builderPage/> -->
      </div>
      <router-view/>    

    </div>
  </body>

</template>


<script>

import HandF from './components/HandF.vue'
import functionLayout from './views/layouts.vue'
// import builderPage from './views/builderPage.vue'

//Axios is used to keep track of times website has been visited
import axios from 'axios'
// import d3 from 'd3';
axios.post('http://localhost:4000/traffic',{
    visit: 1
})




export default {
  //Computed section
    computed:{
      //For getting the user token
      userToken(){
          return this.$store.state.token;
      }
  },
  //Importing components
  components:{HandF, functionLayout},
  name: 'App'
}
</script>

<style>
body{

    margin:0!important;
    height:100%!important;
    overflow: hidden!important;
    background-color:rgb(206, 206, 206)!important;

}
</style>
