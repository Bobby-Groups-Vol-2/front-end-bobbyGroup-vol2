<template>
  <div class="relative min-h-screen">
    <Navbar>
      <Nuxt class="relative top-10vh" />
      <!-- relative top-10vh -->
    </Navbar>
    <h1>{{ width }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      width: "",
    };
  },

  created() {},

  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Prompt");

html {
  font-family: "Prompt", sans-serif;
  background: no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-color: #d99058;
   /* background-image:url("https://i.pinimg.com/564x/69/ca/7c/69ca7cd269e752eba1b869e83937b64b.jpg"); */
  background-image: linear-gradient(180deg, #d99058 0%, #f8de7e 74%);
}
</style>
