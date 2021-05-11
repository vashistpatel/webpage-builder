<template>
  <div class="home">
    <body id="homepage">
      <div>
        <section class="hero has-background-link-light is-fullheight">
          <div class="box my-6 mx-5">
            <section class="section is-large my-6" id="home_box">
                <!-- <p class="logout_success">Successful Logout</p> -->
                <p class="first_title"> <span class="cursive">ThankYou</span> for choosing Zing!</p>
                <p class="sec_title">From our Development Team:</p>
                <p class="name">Ryan Guenther</p>
                <p class="name">Saenthuran Vignarajah	</p>
                <p class="name">Vashist Patel</p>
                <p class="name">Vethuson Amit	</p>
                <p class="name">Zile Humma</p>
            </section>
          </div>
        </section>
      </div>
    </body>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.withCredentials = true;
export default {};
</script>

<style lang ="css">
.box {
  width: 98%;
}
#home_box {
  position: relative;
  padding: 0;
}

.logout_success{
    text-align: center;
    margin: 0;
    font-size: 45px;
    font-weight: medium;
    margin-bottom:10px;
    color: rgb(241,70,104);
    margin-bottom:40px;
}
.first_title{
    text-align: center;
    margin: 0;
    font-size: 35px;
    font-weight: medium;
    margin-bottom:10px;
}
.cursive{
    font-family: 'Brush Script MT', cursive;
    font-size: 45px;
    font-weight: lighter;
}
.sec_title{
    font-size: 25px;
    text-align: center;
    margin-bottom: 5px
}
.name{
    font-size:20px;
    text-align: center;
}
</style>