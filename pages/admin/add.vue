<template>
<div class="flex justify-center">
  <div class="holder flex flex-col w-full sm:w-3/4 ">
    <div class="flex flex-col justify-start  mt-10">
      <h1 class="ml-10 mb-4 font-bold text-3xl" style="color:#43362d">Add Cat</h1>
      <add-cat class="px-7 md:px-20"></add-cat>
    </div>
    <div class="flex flex-col justify-start mt-10">
      <h1 class="ml-10 mb-4 font-bold text-3xl" style="color:#43362d">Add Pattern</h1>
      <add-pattern class="px-7 md:px-20"></add-pattern>
    </div>
    <div class="flex flex-col justify-start mt-10 mb-48 ">
      <h1 class="ml-10 mb-4 font-bold text-3xl" style="color:#43362d">Add Species</h1>
      <add-species class="px-7 md:px-20"></add-species>
    </div>
  </div>
</div>
</template>
<style scoped>
@media (min-width: 320px) {
  .holder{
    width: 90%;
  }
}
@media (min-width: 375px) {
  .holder{
    width: 80%;
  }
}
@media (min-width: 425px) {
  .holder{
    width: 70%;
  }
}
@media (min-width: 768px) {
  .holder{
    width: 50%;
  }
}
@media (min-width: 1024px) {
  .holder{
    width: 90vw;
  }
}
@media (min-width: 1440px) {
  .holder{
    width: 60vw;
  }
}
</style>