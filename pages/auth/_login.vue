<template>
  <div class="flex justify-center w-full">
    <!-- <div class="flex flex-col justify-center w-full"> -->
      <Login class="login-zone mt-10" />
    <!-- </div> -->
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
@media (min-width: 320px) {
  .login-zone{
    width: 90%;
  }
}

@media (min-width: 375px) {
  .login-zone{
    width: 80%;
  }
}

@media (min-width: 425px) {
  .login-zone{
    width: 70%;
  }
}

@media (min-width: 768px) {
  .login-zone{
    width: 40%;
  }
}

@media (min-width: 1024px) {
  .login-zone{
    width: 30%;
  }
}
</style>