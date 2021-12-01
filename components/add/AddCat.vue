<template>
<div class="py-5 bg-fauxlavender rounded-4xl">
  <div class="md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-3">
    <div>
      <!-- //? Name -->
      <label class="label">
        <span class="label-text text-black font-semibold mx-7">Cat's Name</span>
      </label>
      <input
        v-model="cat.catname"
        type="text"
        placeholder="name"
        class="input input-bordered text-white mx-7"
      />
    </div>
    <!-- //? Price -->
    <div>
      <label class="label">
        <span class="label-text text-black font-semibold mx-7">Price</span>
      </label>
      <input
        v-model="cat.price"
        type="text"
        placeholder="price"
        class="input input-bordered mx-7"
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
        <span class="label-text text-black font-semibold mx-7">Species</span>
      </label>
      <div class="dropdown">
        <div tabindex="0" class="btn select-btn mx-7">{{ speciesName }}</div>
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
        <span class="label-text text-black font-semibold mx-7">Gender</span>
      </label>
      <div class="dropdown">
        <div tabindex="0" class="btn select-btn mx-7">{{ gender }}</div>
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
        <span class="label-text text-black font-semibold mx-7">Date of Birth</span>
      </label>
      <button tabindex="0" class="btn select-btn mx-7" @click="show()">DOB</button>
      <span class="text-black font-medium">{{ date }}</span>
      <div v-if="isOn">
        <v-date-picker v-model="date" :model-config="modelConfig" />
        <button
          tabindex="0"
          class="btn select-btn"
          @click="updateDOB(date), show()"
        >
          Confirm
        </button>
      </div>
    </div>
    <!-- //? IMG -->
    <div class="my-3">
      <span class="label-text text-black font-semibold mx-8"> Image </span>
      <label for="upload" class="label">
        <span class="label-text text-black mx-7 text-center font-semibold redesign-upload btn select-btn ">Upload Image</span>
      </label>
     <input id="upload" type="file"  accept="image/*" @change="onFileChange" class="mx-7" />
      <div id="preview" class="h-1/2">
        <img v-if="img" :src="img" class="mx-7"/>
      </div>
    </div>
  </div>
   <div class="md:justify-end md:flex md:mr-7 lg:mr-3 xl:mr-24">
      <button
        class="btn mt-5 confirm mx-7"
        @click="
          confirmCat(
            cat.catname,
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
        // catid: 1,
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
      img: null,
      selectedFile: null,
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
    onFileChange(e) {
      const img = e.target.files[0];

      this.img = URL.createObjectURL(img);
      this.selectedFile = img;

      // console.log(this.file);
      // console.log(this.img);
    },
    async confirmCat(
      catName,
      DOB,
      speciesId,
      Price,
      Status,
      Gender,
      certificateImage,
      ordersOrderid
    ) {
      const formData = new FormData();
      formData.append("catname", catName);
      formData.append("myFile", this.selectedFile, this.selectedFile.name);
      formData.append("price", Price);
      formData.append("gender", Gender);
      formData.append("status", Status);
      formData.append("dob", DOB);
      formData.append("certificateimage", certificateImage);
      formData.append("orders_orderid", ordersOrderid);
      formData.append("species_speciesid", speciesId);

      // console.log(formData.get("myFile"));
      // console.log(this.selectedFile.name);
      // const cat = {
      //   catname: catName,
      //   myFile: formData,
      //   price: Price,
      //   gender: Gender,
      //   status: Status,
      //   dob: DOB,
      //   certificateimage: certificateImage,
      //   orders_orderid: ordersOrderid,
      //   species_speciesid: speciesId,
      // };

      const res = await this.callApi("post", "/api/cats", formData);
      if (res.status >= 200) {
        alert("Success");
        location.reload();
      }
    },
  },
};
</script>

<style scoped>
/* #preview {
  position: absolute;
} */

#preview img {
  max-width: 80%;
  max-height: 200px;
}
::placeholder {
  color: aliceblue;
}
.btn,
input {
  background-color: #43362d;
}
.btn {
  color: #faf2c5;
}
.select-btn {
  background-color: #9e5f43;
  border: 0cm;
}
.select-btn:hover {
  background-color: #43362d;
  color: #faf2c5;
  border: 0cm;
}
.confirm {
  background-color: olivedrab;
  border: 0ch;
  color: #faf2c5;
}
.confirm:hover {
  background-color: #c34f7c;
  border: 0ch;
  color: #faf2c5;
}
input[type="file"] {
    display: none;
}
.redesign-upload {
    background-color: #9e5f43;
    border: 1px solid #9e5f43;
    color: #faf2c5;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
}
</style>
