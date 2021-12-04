<template>
  <div class="flex justify-center">
    <TableSpeciesTable />
  </div>
</template>
<script>
export default {
  middleware({ store, redirect }) {
    if (store.$auth.user.role === "user") {
      redirect("./cat");
    }
  },
};
</script>

