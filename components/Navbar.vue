<template>
  <div class="flex flex-col mt-5">
    <div class="flex flex-col lg:flex-row lg:justify-start text-lg lg:text-2xl font-bold">
      <nuxt-link to="/cat" class="flex justify-center"
        ><Logo class="flex justify-center  lg:w-1/3 w-1/4"
      /></nuxt-link>
      <div class="flex justify-center">
        <div class="grid grid-cols-2 gap-0 lg:flex flex-row">
          <nuxt-link to="/cat" class="m-5 lg:ml-20 lg:mt-10">Cat</nuxt-link>
          <!-- <nuxt-link to="/auth/login" class="ml-20 mt-10">login</nuxt-link> -->
          <nuxt-link to="/admin/admin" class="m-5 lg:ml-10 lg:mt-10"
            >Admin</nuxt-link
          >
          <nuxt-link to="/admin/add" class="m-5 lg:ml-10 lg:mt-10"
            >Add</nuxt-link
          >
          <nuxt-link to="/order/order" class="m-5 lg:ml-10 lg:mt-10"
            >Order</nuxt-link
          >
        </div>
      </div>

      <div class="flex justify-center">
        <div class="grid grid-cols-2 p-3 gap-5 lg:flex flex-row">
          <nuxt-link
            to="/"
            class="
              rounded-xl
              border-transparent
              shadow-2xl
              w-28
              register-button
              btn
              text-sm
              
              xl:ml-52 lg:mt-8
            "
          >
            Register
          </nuxt-link>
          <nuxt-link
            to="/auth/login"
            class="
              rounded-xl
              border-transparent
              bg-white
              shadow-2xl
              w-28
              log-in-button
              btn
              text-sm
              lg:mx-5 lg:mt-8
            "
          >
            Log In</nuxt-link
          >
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>


<style scoped>
.register-button {
  color: #9e5f43;
  background-color: aliceblue;
}

.register-button:hover {
  border: transparent;
  color: white;
  background-color: #9e5f43;
}

.log-in-button {
  background-color: #43362d;
  color: #faf2c5;
}

.log-in-button:hover {
  background-color: #faf2c5;
  color: #43362d;
  border: transparent;
}

a:hover {
  color: #a55521;
}
a {
  color: whitesmoke;
}
</style>
