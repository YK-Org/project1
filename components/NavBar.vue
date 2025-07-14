<template>
  <div class="flex flex-col items-center gap-4 w-min fixed bottom-2 sm:bottom-4">
    <nav
      class="flex items-center gap-0 lg:gap-3 px-2 py-2 text-nowrap rounded-3xl drop-shadow-2xl shadow-3xl bg-white text-xs lg:text-sm backdrop-blur-sm"
    >
      <NuxtLink to="/" :class="linkClass('/')"> Home </NuxtLink>
      <NuxtLink to="/story" :class="linkClass('/story')"> Our Story </NuxtLink>
      <NuxtLink to="/directions" :class="linkClass('/directions')">Directions</NuxtLink>
      <NuxtLink to="/rsvp" :class="linkClass('/rsvp')">RSVP</NuxtLink>
      <NuxtLink to="/gift" :class="linkClass('/gift')">Gift</NuxtLink>
    </nav>

    <p class="text-xs text-gray-500">
      Designed and developed by Yoofi & Matekuor with love ❤️
    </p>
  </div>
</template>

<script setup>
const route = useRoute();

function linkClass(path) {
  return route.path === path
    ? "bg-emerald-700 text-white px-3 py-2 rounded-3xl font-medium drop-shadow"
    : "hover:bg-gray-100 rounded-3xl px-3 py-2 transition-all delay-75 ease-in-out duration-300";
}
</script>
