<template>
  <div class="flex flex-col mt-5 lg:flex lg:justify-center lg:items-center">
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
        ><Logo class="flex justify-center lg:mt-3 xl:mt-1"
      /></nuxt-link>
      <div class="flex justify-center">
        <div
          class="
            grid grid-cols-2
            gap-0
            sm:grid-cols-3
            md:grid-cols-3
            lg:grid-cols-5 lg:gap-x-0
            xl:gap-x-10
            lg:flex
            md:gap-x-3
            flex-row
          "
        >
          <nuxt-link to="/cat" class="m-5 lg:ml-10 lg:mt-10"
            >Cat Store</nuxt-link
          >
          <!-- <nuxt-link to="/auth/login" class="ml-20 mt-10">login</nuxt-link> -->

          <nuxt-link
            v-if="$auth.user.role === 'user'"
            to="/order"
            class="m-5 lg:ml-5 lg:mt-10"
            >Order History</nuxt-link
          >
          <nuxt-link
            v-if="$auth.user.role === 'user'"
            to="/contributor"
            class="m-5 lg:ml-5 lg:mt-10"
            >Contributor</nuxt-link
          >
          <nuxt-link
            v-if="$auth.user.role === 'admin'"
            to="/admin/cat"
            class="m-5 lg:mt-10"
            >Cat <br />
            <span class="lg:text-md">Management </span></nuxt-link
          >
          <nuxt-link
            v-if="$auth.user.role === 'admin'"
            to="/admin/species"
            class="m-5 lg:mt-10"
            >Species <br />
            <span class="lg:text-md"> Management </span></nuxt-link
          >
        </div>
        <div class="flex justify-center">
          <button
            class="
              rounded-xl
              border-transparent
              bg-white
              shadow-2xl
              w-28
              log-in-button
              btn
              text-sm
              lg:mt-8 lg:ml-5
            "
            @click="$auth.logout()"
          >
            Log out
          </button>
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
