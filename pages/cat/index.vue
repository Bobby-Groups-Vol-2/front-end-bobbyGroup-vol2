<template>
  <div
    class="flex justify-evenly md:flex md:flex-col sm:flex sm:flex-col xl:ml-40"
  >
    <div class="flex flex-col items-center xl:mr-48">
      <div class="flex flex-col my-10">
        <div v-if="$auth.user.role === 'user'">
          <button
            v-if="isNoOder"
            class="btn register-button px-5"
            @click="createOrder"
          >
            Create Order
          </button>
        </div>
        <div class="flex flex-col text-black">
          <div>
            <button v-if="isOrder" class="btn register-button" @click="reOrder">
              Reset Order
            </button>
          </div>

          <span v-if="isOrder" class="font-bold text-xl mt-5 mr-5"
            >Your Order is: {{ showNumOrder }}</span
          >
        </div>
      </div>
      <div class="flex flex-col sm:ml-28 text-black">
        <label class="text-xl">Search by species , name , Gender</label>
        <div>
          <input
            v-model="search.name"
            class="text-black mt-5 w-20 sm:w-96"
            type="text"
            placeholder="Search.."
          />
        </div>

        <div class="text-xl mt-5">
          <label>Both</label>
          <input v-model="search.name" type="radio" value="" />
          <label>Male</label>
          <input v-model="search.name" type="radio" value="Male" />
          <label>Female</label>
          <input v-model="search.name" type="radio" value="Female" />
        </div>
      </div>
    </div>
    <div
      class="
        flex flex-col
        items-center
        mt-10
        w-2/3
        md:w-4/5
        lg:w-3/4
        xl:w-3/5
        sm:ml-28 sm:grid sm:grid-cols-2
        md:mt-10
        lg:grid-cols-4 lg:mx-1 lg:gap-16
        xl:grid-cols-4 xl:gap-x-48
      "
    >
      <Card
        v-for="cat in filteredList"
        :key="cat.catid"
        :cat-name="cat.catname"
        :cat-species="cat.species.speciesname"
        :cat-price="cat.price"
        :cat-gender="cat.gender"
        :cat-date="cat.dob"
        :cat-status="orderCheck(cat.status)"
        :cat-pattern="patternCheck(cat.species.speciesid)"
        :cat-img="cat.catimage"
        @onOrder="order(cat.catid, cat.status)"
      >
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",

  data() {
    return {
      cats: [
        // {
        //   patternname: "",
        // },
      ],
      search: {
        name: "",
        gender: "",
      },
      // searchName: "",
      // searchGender: "",
      created: false,
      orderNumber: [],
      userOrdered: [],
      patterns: [],
      isOrder: false,
      isNoOder: true,
      showNumOrder: 0,
      ordered: '<span style="color: red">Ordered</span>',
      inStock: '<span style="color: green">In stock</span>',
    };
  },
  computed: {
    filteredList() {
      return this.cats.filter(
        (post) =>
          post.catname.toLowerCase().includes(this.search.name.toLowerCase()) ||
          post.species.speciesname
            .toLowerCase()
            .includes(this.search.name.toLowerCase()) ||
          post.gender.toLowerCase().includes(this.search.name.toLowerCase())
        // ||post.price.includes(this.search.name.toLowerCase)
        // post.price.toLowerCase().includes(this.searchName.toLowerCase())
      );
    },
  },
  async created() {
    const resCat = await this.callApi("get", "/api/cats");
    if (resCat.status === 200) {
      this.cats = resCat.data;
    }
    console.log(this.cats);

    const resPats = await this.callApi("get", "/api/patterns");
    if (resPats.status === 200) {
      this.patterns = resPats.data;
    }
    const orderNum = await this.callApi("get", "/api/orders");
    this.orderNumber = orderNum.data;
    // this.showNumOrder = this.orderNumber.length;
    // console.log(this.cats);
  },
  methods: {
    async createOrder() {
      this.created = true;
      const postOrder = {
        orderid: this.orderNumber.length + 1,
        users_userid: this.$auth.user.userid,
      };
      this.showNumOrder = await postOrder.orderid;
      this.isOrder = !this.isOrder;
      this.isNoOder = !this.isNoOder;
      await this.callApi("post", "/api/orders", postOrder);
      // location.reload();
    },
    reOrder() {
      this.isOrder = !this.isOrder;
      this.isNoOder = !this.isNoOder;

      location.reload();
    },
    async order(id, status) {
      if (this.created === true) {
        if (status === "F") {
          const cat = this.cats.find(({ catid }) => catid === id);
          const orderNum = await this.callApi("get", "/api/orders");
          // const ordered = {
          //   catid: cat.catid,
          //   catimage: cat.catimage,
          //   catname: cat.catname,
          //   certificateimage: cat.certificateimage,
          //   dob: cat.dob,
          //   gender: cat.gender,
          //   orders_orderid: orderNum.data.length,
          //   price: cat.price,
          //   species_speciesid: cat.species_speciesid,
          //   status: "T",
          // };
          const formData = new FormData();
          formData.append("catname", cat.catname);
          formData.append("myFile", cat.catimage);
          formData.append("price", cat.price);
          formData.append("gender", cat.gender);
          formData.append("status", "T");
          formData.append("dob", cat.dob);
          formData.append("certificateimage", cat.certificateimage);
          formData.append("orders_orderid", orderNum.data.length);
          formData.append("species_speciesid", cat.species_speciesid);
          // this.userOrdered.push(ordered)
          const res = await this.callApi("put", "/api/cats/" + id, formData);
          if (res.status >= 200) {
            this.$toast.success("Login success", {
              position: "bottom-center",
              duration: 1000,
            });
          }
        } else {
          this.$toast.error("ถูกจองเเล้ว", {
            position: "bottom-center",
            duration: 1000,
          });
        }
      } else {
        this.$toast.error("กรุณาสร้าง order ก่อน", {
          position: "bottom-center",
          duration: 1000,
        });
      }
    },
    certificateCheck(cer) {
      if (cer.length > 2) {
        return "Verified";
      }
      return "invalidated";
    },
    orderCheck(order) {
      if (order === "T") {
        return this.ordered;
      }
      return this.inStock;
    },
    patternCheck(speciesId) {
      const pattern = this.patterns.map((x) =>
        x.owns.map((y) => y.species_speciesid)
      );

      for (let i = 0; i < pattern.length; i++) {
        if (speciesId === parseInt(pattern[i])) {
          // console.log(this.patterns[i].patternname);

          return this.patterns[i].patternname;
        }
      }
      // console.log(parseInt(pattern[1]));
      // console.log(speciesId);
    },
  },
};
</script>
<style>
.register-button {
  color: #9e5f43;
  background-color: aliceblue;
}

.register-button:hover {
  border: transparent;
  color: white;
  background-color: #9e5f43;
}
</style>
