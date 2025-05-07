<template>
  <nav
    class="flex gap-3 px-4 py-2 rounded-full shadow bg-white/80 text-sm backdrop-blur-sm"
  >
    <NuxtLink to="/" :class="linkClass('/')"> Whose Wedding? </NuxtLink>
    <NuxtLink to="/story" :class="linkClass('/story')"> Our Story </NuxtLink>
    <NuxtLink to="/directions" :class="linkClass('/directions')"
      >Directions</NuxtLink
    >
    <NuxtLink to="/rsvp" :class="linkClass('/rsvp')"
      >Will you be present?</NuxtLink
    >
    <NuxtLink to="/gift" :class="linkClass('/gift')">Gift</NuxtLink>
  </nav>
</template>

<script setup>
const route = useRoute();

function linkClass(path) {
  return route.path === path
    ? "bg-green-700 text-white px-3 py-1 rounded-full"
    : "hover:underline px-3 py-1";
}
</script>
