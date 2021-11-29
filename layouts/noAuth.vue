<template>
  <div class="relative min-h-screen">
    <h1>{{ width }}</h1>
    <Nuxt class="relative top-10vh" />
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
  background-image: linear-gradient(180deg, #d99058 0%, #f8de7e 74%);
}
</style>
