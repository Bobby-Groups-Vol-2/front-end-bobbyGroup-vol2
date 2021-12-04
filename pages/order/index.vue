<template>
  <div class="flex justify-center">
    <div
      class="
        bg-white
        w-11/12
        mt-12
        rounded-4xl
        p-5
        text-black
        h-auto
        shadow-2xl
        sm:w-2/3
        lg:w-full
      "
    >
      <div class="flex justify-center items-center">
        <div class="flex flex-col items-center mt-10">
          <img src="../../asset/user.png" class="w-1/3 h-auto" />

          <!-- User Data -->
          <h2 class="text-lg">Username: {{ $auth.user.username }}</h2>
          <h2 class="text-md">Address: {{ $auth.user.address }}</h2>
          <h2 class="text-md">Telephone: {{ $auth.user.tel }}</h2>
        </div>
      </div>

      <div>
        <h1 class="mt-10">Your Orders</h1>
        <hr />

        <!-- Div Loop -->
        <div>
          <div
            id="timing"
            class="bg-red-700 flex justify-between text-white text-sm p-2"
          >
            <span> Order ID</span>
          </div>
          <div class="flex flex-col">
            <div v-for="cat1 in cats" :key="cat1.id">
              <p class="text-red-600 font-bold my-5">Order{{ cat1.orderid }}</p>
              <div class="sm:grid sm:grid-cols-2 gap-4">
                <CardNoBTN
                  v-for="cat in cat1.cats"
                  :key="cat.catid"
                  :cat-name="cat.catname"
                  :cat-species="cat.speciesname"
                  :cat-price="cat.price"
                  :cat-gender="cat.gender"
                  :cat-date="cat.dob"
                  :cat-status="orderCheck(cat.status)"
                  :cat-pattern="patternCheck(cat.species_speciesid)"
                  :cat-img="cat.catimage"
                />
              </div>
              <!-- <span>{{ totalOrder }}</span
              ><button>Check out</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    if (store.$auth.user.role === "admin") {
      redirect("./cat");
    }
  },

  data() {
    return {
      orders: [],
      cats: [],
      species: [],
      speciesName: [],
      patterns: [],
      totalOrder: [],
      total: 0,
      ordered: '<span style="color: red">Ordered</span>',
      inStock: '<span style="color: green">In stock</span>',
    };
  },
  // computed: {
  //   calTotalByOrder() {
  //     return;
  //   },
  // },

  async created() {
    const resOrderCat = await this.callApi("get", "/api/orders");
    const resSpecies = await this.callApi("get", "/api/species");

    this.species = resSpecies.data;
    if (resOrderCat.status === 200) {
      this.orders = resOrderCat.data;
      // console.log(this.orders);
      // console.log(this.$auth.user.userid);
      for (let i = 0; i < this.orders.length; i++) {
        if (this.$auth.user.userid === this.orders[i].users_userid) {
          this.cats.push(this.orders[i]);
        }
      }
    }
    console.log(this.cats);
    // const price = this.cats.map(this.amount).reduce(this.sum);
    // const price = this.cats.map((item) => item.cats.map((item) => item.price));
    // console.log(price);

    const resPats = await this.callApi("get", "/api/patterns");
    if (resPats.status === 200) {
      this.patterns = resPats.data;
    }
  },

  methods: {
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
    certificateCheck(cer) {
      if (cer.length > 2) {
        return "Verified";
      }
      return "invalidated";
    },
    amount(item) {
      return item.cats.map(this.amount2);
    },
    amount2(item) {
      return item.price;
    },
    sum(prev, next) {
      return prev + next;
    },
  },
};
</script>
<style>
hr {
  height: 2px;
  background-color: black;
  margin-bottom: 2%;
}
</style>
