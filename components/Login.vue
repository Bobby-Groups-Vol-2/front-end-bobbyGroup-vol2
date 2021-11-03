<template class="w-screen">
  <div class="flex justify-center w-screen shadow-2xl">
    <div class="rounded-4xl bg-white card w-full flex justify-center">
      <div style="background-color: #43362d" class="w-full px-3 py-7">
        <p style="color: #faf2c5" class="ml-4 font-bold text-2xl">Welcome To Meow~!</p>
      </div>
      <div class="bg-white mb-5 px-5">
        <form action="" class="flex flex-col">
          <input
            type="text"
            placeholder="Username"
            class="p-4 mt-6 mb-3 rounded-4xl"
          />
          <input
            type="text"
            placeholder="Password"
            class="p-4 my-3 rounded-4xl"
          />
        </form>
        <div class="flex justify-center">
          <button class="login-button py-3 my-3 w-2/5 rounded-4xl btn text-md">
            Log in
          </button>
        </div>
        <div class="flex justify-center">
          <button  class="sign-up py-1 my-3 w-2/5 rounded-4xl text-md">
            Sign up
          </button>
        </div>
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
  color: #9e5f43;
}

.login-button {
  border: transparent;
  background-color: #c34f7c;
}

.login-button:hover {
  border: transparent;
  background-color: #a55521;
}
.sign-up{
  text-decoration: underline;
  color: #43362d;
}
  
.sign-up:hover{
  color: #c34f7c;
}
</style>
