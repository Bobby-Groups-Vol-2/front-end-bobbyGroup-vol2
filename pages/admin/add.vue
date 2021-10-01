<template>
  <div class="min-h-screen flex flex-col sm:ml-20 lg:flex lg:justify-center">
    <div class="flex flex-col justify-start mt-10">
      <h1 class="ml-1 mb-4 font-bold text-3xl">Cat</h1>
      <add-cat class="lg:w-2/3 w-1/2"></add-cat>
    </div>
    <div class="flex flex-col justify-start mt-10">
      <h1 class="ml-1 mb-4 font-bold text-3xl">Patterns</h1>
      <add-pattern class="lg:w-2/3 w-1/2"></add-pattern>
    </div>
    <div class="flex flex-col justify-start mt-10 mb-48">
      <h1 class="ml-1 mb-4 font-bold text-3xl">Species</h1>
      <add-species class="lg:w-2/3 w-1/2"></add-species>
    </div>
  </div>
</template>
