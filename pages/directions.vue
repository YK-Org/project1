<template>
  <div
    class="min-h-screen bg-[url('/images/yk2.png')] bg-cover bg-center flex flex-col items-center justify-center px-4 py-20"
  >
    <div
      class="bg-white/90 rounded-xl shadow-xl p-6 md:p-8 max-w-2xl w-full backdrop-blur-md"
    >
      <!-- Image -->
      <img
        src="/images/trinity.png"
        alt="Trinity United Church"
        class="rounded-lg mx-auto shadow-lg object-cover w-full max-h-[450px]"
      />

      <!-- Content -->
      <div class="mt-6">
        <div
          class="mt-2 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4"
        >
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-green-900">
              Trinity United Church
            </h2>
            <p class="text-gray-600">Location</p>
          </div>
          <a
            href="https://maps.google.com/?q=Trinity+United+Church,+Accra"
            target="_blank"
            class="bg-green-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-800 transition"
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-center items-center text-center mt-12">
      <NavBar />
    </div>
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
</script>
