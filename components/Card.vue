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
      <img src="https://bit.ly/3CEuFtX" class="object-cover w-full h-24" />
    </div>
    <div class="text-sm">
      <p class="card-title my-1" style="color: #c34f7c">{{ catName }}</p>
      <div class="w-32">
        <p>Species: {{ catSpecies }}</p>
        <p>price: {{ catPrice }}</p>
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
    >
      จอง
    </button>
    <button
      class="
        detail-button
        text-white
        p-2
        rounded-4xl
        absolute
        mt-44
        ml-36
        text-sm
      "
      @click="isOn = !isOn"
    >
      เพิ่มเติม
    </button>
    <div v-if="isOn" class="bg-white mt-3 absolute pt-3">
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
      <div class="w-full px-3 py-5">
        <ul>
          <li>Gender: {{ catGender }}</li>
          <li>
            Date of Birth: <span class="text-sm">{{ catDate }}</span>
          </li>
          <li>Pattern: {{ catPattern }}</li>
          <li>Status: <span v-html="catStatus"></span></li>
          <li>Certificate: test</li>
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
  },
  data() {
    return {
      isOn: false,
    };
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
</style>
