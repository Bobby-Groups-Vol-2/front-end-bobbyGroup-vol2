<template>
  <div>
    <table class="m-5 w-4/5 mx-auto bg-white text-gray-800">
      <tr class="text-left border-b-2 border-gray-300">
        <th class="px-2 py-3">Pattern ID</th>
        <th class="px-2 py-3">Pattern Name</th>
        <th class="px-2 py-3">Species ID</th>
        <th class="px-2 py-3">Species Name</th>
        <th class="px-2 py-3">Delete Pattern</th>
      </tr>

      <tr
        v-for="pattern in patterns"
        :key="pattern.id"
        class="bg-fauxlavender border-b border-gray-200 rounded-4xl"
      >
        <td class="px-2 py-3">{{ pattern.patternid }}</td>
        <td class="px-2 py-3">
          {{ pattern.patternname }}
        </td>
        <td>
          <span
            v-for="own in pattern.owns"
            :key="own.species_speciesid"
            class="px-2 py-3"
            >{{ own.species_speciesid }}</span
          >
        </td>
        <td>
          <span
            v-for="own in pattern.owns"
            :key="own.species_speciesid"
            class="px-2 py-3"
          >
            {{ own.species.speciesname }}
          </span>
        </td>
        <td>
          <button
            class="btn bg-red-600"
            @click="deletePattern(pattern.patternid)"
          >
            Delete
          </button>
        </td>
      </tr>
    </table>
    <div class="flex flex-col justify-start mt-10 ml-48">
      <h1 class="ml-1 mb-4 font-bold text-3xl">Patterns</h1>
      <add-pattern class="lg:w-2/3 w-1/2"></add-pattern>
      <h1 class="ml-1 mb-4 font-bold text-3xl">Add Patterns to Species</h1>
      <specis-patterns class="lg:w-2/3 w-1/2"></specis-patterns>
    </div>
  </div>
</template>

<script>
import AddPattern from "../add/AddPattern.vue";
import SpecisPatterns from "../add/SpecisPatterns.vue";
export default {
  components: { AddPattern, SpecisPatterns },
  data() {
    return {
      patterns: [],
    };
  },
  async created() {
    const res = await this.callApi("get", "/api/patterns");
    if (res.status === 200) {
      this.patterns = res.data;
    }
  },
  methods: {
    deletePattern(id) {
      this.callApi("delete", "/api/patterns/" + id);
      location.reload();
    },
  },
};
</script>
