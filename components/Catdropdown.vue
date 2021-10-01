<template>
  <div class="dropdown">
    <div tabindex="0" class="btn">select species</div>
    <ul
      tabindex="0"
      class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
    >
      <li>
        <a>{{ catSpecies }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    catSpecies: { type: String, default: "no species" },
  },
};
</script>
