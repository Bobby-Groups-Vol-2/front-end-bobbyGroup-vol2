<template>
  <div
    class="
      card
      bg-white
      my-2
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
    <div class="m-2  overflow-hidden">
      <img
        src="https://bit.ly/3CEuFtX"
        class="object-cover w-full h-24"
      />
    </div>
    <div class="text-sm">
      <p class="card-title my-1" style="color:#C34F7C">Persian</p>
      <div class="w-32">
        <p>Species: Persian</p>
        <p>name: Bobby</p>
        <p>price: 1000</p>
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
        mt-48
        ml-32
        text-sm
      "
      @click="isOn = !isOn"
    >
      เพิ่มเติม
    </button>
    <div v-if="isOn" class="bg-white mt-3 absolute rounded-4xl">
      <!-- header -->
      <div class="px-4 py-2 border-b border-gray-200 flex flex-row">
        <h2 class="text-xl font-semibold" style="color:#C34F7C">ข้อมูลเพิ่มเติม</h2>
        <button style="color:#C34F7C"
          class="rounded-4xl text-xl font-bold ml-10"
          @click="isOn = !isOn"
        >
          X
        </button>
      </div>

      <!-- body -->
      <div class="w-full px-3 py-10">
        <ul>
          <li>Gender: male</li>
          <li>Date of Birth: 18/06/2010</li>
          <li>Pattern: line prang</li>
          <li>status: ยังไม่จอง</li>
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
    catSpecies: { type: String, default: "no species" },
  },
  data() {
    return {
      isOn: false,
    };
  },
};
</script>

<style scoped>
.detail-button:hover{
  background-color: #faf2c5;
  color: #43362d;
}

.detail-button{
  background-color: transparent;
  color:#C34F7C;
;
}
.reserve-button {
   background-color: #43362d;
  color: #faf2c5;
}

.reserve-button:hover {
   background-color: #C34F7C;
  color: #faf2c5;
  border: transparent;
}

div{
  color: #43362d;
}
</style>
