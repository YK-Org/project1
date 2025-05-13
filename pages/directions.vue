<template>
  <div
    class="relative min-h-dvh flex flex-col justify-center items-center overflow-hidden px-4 py-24 lg:py-16"
  >
    <!-- Background Image with Reduced Opacity -->
    <div
      class="absolute inset-0 bg-[url('/images/yk2.png')] bg-cover bg-center -z-10"
    ></div>

    <div class="bg-white rounded-3xl max-w-md w-full overflow-clip">
      <!-- Image -->
      <img
        src="/images/trinity.png"
        alt="Trinity United Church"
        class="mx-auto object-cover w-full"
      />

      <!-- Content -->

      <div
        class="p-4 sm:p-6 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4"
      >
        <div>
          <h2
            class="text-xl md:text-xl font-bold text-center sm:text-left tracking-tight text-green-800"
          >
            Trinity United Church
          </h2>
          <p class="text-gray-500 text-sm">Legon, MR2J+99X, Trinity Ave, Accra</p>
        </div>
        <a
          href="https://maps.google.com/?q=Trinity+United+Church,+Accra"
          target="_blank"
          class="bg-green-700 text-white px-3 py-2 rounded-full tex-base font-semibold hover:bg-green-800"
        >
          Get Directions
        </a>
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
