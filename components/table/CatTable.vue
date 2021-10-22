<template>
  <div class="mt-10">
    <table class="m-5 w-4/5 mx-auto bg-white text-gray-800">
      <tr class="text-left border-b-2 border-gray-300">
        <th class="px-2 py-3">ID</th>
        <th class="px-2 py-3">Name</th>
        <th class="px-2 py-3">Species</th>
        <th class="px-2 py-3">DOB</th>
        <th class="px-2 py-3">Image</th>
        <th class="px-2 py-3">Price</th>
        <th class="px-2 py-3">Certificate</th>
        <th class="px-2 py-3">status</th>
      </tr>

      <tr
        v-for="cat in cats"
        :key="cat.id"
        class="bg-fauxlavender border-b border-gray-200 rounded-4xl"
      >
        <td class="px-2 py-3">{{ cat.catid }}</td>
        <td class="px-2 py-3">
          {{ cat.catname }}
        </td>
        <td class="px-2 py-3">{{ cat.species.speciesname }}</td>
        <td class="px-2 py-3">{{ cat.dob }}</td>
        <td class="px-2 py-3">{{ cat.catimage }}</td>
        <td class="px-2 py-3">{{ cat.price }}</td>
        <td class="px-2 py-3">
          <span>{{ certificateCheck(cat.certificateimage) }}</span>
        </td>
        <td class="px-2 py-3">
          <span v-html="orderCheck(cat.status)"></span>
        </td>
        <td>
          <button class="btn bg-yellow-500">Edit</button>
        </td>
        <td>
          <button class="btn bg-red-600" @click="deleteCat(cat.catid)">
            Delete
          </button>
        </td>
      </tr>
    </table>
    <div class="flex flex-col ml-48">
      <h1 class="ml-1 mb-4 font-bold text-3xl">Cat</h1>
      <add-cat class="lg:w-2/3 w-1/2"></add-cat>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cats: [],
      haveCer: false,
      ordered: '<p style="color: red">Ordered</p>',
      inStock: '<p style="color: green">In stock</p>',
    };
  },
  async created() {
    const res = await this.callApi("get", "/api/cats");
    if (res.status === 200) {
      this.cats = res.data;
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
    deleteCat(id) {
      this.callApi("delete", "/api/cats/" + id);
      location.reload();
    },
  },
};
</script>
