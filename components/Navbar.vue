<template>
  <div class="flex flex-col mt-5">
    <div class="flex flex-row justify-start text-2xl font-bold">
      <Logo class="ml-20" />
      <nuxt-link to="/cat" class="ml-20 mt-10">cat</nuxt-link>
      <nuxt-link to="/auth/login" class="ml-20 mt-10">login</nuxt-link>
      <nuxt-link to="/admin/admin" class="ml-20 mt-10">admin</nuxt-link>
      <nuxt-link to="/admin/add" class="ml-20 mt-10">add</nuxt-link>
      <button class="rounded-xl w-28 bg-gray-500 btn text-sm ml-96 mt-8">
        Register
      </button>
      <button class="rounded-xl w-28 bg-green-500 btn text-sm ml-5 mt-8">
        Login
      </button>
    </div>
    <slot></slot>
  </div>
</template>
