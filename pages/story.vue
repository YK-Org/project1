<template>
  <div
    class="relative min-h-dvh flex flex-col justify-center items-center overflow-hidden px-4 py-24 lg:py-16"
  >
    <!-- Background Image with Reduced Opacity -->
    <div
      class="absolute inset-0 bg-[url('/images/yk2.png')] bg-cover bg-center -z-10"
    ></div>

    <div
      class="w-full h-full max-auto max-w-4xl flex flex-col lg:flex-row justify-center gap-16"
    >
      <div class="flex flex-col w-ful gap-2 w-full">
        <h2 class="text-6xl font-great text-brown-700 font-medium">Our Story</h2>
        <p class="text-brown-800 leading-loose text-sm md:text-base">
          Our story starts in the slightly less romantic setting of a software company
          internship, about seven years back. While everyone else seemed to have some kind
          of 'friend of a friend' connection with her, I was the odd one out. We were just
          two interns, focused on getting the job done. Turns out, we worked really well
          together. That teamwork continued through our national service, and we were both
          kept on. After 2+ years working side-by-side, I finally asked her out. Six years
          later, we're here now, and it's amazing to discover how deeply our families'
          paths have crossed. It feels like our paths were always meant to cross.
        </p>
      </div>

      <div class="relative w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3">
        <img
          src="/images/pic4.png"
          class="object-cover aspect-square size-32 rounded-xl shadow-2xl grayscale hover:grayscale-0 scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[-10deg] hover:rotate-0 bg-white p-1"
        />
        <img
          src="/images/pic7.png"
          class="object-cover aspect-square size-32 rounded-xl shadow-2xl grayscale hover:grayscale-0 scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[9deg] hover:rotate-0 bg-white p-1"
        />
        <img
          src="/images/pic1.png"
          class="object-cover aspect-square size-32 rounded-xl shadow-2xl grayscale hover:grayscale-0 scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[-6deg] hover:rotate-0 bg-white p-1"
        />
        <img
          src="/images/pic6.png"
          class="object-cover aspect-square size-32 rounded-xl shadow-2xl grayscale hover:grayscale-0 scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[9deg] hover:rotate-0 bg-white p-1"
        />
        <img
          src="/images/pic3.png"
          class="object-cover aspect-square size-32 rounded-xl shadow-2xl grayscale hover:grayscale-0 scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[-8deg] hover:rotate-0 bg-white p-1"
        />
        <img
          src="/images/pic5.png"
          class="object-cover aspect-square size-32 rounded-xl shadow-2xl grayscale hover:grayscale-0 scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[4deg] hover:rotate-0 bg-white p-1"
        />
        <img
          src="/images/pic2.png"
          class="object-cover aspect-square size-32 rounded-xl shadow-2xl grayscale hover:grayscale-0 scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[2deg] hover:rotate-0 bg-white p-1"
        />
        <img
          src="/images/pic.png"
          class="object-cover aspect-square size-32 rounded-xl shadow-2xl grayscale hover:grayscale-0 scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[-8deg] hover:rotate-0 bg-white p-1"
        />

        <div
          class="translate-y-4 rotate-2 hover:rotate-0 border-2 scale-90 aspect-auto size-24 lg:size-32 border-dotted border-orange-200 bg-orange-100/40 hover:bg-orange-100/60 rounded-xl flex flex-col justify-center items-center p-4 transition-all duration-200 delay-75 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 text-brown-800"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>

          <p class="text-sm text-center text-brown-800">Wedding Photos</p>
        </div>
      </div>
    </div>

    <NavBar />
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
</script>
