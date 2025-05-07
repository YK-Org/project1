<template>
  <div
    class="min-h-screen bg-[url('/images/yk2.png')] bg-cover bg-center py-16 px-6 md:px-20 flex flex-col items-center justify-between"
  >
    <div class="grid md:grid-cols-2 gap-10 items-center">
      <!-- Text Section -->
      <div>
        <h2 class="text-4xl font-great text-brown-700 mb-6">Our Story</h2>
        <p class="text-gray-800 leading-relaxed text-sm md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages...
        </p>
      </div>

      <!-- Image Collage -->
      <div class="relative h-[500px] w-full">
        <img
          src="/images/pic1.png"
          class="absolute top-0 left-12 w-32 h-32 rounded-xl shadow-xl rotate-[-5deg] bg-white p-1"
        />
        <img
          src="/images/pic2.png"
          class="absolute top-0 left-44 w-32 h-32 rounded-xl shadow-xl rotate-[3deg] bg-white p-1"
        />
        <img
          src="/images/pic1.png"
          class="absolute top-36 left-4 w-32 h-32 rounded-xl shadow-xl rotate-[-3deg] bg-white p-1"
        />
        <img
          src="/images/pic2.png"
          class="absolute top-32 left-36 w-32 h-32 rounded-xl shadow-xl rotate-[5deg] bg-white p-1"
        />
        <img
          src="/images/pic1.png"
          class="absolute top-20 left-60 w-32 h-32 rounded-xl shadow-xl rotate-[-4deg] bg-white p-1"
        />
        <img
          src="/images/pic2.png"
          class="absolute top-52 left-28 w-32 h-32 rounded-xl shadow-xl rotate-[2deg] bg-white p-1"
        />
        <img
          src="/images/pic1.png"
          class="absolute top-60 left-48 w-32 h-32 rounded-xl shadow-xl rotate-[1deg] bg-white p-1"
        />
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
