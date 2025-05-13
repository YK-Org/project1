<template>
  <div class="relative min-h-dvh flex flex-col justify-center items-center overflow-hidden">
    <!-- Background Image with Reduced Opacity -->
    <div class="absolute inset-0 bg-[url('/images/yk.png')] bg-cover bg-center opacity-30 z-0"></div>

    <!-- Content Layer -->
    <div class="relative z-10 w-full mx-auto max-w-6xl flex flex-col justify-center items-center gap-1 sm:gap-8 text-center">
      <h1 class="text-5xl font-medium md:text-9xl font-great-vibes text-brown-700 drop-shadow-lg">
        Yoofi & Kuor
      </h1>
      <p class="text-base tracking-[0.2rem] text-brown-400 mb-10">
        30.08.2025 • 11 AM
      </p>
    </div>

    <NavBar/>
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
</script>
