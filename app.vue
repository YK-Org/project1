<template>
  <!-- <div class="relative "> -->
  <NuxtLayout>
    <NuxtPage :transition="pageTransition" />
  </NuxtLayout>
  <NavBar class="" />
  <!-- </div> -->
</template>

<script setup>
const pageTransition = {
  name: "ios-page",
  mode: "out-in", // ensures smooth sequencing
};
</script>

<style>
/* Optional: global font from Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");

h1 {
  font-family: "Great Vibes", cursive;
}

.ios-page-enter-active,
.ios-page-leave-active {
  transition: all 250ms cubic-bezier(0.33, 1, 0.68, 1);
}

.ios-page-enter-from {
  opacity: 0;
  transform: translateX(20px) scale(0.98);
}
.ios-page-leave-to {
  opacity: 0;
  transform: translateX(-10px) scale(0.985);
}
</style>
