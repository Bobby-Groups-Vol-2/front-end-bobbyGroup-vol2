<template>
  <div class="mt-10 all-card-holder">
    <div class="flex flex-col">
      <h1 class="mx-4 mb-4 font-bold text-3xl">Add Cat</h1>
      <add-cat class=""></add-cat>
    </div>
    <div class="xl:flex xl:justify-center">
      <table class="m-5 w-4/5 mx-auto bg-white all-text">
        <tr class="tr-heading text-left border-b-2 border-gray-300">
          <th class="px-8 py-3">ID</th>
          <th class="px-8 py-3">Name</th>
          <th class="px-8 py-3">Gender</th>

          <th class="px-8 py-3">Species</th>
          <th class="px-10 py-3">DOB</th>
          <th class="px-8 py-3">Image</th>
          <th class="px-8 py-3">Price</th>
          <!-- <th class="px-8 py-3">Certificate</th> -->
          <th class="px-8 py-3">status</th>
          <th class="px-8 py-3">Edit Cat</th>
          <th class="px-2 py-3">Delete Cat</th>
        </tr>
        <!-- //? id -->

        <tr
          v-for="cat in cats"
          :key="cat.id"
          class="
            bg-fauxlavender
            border-b border-gray-200
            rounded-4xl
            sm:text-sm
          "
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
          <td>
            {{ cat.gender }}
            <div v-show="cat.isOn" class="dropdown">
              <div id="textSm" tabindex="0" class="btn btn-sm">
                {{ gender }}
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
                  text-white
                "
              >
                <li><a @click="updateGender((gender = 'Male'))">Male</a></li>
                <li>
                  <a @click="updateGender((gender = 'Female'))">Female</a>
                </li>
              </ul>
            </div>
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
                  text-white
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
              {{ date }}
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

          <td class="px-2 py-3 flex flex-col">
            {{ cat.catimage }}
            <input
              v-show="cat.isOn"
              accept="image/*"
              type="file"
              @change="onFileChange"
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
          <!-- 
          <td class="px-2 py-3">
            <span>{{ certificateCheck(cat.certificateimage) }}</span>
          </td> -->
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
            <button class="btn select-btn border-0" @click="editCat(cat.catid)">
              Edit
            </button>
            <button
              v-show="cat.isOn"
              class="btn select-btn border-0"
              @click="putCat(cat.catid)"
            >
              Confirm
            </button>
          </td>
          <td>
            <button
              class="btn bg-red-600 border-0"
              @click="deleteCat(cat.catid)"
            >
              Delete
            </button>
          </td>
        </tr>
      </table>
    </div>
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
        status: "F",
        dob: "",
        certificateimage: "catCer.png",
        orders_orderid: 1,
        speciesid: 0,
        speciesname: "",
      },
      isOn: false,
      species: [],
      speciesName: "SELECT SPECIES",
      date: "New DOB",
      selectedFile: null,
      gender: "SELECT GENDER",
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
    console.log(this.cats);
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
      this.cats.find(({ catid }) => catid === id).isOn = !this.cats.find(
        ({ catid }) => catid === id
      ).isOn;
    },
    updateDOB(date) {
      this.theCat.dob = date;
      this.date = date;
    },
    updateGender(gender) {
      this.theCat.gender = gender;
      this.gender = gender;
    },
    onFileChange(e) {
      const img = e.target.files[0];

      // this.img = URL.createObjectURL(img);
      this.selectedFile = img;
    },
    async putCat(id) {
      // for (let x = 0; x < this.species.length; x++) {
      //   if (speciesName === this.species[x].speciesname)
      //     this.theCat.speciesid = this.species[x].speciesid;
      // }
      // const cat = {
      //   catname: this.theCat.catname,
      //   catimage: this.theCat.catimage,
      //   price: this.theCat.price,
      //   gender: this.theCat.gender,
      //   status: this.theCat.status,
      //   dob: this.theCat.status,
      //   certificateimage: this.theCat.certificateimage,
      //   orders_orderid: this.theCat.orders_orderid,
      //   species_speciesid: this.theCat.speciesid,
      // };
      // console.log(id);
      const formData = new FormData();
      formData.append("catname", this.theCat.catname);
      formData.append("myFile", this.selectedFile, this.selectedFile.name);
      formData.append("price", this.theCat.price);
      formData.append("gender", this.theCat.gender);
      formData.append("status", this.theCat.status);
      formData.append("dob", this.theCat.dob);
      formData.append("certificateimage", this.theCat.certificateimage);
      formData.append("orders_orderid", this.theCat.orders_orderid);
      formData.append("species_speciesid", this.theCat.speciesid);
      // await console.log(formData);
      // const res =
      await this.callApi("put", "/api/cats/" + id, formData);
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
    width: 80%;
  }
}
@media (min-width: 1440px) {
  .all-card-holder {
    width: 60%;
  }
}
.select-btn {
  background-color: #9e5f43;
  color: #faf2c5;
  border: 0cm;
}
.select-btn:hover {
  background-color: black;
  color: #faf2c5;
  border: 0cm;
}
.tr-heading {
  background-color: #43362d;
  color: #faf2c5;
}
.all-text {
  color: #43362d;
}
</style>
