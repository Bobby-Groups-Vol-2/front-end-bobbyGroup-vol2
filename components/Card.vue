<template>
  <div
    class="
      card
      bordered
      bg-white
      text-black
      px-5
      pb-7
      pt-4
      rounded-4xl
      flex
      items-center
      justify-center
      overflow-visible
    "
  >
    <div class="m-2 border-4 border-black overflow-hidden">
      <img
        src="https://picsum.photos/id/1005/400/250"
        class="object-cover w-full h-24"
      />
    </div>
    <div class="text-sm">
      <p class="card-title my-1">Persian</p>
      <div class="w-32">
        <p>Species: Persian</p>
        <p>name: Bobby</p>
        <p>price: 1000</p>
      </div>
    </div>
    <div
      class="
        flex
        items-center
        justify-center
        absolute
        rounded-4xl
        w-32
        h-auto
        bg-green-400
        object-cover
        mt-68
        pb-2
        text-white
        font-bold
        text-3xl
      "
    >
      จอง
    </div>
    <button
      class="
        bg-indigo-500
        text-white
        p-1
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
    <div v-if="isOn" class="bg-white absolute rounded-4xl">
      <!-- header -->
      <div class="px-4 py-3 border-b border-gray-200 flex flex-row">
        <h2 class="text-xl font-semibold text-gray-600">ข้อมูลเพิ่มเติม</h2>
        <button
          class="text-red-600 rounded-4xl text-xl font-bold ml-10"
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
