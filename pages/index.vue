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
