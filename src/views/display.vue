<template>
  <!-- box to display the code in -->
  <!-- Burner code -->
  <body>
    <section class="hero has-background-link-light is-fullheight">
      <div class="box my-6 mx-5">
        <div class="hero is-halfheight my-6" id="displayBox"></div>
      </div>
    </section>
  </body>
</template>


<script>
// the code from the builder page is displayed
export default {
  mounted() {
    const display = document.querySelector("#displayBox");
    display.textContent = this.$store.state.code;
  },
};
</script>

<style >
.box {
  width: 98%;
}

#displayBox {
  padding: 0;
}
</style>