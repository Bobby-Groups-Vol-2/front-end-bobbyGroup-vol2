<template>
  <div class="mt-10 all-card-holder">
    <div class="flex flex-col">
      <h1 class="mx-4 mb-4 font-bold text-3xl">Add Cat</h1>
      <add-cat class="lg:w-2/3"></add-cat>
    </div>

    <table class="m-5 w-4/5 mx-auto bg-white text-gray-800">
      <tr class="text-left border-b-2 border-gray-300">
        <th class="px-2 py-3">ID</th>
        <th class="px-2 py-3">Name</th>
        <th class="px-2 py-3">Species</th>
        <th class="px-2 py-3">DOB</th>
        <th class="px-2 py-3">Image</th>
        <th class="px-2 py-3">Price</th>
        <th class="px-2 py-3">Certificate</th>
        <th class="px-2 py-3">status</th>
        <th class="px-2 py-3">Edit Cat</th>

        <th class="px-2 py-3">Delete Cat</th>
      </tr>
      <!-- //? id -->

      <tr
        v-for="cat in cats"
        :key="cat.id"
        class="bg-fauxlavender border-b border-gray-200 rounded-4xl"
      >
        <td class="px-2 py-3 flex flex-col">
          {{ cat.catid }}
        </td>
        <!-- //? Name -->

        <td class="px-2 py-3">
          {{ cat.catname }}
          <input
            v-show="cat.isOn"
            v-model="theCat.catname"
            type="text"
            class="w-32"
          />
        </td>
        <!-- //? species -->

        <td class="px-2 py-3">
          {{ cat.species.speciesname }}

          <div v-show="cat.isOn" class="dropdown">
            <div id="textSm" tabindex="0" class="btn btn-sm">
              {{ speciesName }}
            </div>
            <ul
              tabindex="0"
              class="
                p-2
                shadow
                menu
                dropdown-content
                bg-base-100
                rounded-box
                w-52
              "
            >
              <li v-for="specie in species" :key="specie.speciesid">
                <a
                  @click="
                    (theCat.speciesid = specie.speciesid),
                      (speciesName = specie.speciesname)
                  "
                  >{{ specie.speciesname }}</a
                >
              </li>
            </ul>
          </div>
        </td>
        <!-- //? DOB -->

        <td class="px-2 py-5">
          {{ cat.dob }}
          <button
            v-show="cat.isOn"
            id="textSm"
            tabindex="0"
            class="btn btn-sm"
            @click="cat.dateOn = !cat.dateOn"
          >
            New DOB
          </button>
          <span class="text-black font-bold"></span>
          <div v-show="cat.dateOn" class="absolute">
            <v-date-picker v-model="date" :model-config="modelConfig" />
            <button
              id="textSm"
              tabindex="0"
              class="btn btn-sm"
              @click="updateDOB(date), (cat.dateOn = !cat.dateOn)"
            >
              Confirm
            </button>
          </div>
        </td>

        <!-- //? img -->

        <td class="px-2 py-3">
          {{ cat.catimage }}
          <input
            v-show="cat.isOn"
            v-model="theCat.catimage"
            type="text"
            class="w-32"
          />
        </td>
        <!-- //? price -->

        <td class="px-2 py-3">
          {{ cat.price }}
          <input
            v-show="cat.isOn"
            v-model="theCat.price"
            type="number"
            class="w-32"
          />
        </td>
        <!-- //? Cer -->

        <td class="px-2 py-3">
          <span>{{ certificateCheck(cat.certificateimage) }}</span>
        </td>
        <!-- //? status -->

        <td class="px-2 py-3">
          <span v-html="orderCheck(cat.status)"></span>
          <input
            v-show="cat.isOn"
            v-model="theCat.status"
            type="checkbox"
            :checked="cat.status == 'T' ? true : false"
            class="w-32"
          />
        </td>
        <td>
          <button class="btn bg-yellow-500" @click="editCat(cat.catid)">
            Edit
          </button>
          <button v-show="cat.isOn" @click="putCat">Confirm</button>
        </td>
        <td>
          <button class="btn bg-red-600" @click="deleteCat(cat.catid)">
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cats: [],
      theCat: {
        catid: 1,
        catname: "",
        catimage: "catTest.jpg",
        price: 0,
        gender: "",
        status: "",
        dob: "",
        certificateimage: "catCer.png",
        orders_orderid: 1,
        speciesid: 0,
        speciesname: "",
      },
      species: [],
      speciesName: "SELECT SPECIES",
      date: "",
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD", // Uses 'iso' if missing
      },
      // dateOn: false,
      haveCer: false,
      ordered: '<p style="color: red">Ordered</p>',
      inStock: '<p style="color: green">In stock</p>',
    };
  },
  async created() {
    const resCat = await this.callApi("get", "/api/cats");
    if (resCat.status === 200) {
      this.cats = resCat.data;
      this.cats = this.cats.map(function (el) {
        const o = Object.assign({}, el);
        o.isOn = false;
        return o;
      });
      this.cats = this.cats.map(function (el) {
        const o = Object.assign({}, el);
        o.dateOn = false;
        return o;
      });
      const resSpecies = await this.callApi("get", "/api/species");
      if (resSpecies.status === 200) {
        this.species = resSpecies.data;
      }
    }
    // console.log(this.cats);
    // console.log(this.species);
  },
  methods: {
    show() {
      this.isOn = !this.isOn;
    },
    certificateCheck(cer) {
      if (cer) {
        return "Verified";
      }
      return "Invalidated";
    },
    orderCheck(order) {
      if (order === "T") {
        return this.ordered;
      }
      return this.inStock;
    },
    deleteCat(id) {
      this.callApi("delete", "/api/cats/" + id);
      location.reload();
    },
    editCat(id) {
      this.cats[id - 1].isOn = !this.cats[id - 1].isOn;
    },
    updateDOB(date) {
      this.theCat.dob = date;
      this.date = date;
    },
    async putCat() {
      // for (let x = 0; x < this.species.length; x++) {
      //   if (speciesName === this.species[x].speciesname)
      //     this.theCat.speciesid = this.species[x].speciesid;
      // }
      const cat = {
        catname: this.theCat.catname,
        catimage: this.theCat.catimage,
        price: this.theCat.price,
        gender: this.theCat.gender,
        status: this.theCat.status,
        dob: this.theCat.status,
        certificateimage: this.theCat.certificateimage,
        orders_orderid: this.theCat.orders_orderid,
        species_speciesid: this.theCat.speciesid,
      };
      await console.log(cat);
      // const res = await this.callApi("post", "/api/cats", cat);
      // if (res.status >= 200) {
      //   alert("Success");
      //   location.reload();
      // }
    },
  },
};
</script>
<style>
#textSm {
  font-size: 9px;
}
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
