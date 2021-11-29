import Vue from "vue";

Vue.mixin({
  methods: {
    async callApi(method, url, dataObj) {
      try {
        const data = await this.$axios({
          method,
          url,
          data: dataObj,
        }).catch((err) =>
          this.$toast.error(err.response.data.message, {
            theme: "toasted-primary",
            position: "bottom-center",
            duration: 1500,
          })
        );

        return data;
      } catch (e) {}
    },
  },
});
