<template>
  <div
    class="relative min-h-dvh flex flex-col justify-center items-center overflow-hidden px-4 py-24 lg:py-16 pt-8 lg:pt-8"
  >
    <!-- Background Image with Reduced Opacity -->
    <div
      class="absolute inset-0 bg-[url('/images/yk2.png')] bg-cover bg-center -z-10"
    ></div>

    <div class="w-full h-full max-auto max-w-md flex flex-col justify-center gap-8">
      <div class="flex flex-col w-ful gap-2 w-full">
        <h2 class="text-6xl font-great text-brown-700 font-medium">Our Story</h2>
        <p
          class="text-brown-800 leading-6 sm:leading-10 text-sm md:text-base text-justify"
        >
          Two strangers in a bustling software company, we discovered we worked together
          like magic, our minds dancing in perfect harmony over code and dreams. Through
          national service and beyond, destiny kept pulling us closer until professional
          admiration bloomed into something intoxicating. When we finally took that leap
          from colleagues to lovers, it felt like coming home to a place we'd always been
          searching for.
        </p>

        <p
          class="text-brown-800 leading-6 sm:leading-10 text-sm md:text-base text-justify pt-2"
        >
          Since then, every day has been an adventure written in starlight. But here's the
          most enchanting part—our families' stories began to intertwine like golden
          threads, connections emerging from the past that had been quietly converging
          long before we ever met. This isn't just a love story, it's destiny fulfilled,
          written in code and blessed by all the forces that believe in forever love.
        </p>
        <p
          class="text-brown-800 leading-6 sm:leading-10 text-sm md:text-base text-justify pt-2"
        >
          Some love stories are accidents. Ours was always inevitable
        </p>
      </div>

      <div class="relative w-full grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4">
        <NuxtImg
          src="/images/pic4.png"
          class="object-cover aspect-square size-32 rounded-xl shadow-2xl grayscale hover:grayscale-0 scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[-10deg] hover:rotate-0 bg-white p-1"
        />
        <NuxtImg
          src="/images/pic7.png"
          class="object-cover aspect-square size-32 rounded-xl shadow-2xl grayscale hover:grayscale-0 scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[9deg] hover:rotate-0 bg-white p-1"
        />
        <NuxtImg
          src="/images/pic1.png"
          class="object-cover aspect-square size-32 rounded-xl shadow-2xl grayscale hover:grayscale-0 scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[-6deg] hover:rotate-0 bg-white p-1"
        />
        <NuxtImg
          src="/images/pic6.png"
          class="object-cover aspect-square size-32 rounded-xl shadow-2xl grayscale hover:grayscale-0 scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[9deg] hover:rotate-0 bg-white p-1"
        />
        <NuxtImg
          src="/images/pic3.png"
          class="object-cover aspect-square size-32 rounded-xl shadow-2xl grayscale hover:grayscale-0 scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[-8deg] hover:rotate-0 bg-white p-1"
        />
        <NuxtImg
          src="/images/pic5.png"
          class="object-cover aspect-square size-32 rounded-xl shadow-2xl grayscale hover:grayscale-0 scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[4deg] hover:rotate-0 bg-white p-1"
        />
        <NuxtImg
          src="/images/pic2.png"
          class="object-cover aspect-square size-32 rounded-xl shadow-2xl grayscale hover:grayscale-0 scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[2deg] hover:rotate-0 bg-white p-1"
        />
        <NuxtImg
          src="/images/pic.png"
          class="object-cover aspect-square size-32 rounded-xl shadow-2xl grayscale hover:grayscale-0 scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[-8deg] hover:rotate-0 bg-white p-1"
        />

        <!-- <div
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
        </div> -->
      </div>
    </div>

    <NavBar />
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
</script>
