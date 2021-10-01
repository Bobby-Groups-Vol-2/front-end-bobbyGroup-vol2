<template>
  <div class="rounded-4xl">
    <table class="rounded-t-lg m-5 w-2/3 mx-auto bg-gray-200 text-gray-800">
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
        class="bg-gray-100 border-b border-gray-200"
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
          <a>
            <svg
              v-if="certificateCheck(cat.certificateimage)"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
              />
            </svg>
          </a>
        </td>
        <td class="px-2 py-3">
          <a>
            <svg
              v-if="orderCheck(cat.status)"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
              />
            </svg>
          </a>
        </td>
        <td>
          <button class="btn bg-yellow-500">Edit</button>
        </td>
        <td>
          <button class="btn bg-red-600">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cats: [],
      haveCer: false,
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
        return true;
      }
    },
    orderCheck(order) {
      if (order === "T") {
        return true;
      }
      return false;
    },
  },
};
</script>
