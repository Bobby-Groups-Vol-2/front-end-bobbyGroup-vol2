<template>
  <div
    class="
      py-5
      pl-10
      bg-fauxlavender
      rounded-4xl
      lg:grid lg:grid-cols-3
      lg:gap-3
    "
  >
    <div>
      <label class="label">
        <span class="label-text text-black">Name</span>
      </label>
      <input
        v-model="pattern.patternname"
        type="text"
        placeholder="name"
        class="input input-bordered"
      />
    </div>
    <div>
      <button
        class="btn bg-green-600 border-green-600 mt-9"
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
