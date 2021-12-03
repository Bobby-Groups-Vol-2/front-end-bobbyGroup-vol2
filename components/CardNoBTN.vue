<template>
  <div
    class="
      card
      bg-white
      mt-5
      mb-7
      md:my-2
      px-5
      pb-7
      pt-4
      shadow-2xl
      rounded-3xl
      flex
      items-center
      justify-center
      overflow-visible
    "
  >
    <div class="m-2 overflow-hidden">
      <img :src="catImage" class="object-cover w-full border-2 border-black" />
    </div>
    <div class="text-sm">
      <p class="card-title my-1" style="color: #c34f7c">{{ catName }}</p>
      <div class="w-32">
        <li>Gender: {{ catGender }}</li>
        <li>price: {{ catPrice }}</li>
        <li>Date of Birth: {{ catDate }}</li>
        <li>status: <span v-html="catStatus"></span></li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    catName: { type: String, default: "no name" },
    catPrice: { type: Number, default: 0 },
    catSpecies: { type: String, default: "no species" },
    catGender: { type: String, default: "no gender" },
    catDate: { type: String, default: "no DOB" },
    catPattern: { type: String, default: "no pattern" },
    catStatus: { type: String, default: "no status" },
    catImg: { type: String, default: "" },
    catId: { type: Number, default: 0 },
  },
  data() {
    return {
      isOn: false,
      img: this.catImg,
    };
  },
  computed: {
    catImage() {
      return this.$config.catimage + this.catImg;
    },
  },
};
</script>

<style scoped>
.detail-button:hover {
  background-color: #faf2c5;
  color: #43362d;
}

.detail-button {
  background-color: transparent;
  color: #c34f7c;
}
.reserve-button {
  background-color: #43362d;
  color: #faf2c5;
}

.reserve-button:hover {
  background-color: #c34f7c;
  color: #faf2c5;
  border: transparent;
}

div {
  color: #43362d;
}
img {
  height: 6rem;
  width: 7rem;
}
</style>
