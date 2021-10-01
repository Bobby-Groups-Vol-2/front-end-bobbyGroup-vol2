<template>
  <div
    class="
      py-5
      pl-10
      lg:grid lg:grid-cols-3
      lg:gap-3
      bg-fauxlavender
      rounded-4xl
    "
  >
    <div>
      <!-- //? Name -->
      <label class="label">
        <span class="label-text text-black">Name</span>
      </label>
      <input
        v-model="cat.catname"
        type="text"
        placeholder="name"
        class="input input-bordered"
      />
    </div>
    <!-- //? Price -->
    <div>
      <label class="label">
        <span class="label-text text-black">Price</span>
      </label>
      <input
        v-model="cat.price"
        type="text"
        placeholder="price"
        class="input input-bordered"
      />
    </div>
    <!-- //? Status -->
    <!-- <div>
        <label class="label">
          <span class="label-text text-black">Status</span>
        </label>
        <input
          v-model="cat.status"
          type="text"
          placeholder="price"
          class="input input-bordered"
        />
      </div> -->
    <!-- //? Species -->

    <div>
      <label class="label">
        <span class="label-text text-black">Species</span>
      </label>
      <div class="dropdown">
        <div tabindex="0" class="btn">{{ speciesName }}</div>
        <ul
          tabindex="0"
          class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
        >
          <li v-for="specie in species" :key="specie.speciesid">
            <a @click="updateSpecies(specie.speciesname, specie.speciesid)">{{
              specie.speciesname
            }}</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- //? Gender -->
    <div>
      <label class="label">
        <span class="label-text text-black">Gender</span>
      </label>
      <div class="dropdown">
        <div tabindex="0" class="btn">{{ gender }}</div>
        <ul
          tabindex="0"
          class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
        >
          <li><a @click="updateGender((gender = 'Male'))">Male</a></li>
          <li><a @click="updateGender((gender = 'Female'))">Female</a></li>
        </ul>
      </div>
    </div>
    <!-- //? DOB -->
    <div>
      <label class="label">
        <span class="label-text text-black">Date of Birth</span>
      </label>
      <button tabindex="0" class="btn" @click="show()">DOB</button>
      <span class="text-black font-bold">{{ date }}</span>
      <div v-if="isOn">
        <v-date-picker v-model="date" :model-config="modelConfig" />
        <button tabindex="0" class="btn" @click="updateDOB(date), show()">
          Confirm
        </button>
      </div>
    </div>
    <div>
      <button
        class="btn mt-9 bg-green-600 border-green-600"
        @click="
          confirmCat(
            cat.catname,
            cat.catimage,
            cat.dob,
            cat.speciesid,
            cat.price,
            cat.status,
            cat.gender,
            cat.certificateimage,
            cat.orders_orderid
          )
        "
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
      cat: {
        catid: 1,
        catname: "",
        catimage: "catTest.jpg",
        price: 0,
        gender: "",
        status: "F",
        dob: "2021-08-22",
        certificateimage: "catCer.png",
        orders_orderid: 1,
        speciesid: 0,
        speciesname: "",
      },
      gender: "select gender",
      species: [],
      speciesName: "select species",
      selectedDate: null,
      date: "",
      isOn: false,
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD", // Uses 'iso' if missing
      },
    };
  },
  async created() {
    const resSpecies = await this.callApi("get", "/api/species");
    this.species = resSpecies.data;
  },
  methods: {
    show() {
      this.isOn = !this.isOn;
    },
    updateDOB(date) {
      this.cat.dob = date;
      this.date = date;
    },
    updateSpecies(specie, id) {
      this.speciesName = specie;
      this.cat.speciesname = specie;
      this.cat.speciesid = id;
    },
    updateGender(gender) {
      this.cat.gender = gender;
      this.gender = gender;
    },
    async confirmCat(
      catName,
      catImage,
      DOB,
      speciesId,
      Price,
      Status,
      Gender,
      certificateImage,
      ordersOrderid
    ) {
      const cat = {
        catname: catName,
        catimage: catImage,
        price: Price,
        gender: Gender,
        status: Status,
        dob: DOB,
        certificateimage: certificateImage,
        orders_orderid: ordersOrderid,
        species_speciesid: speciesId,
      };

      const res = await this.callApi("post", "/api/cats", cat);
      if (res.status >= 200) {
        alert("Success");
        location.reload();
      }
    },
  },
};
</script>
