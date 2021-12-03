<template>
  <div class="flex flex-row">
    <AuthLogin />
  </div>
</template>

<script>
export default {
  layout: "noAuth",
  middleware({ store, redirect }) {
    if (store.$auth.user) redirect("/cat");
  },
  created() {
    // console.log(this.$auth.user);
    // console.log(this.$auth.isLoggedIn);
  },

  data() {
    return {
      user: "",
    };
  },
  // methods: {
  //   async route() {
  //     await this.$router.push('/cat');
  //   },
  // },
};
</script>
