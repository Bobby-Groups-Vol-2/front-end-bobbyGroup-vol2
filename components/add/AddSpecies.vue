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
    <!-- //? speciesName -->
    <div>
      <label class="label">
        <span class="label-text text-black">Name</span>
      </label>
      <input
        v-model="species.speciesname"
        type="text"
        placeholder="name"
        class="input input-bordered"
      />
    </div>
    <!-- //? patterns -->

    <div>
      <label class="label">
        <span class="label-text text-black">Patterns</span>
      </label>
      <div class="dropdown">
        <div tabindex="0" class="btn">{{ patternname }}</div>
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
        class="btn bg-green-600 border-green-600 mt-9"
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
