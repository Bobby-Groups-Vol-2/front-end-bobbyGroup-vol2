<template>
  <div class="flex justify-center">
    <div
      class="
        bg-white
        w-11/12
        mt-12
        rounded-4xl
        p-5
        text-black
        h-auto
        shadow-2xl
        sm:w-2/3
      "
    >
      <div class="flex justify-center">
        <div>
          <img src="../../asset/user.png" class="w-1/2" />

          <!-- User Data -->
          <h2 class="text-lg">Username</h2>
          <h2 class="text-md">Email</h2>
        </div>
      </div>

      <div>
        <h1 class="mt-10">Your Orders</h1>
        <hr />

        <!-- Div Loop -->
        <div>
          <div
            id="timing"
            class="bg-red-700 flex justify-between text-white text-sm p-2"
          >
            <span> Date </span>
            <span> Time </span>
            <span> Order ID</span>
          </div>
          <div class="flex flex-col md:grid grid-cols-3 md:gap-12">
            <CardNoBTN/>
            <CardNoBTN/>
            <CardNoBTN/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CardNoBTN from '~/components/CardNoBTN.vue';
</script>

<style>
hr {
  height: 2px;
  background-color: black;
  margin-bottom: 2%;
}
</style>