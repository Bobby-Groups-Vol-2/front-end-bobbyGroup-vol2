<template>
  <div class="flex justify-center bg-black w-screen">
    <div class="rounded-4xl bg-white card w-full flex justify-center">
      <div class="bg-navy w-full px-3 py-7">
        <p class="ml-4 font-bold text-white text-3xl">Welcome</p>
      </div>
      <div class="bg-white mb-5 px-5">
        <form action="" class="flex flex-col">
          <input
            type="text"
            placeholder="Useername"
            class="py-5 mt-6 mb-3 rounded-4xl"
          />
          <input
            type="text"
            placeholder="Password"
            class="py-5 my-3 rounded-4xl"
          />
        </form>
        <button class="bg-green-400 py-3 my-3 w-full rounded-4xl text-xl">
          Login
        </button>
      </div>
      <div class="bg-gray-300 py-4 w-full">
        <button class="text-black ml-5 p-1 text-xl">Sign up</button>
      </div>
    </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
input[type="text"] {
  border: 2px solid #bbbbbb;
}
</style>
