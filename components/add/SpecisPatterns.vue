<template>
  <div
    class="
      py-5
      pl-10
      bg-fauxlavender
      rounded-4xl
      lg:grid lg:grid-cols-3 lg:gap-3
    "
  >
    <!-- //? speciesName -->
    <div>
      <label class="label">
        <span class="label-text text-black">Species</span>
      </label>
      <div class="dropdown">
        <div tabindex="0" class="btn">{{ speciesname }}</div>
        <ul
          tabindex="0"
          class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
        >
          <li v-for="specie in species" :key="specie.speciesid">
            <a @click="mapSpecies(specie.speciesid, specie.speciesname)">
              {{ specie.speciesname }}
            </a>
          </li>
          <!-- <li v-for="pattern in patterns" :key="pattern.patternid">
            <a
              @click="mapPattern(pattern.patternid, sp, pattern.patternname)"
              >{{ pattern.patternname }}</a
            >
          </li> -->
        </ul>
      </div>
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
            <a @click="mapPattern(pattern.patternid, pattern.patternname)">
              {{ pattern.patternname }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <button class="btn bg-green-600 border-green-600 mt-9" @click="update()">
        Confirm
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   species: {
      //     speciesname: "",
      //   },
      owns: {
        species_speciesid: 0,
        patterns_patternid: 0,
      },
      patterns: [],
      patternname: "select pattern",
      speciesname: "select species",
      species: [],
    };
  },
  async created() {
    const resPattern = await this.callApi("get", "/api/patterns");
    const resSpecies = await this.callApi("get", "/api/species");
    this.species = resSpecies.data;

    this.patterns = resPattern.data;
  },
  methods: {
    async update() {
      const res = await this.callApi("post", "/api/owns", this.owns);
      if (res.status >= 200) {
        alert("Success");
        location.reload();
      }
    },
    mapPattern(patternid, patternName) {
      this.owns.patterns_patternid = patternid;
      this.patternname = patternName;
    },
    mapSpecies(speciesid, speciesname) {
      this.owns.species_speciesid = speciesid;
      this.speciesname = speciesname;
    },
  },
};
</script>
