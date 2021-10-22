<template>
  <div class="mt-10">
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
        <td
          v-for="pattern in specie.owns"
          :key="pattern.patterns_patternid"
          class="px-2 py-3"
        >
          {{ pattern.patterns_patternid }}
        </td>
        <td
          v-for="pattern in specie.owns"
          :key="pattern.patterns_patternid"
          class="px-2 py-3"
        >
          {{ pattern.pattern.patternname }}
        </td>
      </tr>
    </table>
    <div class="flex flex-col justify-start ml-48 my-10">
      <h1 class="ml-1 mb-4 font-bold text-3xl">Species</h1>
      <add-species class="lg:w-2/3 w-1/2"></add-species>
    </div>
  </div>
</template>

<script>
export default {
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
};
</script>
