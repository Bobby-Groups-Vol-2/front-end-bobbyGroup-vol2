<template>
  <div class="mt-10">
       <div class="flex flex-col justify-start my-10">
      <h1 class="mx-5 mb-4 font-bold text-3xl">Species</h1>
      <add-species class="lg:w-2/3"></add-species>
      <h1 class="ml-1 mb-4 font-bold text-3xl">Patterns</h1>
      <add-pattern class="lg:w-2/3 w-1/2"></add-pattern>
      <h1 class="ml-1 mb-4 font-bold text-3xl">Add Patterns to Species</h1>
      <specis-patterns class="lg:w-2/3 w-1/2"></specis-patterns>
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
</style>