<template>
  <div
    class="
      py-5
      bg-fauxlavender
      rounded-4xl
      md:grid-cols-2 md:grid
      lg:grid-cols-3 lg:gap-3
      xl:gap-16
    "
  >
    <!-- //? speciesName -->
    <div>
      <label class="label">
        <span class="label-text text-black font-semibold mx-7"
          >Species Name</span
        >
      </label>
      <input
        v-model="species.speciesname"
        type="text"
        placeholder="name"
        class="input input-bordered mx-7"
      />
    </div>
    <!-- //? patterns -->

    <div>
      <label class="label">
        <span class="label-text text-black font-semibold mx-7">Patterns</span>
      </label>
      <div class="dropdown">
        <div tabindex="0" class="btn select-btn mx-7">{{ patternname }}</div>
        <ul
          tabindex="0"
          class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
        >
          <li v-for="pattern in patterns" :key="pattern.patternid">
            <a
              @click="mapPattern(pattern.patternid, sp, pattern.patternname)"
              >{{ pattern.patternname }}</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div>
      <button
        class="btn confirm mt-9 mx-7"
        @click="updateSpecies(species.speciesname)"
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
      species: {
        speciesname: "",
      },
      owns: {
        species_speciesid: 0,
        patterns_patternid: 0,
      },
      sp: 0,
      patterns: [],
      patternname: "select pattern",
    };
  },
  async created() {
    const resPattern = await this.callApi("get", "/api/patterns");
    const resSpecies = await this.callApi("get", "/api/species");
    this.sp = resSpecies.data.length + 1;
    this.patterns = resPattern.data;
  },
  methods: {
    async updateSpecies(speciesName) {
      const species = {
        speciesname: speciesName,
      };
      const res = await this.callApi("post", "/api/species", species);
      if (res.status >= 200) {
        await this.callApi("post", "/api/owns", this.owns);
        alert("Success");
        location.reload();
      }
    },
    mapPattern(patternid, speciesid, patternName) {
      const owns = {
        species_speciesid: speciesid,
        patterns_patternid: patternid,
      };
      this.owns = owns;
      this.patternname = patternName;
    },
  },
};
</script>
<style scoped>
.btn {
  color: #faf2c5;
}
.select-btn {
  background-color: #9e5f43;
  border: 0cm;
}
.select-btn:hover {
  background-color: #43362d;
  color: #faf2c5;
  border: 0cm;
}
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