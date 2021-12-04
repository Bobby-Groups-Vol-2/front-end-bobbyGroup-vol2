<template>
  <div
    class="
      py-5
      bg-fauxlavender
      rounded-4xl
      md:grid md:grid-cols-2
      lg:grid-cols-3 lg:gap-3
    "
  >
    <div>
      <label class="label">
        <span class="label-text text-black font-semibold mx-7"
          >Pattern Name</span
        >
      </label>
      <input
        v-model="pattern.patternname"
        type="text"
        placeholder="name"
        class="input input-bordered mx-7"
      />
    </div>
    <div>
      <button
        class="btn confirm mt-9 mx-7"
        @click="updatePatterns(pattern.patternname)"
      >
        Confirm
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pattern: {
        patternname: "",
      },
    };
  },
  methods: {
    async updatePatterns(patternName) {
      const patterns = {
        patternname: patternName,
      };
      const res = await this.callApi("post", "/api/patterns", patterns);
      if (res.status >= 200) {
        alert("Success");
        location.reload();
      }
    },
  },
};
</script>
<style scoped>
::placeholder {
  color: aliceblue;
}
input {
  background-color: #43362d;
}
.confirm {
  background-color: olivedrab;
  border: 0ch;
  color: #faf2c5;
}
.confirm:hover {
  background-color: #c34f7c;
  border: 0ch;
  color: #faf2c5;
}
</style>
