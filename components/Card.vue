<template>
  <div
    class="
      card
      bg-white
      mt-5
      mb-7
      md:my-2
      px-5
      pb-14
      pt-4
      shadow-2xl
      rounded-3xl
      flex
      items-center
      justify-center
      overflow-visible
      sm:w-48
      lg:mx-32
      xl:mx-72
    "
  >
    <div class="m-2 overflow-hidden">
      <img :src="catImage" class="object-cover w-full border-2 border-black" />
    </div>
    <div class="text-sm">
      <p class="card-title my-1" style="color: #c34f7c">{{ catName }}</p>
      <div class="w-32">
        <p><span class="font-semibold"> Species: </span> {{ catSpecies }}</p>
        <p><span class="font-semibold">price: </span> {{ catPrice }}</p>
      </div>
    </div>
    <button
      class="
        reserve-button
        flex
        items-center
        justify-center
        absolute
        rounded-4xl
        w-32
        h-auto
        object-cover
        mt-72
        py-2
        text-white
        font-bold
        text-2xl
      "
      @click="orderCat(catId)"
    >
      จอง
    </button>
    <button
      class="
        detail-button
        text-white
        p-1
        rounded-4xl
        absolute
        mt-52
        ml-24
        text-sm
        sm:mt-48 sm:ml-28
      "
      @click="isOn = !isOn"
    >
      เพิ่มเติม
    </button>
    <div v-if="isOn" class="bg-white mt-3 absolute pt-1 h-4/5">
      <!-- header -->
      <div class="px-4 py-2 border-b border-gray-200 flex flex-row">
        <h2 class="text-xl font-semibold" style="color: #c34f7c">
          ข้อมูลเพิ่มเติม
        </h2>
        <button
          style="color: #c34f7c"
          class="rounded-4xl text-xl font-bold ml-10"
          @click="isOn = !isOn"
        >
          X
        </button>
      </div>

      <!-- body -->
      <div id="textSm" class="w-full px-3 py-5">
        <ul>
          <li><span class="font-semibold">Gender:</span> {{ catGender }}</li>
          <li>
            <span class="font-semibold"> Date of Birth: </span>
            <span id="textVerySm">{{ catDate }}</span>
          </li>
          <li>
            <span class="font-semibold"> Pattern: </span> {{ catPattern }}
          </li>
          <li>
            <span class="font-semibold"> Status: </span>
            <span v-html="catStatus"></span>
          </li>
          <li><span class="font-semibold"> Certificate: </span> test</li>
        </ul>
      </div>

      <!-- footer -->
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
    // method: { type: Function },
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
  mounted() {
    // this.method();
  },
  methods: {
    orderCat() {
      this.$emit("onOrder");
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
#textSm {
  font-size: 0.75rem;
}
#textVerySm {
  font-size: 0.65rem;
}
</style>
