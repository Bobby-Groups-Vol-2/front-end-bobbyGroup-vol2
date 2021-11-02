<template>
  <div class="flex flex-col mt-5">
    <div class="flex flex-row justify-start text-2xl font-bold">
      <nuxt-link to="/cat" class="mr-20"><Logo class="ml-20" /></nuxt-link>
      <nuxt-link to="/cat" class="ml-20 mt-10">Cat</nuxt-link>
      <!-- <nuxt-link to="/auth/login" class="ml-20 mt-10">login</nuxt-link> -->
      <nuxt-link to="/admin/admin" class="ml-20 mt-10">Admin</nuxt-link>
      <nuxt-link to="/admin/add" class="ml-20 mt-10">Add</nuxt-link>
      <nuxt-link to="/order/order" class="ml-20 mt-10">Order</nuxt-link>
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
          ml-52
          mt-8
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
          mx-5
          mt-8
        "
      >
        Log In</nuxt-link
      >
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
