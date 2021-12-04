<template>
  <div class="flex justify-center">
    <TableCatTable />
    <!-- <TablePatternTable /> -->
  </div>
</template>
<script>
export default {
  // middleware: "auth",
  middleware({ store, redirect }) {
    if (store.$auth.user.role === "user") {
      redirect("./cat");
    }
  },
};
</script>
