<template>
  <div
    class="
      py-5
      lg:grid lg:grid-cols-3
      lg:gap-3
      bg-fauxlavender
      rounded-4xl
    "
  >
    <div>
      <!-- //? Name -->
      <label class="label">
        <span class="label-text text-black font-semibold">Name</span>
      </label>
      <input
        v-model="cat.catname"
        type="text"
        placeholder="name"
        class="input input-bordered text-white"
      />
    </div>
    <!-- //? Price -->
    <div>
      <label class="label">
        <span class="label-text text-black font-semibold">Price</span>
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
        <span class="label-text text-black font-semibold">Species</span>
      </label>
      <div class="dropdown">
        <div tabindex="0" class="btn select-btn">{{ speciesName }}</div>
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
        <span class="label-text text-black font-semibold">Gender</span>
      </label>
      <div class="dropdown">
        <div tabindex="0" class="btn select-btn">{{ gender }}</div>
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
        <span class="label-text text-black font-semibold">Date of Birth</span>
      </label>
      <button tabindex="0" class="btn select-btn" @click="show()">DOB</button>
      <span class="text-black font-medium">{{ date }}</span>
      <div v-if="isOn">
        <v-date-picker v-model="date" :model-config="modelConfig" />
        <button tabindex="0" class="btn select-btn" @click="updateDOB(date), show()">
          Confirm
        </button>
      </div>
    </div>
    <div>
      <button
        class="btn mt-9 confirm"
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
<style scoped>
::placeholder{
  color: aliceblue;
}
.btn, input{
  background-color: #43362d;
}
.btn{
    color: #faf2c5;
}
.select-btn{
  background-color: #9e5f43;
  border: 0cm;
}
.select-btn:hover{
  background-color: #43362d;
  color: #faf2c5;
  border: 0cm;
}
.confirm{
  background-color: olivedrab;
  border: 0ch;
  color: #faf2c5;
}
.confirm:hover{
  background-color: #C34F7C;
  border: 0ch;
  color: #faf2c5;
}
</style>
