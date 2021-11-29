<template>
  <div class="flex justify-evenly">
    <div class="flex flex-col mt-10 md:grid grid-cols-3 md:gap-12 md:mt-10">
      <Card
        v-for="cat in cats"
        :key="cat.id"
        :cat-name="cat.catname"
        :cat-species="cat.species.speciesname"
        :cat-price="cat.price"
        :cat-gender="cat.gender"
        :cat-date="cat.dob"
        :cat-status="orderCheck(cat.status)"
        :cat-pattern="patternCheck(cat.species.speciesid)"
        :cat-img="cat.catimage"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cats: [
        // {
        //   patternname: "",
        // },
      ],
      patterns: [],
      ordered: '<span style="color: red">Ordered</span>',
      inStock: '<span style="color: green">In stock</span>',
    };
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
  },
  methods: {
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
