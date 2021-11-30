<template>
  <div class="all-card-holder w-full flex justify-center flex-col">
       <div class="flex flex-col my-10">
      <h1 class="mx-6 mb-4 font-bold text-2xl">Add Species</h1>
      <add-species class="card"></add-species>
      <h1 class="mx-6 mb-4 font-bold text-2xl my-10">Add Pattern</h1>
      <add-pattern class="card "></add-pattern>
      <h1 class="mx-6 mb-4 font-bold text-2xl my-10">Add Pattern to Species</h1>
      <specis-patterns class="card "></specis-patterns>
    </div>

    <table class="m-5 w-4/5 mx-auto bg-white text-gray-800">
      <tr class="text-left border-b-2 border-gray-300">
        <th class="px-2 py-3">Species ID</th>
        <th class="px-2 py-3">Species Name</th>
        <th class="px-2 py-3">Pattern ID</th>
        <th class="px-2 py-3">Pattern Name</th>
      </tr>

      <tr
        v-for="specie in species"
        :key="specie.id"
        class="bg-fauxlavender border-b border-gray-200 rounded-4xl"
      >
        <td class="px-2 py-3">{{ specie.speciesid }}</td>
        <td class="px-2 py-3">
          {{ specie.speciesname }}
        </td>
        <td class="px-2 py-3">
          <span
            v-for="pattern in specie.owns"
            :key="pattern.patterns_patternid"
          >
            {{ pattern.patterns_patternid }}</span
          >
        </td>
        <td class="px-2 py-3">
          <span
            v-for="pattern in specie.owns"
            :key="pattern.patterns_patternid"
          >
            {{ pattern.pattern.patternname }}</span
          >
        </td>
        <td>
          <button
            class="btn bg-red-600"
            @click="deleteSpecies(specie.speciesid)"
          >
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import AddPattern from "../add/AddPattern.vue";
import SpecisPatterns from "../add/SpecisPatterns.vue";
export default {
  components: { AddPattern, SpecisPatterns },
  data() {
    return {
      species: [],
    };
  },
  async created() {
    const res = await this.callApi("get", "/api/species");
    if (res.status === 200) {
      this.species = res.data;
    }
  },
  methods: {
    deleteSpecies(id) {
      this.callApi("delete", "/api/species/" + id);
      // location.reload();
    },
  },
};
</script>
<style scoped>
h1 {
  color: #43362d;
}
@media (min-width: 320px) {
  .all-card-holder {
    width: 90%;
  }
}

@media (min-width: 375px) {
  .all-card-holder {
    width: 80%;
  }
}

@media (min-width: 768px) {
  .all-card-holder {
    width: 80%;
  }
}
@media (min-width: 1024px) {
  .all-card-holder {
    width: 70%;
  }
}
</style>