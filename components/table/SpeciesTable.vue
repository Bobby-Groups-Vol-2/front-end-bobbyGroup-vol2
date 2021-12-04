<template>
  <div class="all-card-holder w-full flex justify-center flex-col">
    <div class="flex flex-col my-10">
      <h1 class="mx-6 mb-4 font-bold text-2xl">Add Species</h1>
      <add-species></add-species>
      <h1 class="mx-6 mb-4 font-bold text-2xl my-10">Add Pattern</h1>
      <add-pattern></add-pattern>
      <h1 class="mx-6 mb-4 font-bold text-2xl my-10">Add Pattern to Species</h1>
      <specis-patterns></specis-patterns>
    </div>

    <table class="m-5 w-4/5 mx-auto tr-heading all-text">
      <tr class="tr-heading text-left border-b-2 border-gray-300">
        <th class="px-2 py-3">Species ID</th>
        <th class="px-2 py-3">Species Name</th>
        <th class="px-2 py-3">Pattern ID</th>
        <th class="px-2 py-3">Pattern Name</th>
        <th class="px-8 py-3 sm:px-2">Edit Cat</th>
        <th class="px-2 py-3">Delete Cat</th>
      </tr>

      <tr
        v-for="specie in species"
        :key="specie.id"
        class="bg-fauxlavender border-b border-gray-200 rounded-4xl"
      >
        <td class="px-2 py-3">{{ specie.speciesid }}</td>
        <td class="px-2 py-3">
          {{ specie.speciesname }}
          <input
            v-show="specie.isOn"
            v-model="theSpecies.speciesname"
            type="text"
            class="w-32"
          />
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
            class="btn select-btn border-0"
            @click="editSpecies(specie.speciesid)"
          >
            Edit
          </button>
          <button
            v-show="specie.isOn"
            class="btn select-btn border-0"
            @click="putSpecies(specie.speciesid, theSpecies.speciesname)"
          >
            Confirm
          </button>
        </td>
        <td>
          <button
            class="btn border-0 bg-red-600"
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
      theSpecies: {
        speciesid: 0,
        speciesname: "",
      },
    };
  },
  async created() {
    const resS = await this.callApi("get", "/api/species");
    // if (res.status === 200) {
    //   this.species = res.data;
    // }
    if (resS.status === 200) {
      this.species = resS.data;
      this.species = this.species.map(function (el) {
        const o = Object.assign({}, el);
        o.isOn = false;
        return o;
      });
    }
    console.log(this.species);
  },
  methods: {
    deleteSpecies(id) {
      this.callApi("delete", "/api/species/" + id);
      // location.reload();
    },
    editSpecies(id) {
      this.species.find(({ speciesid }) => speciesid === id).isOn =
        !this.species.find(({ speciesid }) => speciesid === id).isOn;
    },
    async putSpecies(id, name) {
      const specie = {
        speciesid: id,
        speciesname: name,
      };
      const res = await this.callApi("put", "/api/species/" + id, specie);
      if (res.status >= 200) {
        alert("Success");
        location.reload();
      }
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
.tr-heading {
  background-color: #43362d;
  color: #faf2c5;
}
.all-text {
  color: #43362d;
}
</style>