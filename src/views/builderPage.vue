<template>
  <!-- box to build the website in -->
  <div>
    <!-- hero section background behind the editable builder page -->
    <section class="hero has-background-link-light is-fullheight">
      <!-- Box for the outline of the editable page -->
      <div class="box my-6 mx-5">
        <!-- Where all the code will be appended to -->
        <section class="section is-large my-6" id="import_box"></section>
      </div>
    </section>
  </div>
</template>


<script>
export default {
    // Vuejs equivalent to windows.onload 
  mounted() {
    //Will set the inside of the editable box to the saved code when the page loads
    const fileInput = document.querySelector("#import_box");
    fileInput.innerHTML = this.$store.state.code;
    // eslint-disable-next-line no-unused-vars
    this.$store.commit("setNavTrue");

  },
};
</script>

<style >
.box {
  width: 98%;
}
#import_box {
  position: relative;
  padding: 0;
}
</style>