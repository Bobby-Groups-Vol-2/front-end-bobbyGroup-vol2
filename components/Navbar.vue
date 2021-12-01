<template>
  <div class="flex flex-col mt-5">
    <div
      class="
        flex flex-col
        lg:flex-row lg:justify-start
        justify-center
        text-lg
        lg:text-xl
        font-bold
      "
    >
      <nuxt-link to="/cat" class="flex justify-center"
        ><Logo class="lg:ml-10 lg:w-1/3 w-1/4 flex justify-center"
      /></nuxt-link>
      <div class="flex justify-center">
        <div class="grid grid-cols-2 gap-0 md:grid-cols-4 lg:gap-x-0 xl:gap-x-10 lg:flex md:gap-x-3 flex-row">
          <nuxt-link to="/cat" class="m-5 lg:ml-10 lg:mt-10">Cat Store</nuxt-link>
          <!-- <nuxt-link to="/auth/login" class="ml-20 mt-10">login</nuxt-link> -->

          <nuxt-link to="/order" class="m-5 lg:ml-5 lg:mt-10">Order History</nuxt-link>
          <nuxt-link to="/admin/cat" class="m-5 lg:mt-10"
            >Cat <br /> <span class=" lg:text-md">Management </span></nuxt-link
          >
          <nuxt-link to="/admin/species" class="m-5 lg:mt-10"
            >Species <br /> <span class=" lg:text-md"> Management </span></nuxt-link
          >
        </div>
      </div>

      <div class="flex justify-center">
        <div class="grid grid-cols-2 p-3 gap-5 md:gap-20 lg:gap-5 lg:flex flex-row">
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
              
              xl:ml-20 lg:mt-8
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
              xl:gap-x-5
              lg:mt-8
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
<script>
export default {};
</script>

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
