<template>
  <div
    class="relative min-h-dvh flex flex-col justify-center items-center overflow-hidden"
  >
    <!-- Background Image with Reduced Opacity -->
    <div
      class="absolute inset-0 bg-[url('/images/yk.png')] bg-cover bg-center opacity-30 z-0"
    ></div>

    <!-- Content Layer -->
    <div
      class="relative z-10 w-full mx-auto max-w-6xl flex flex-col justify-center items-center gap-4 sm:gap-8 text-center"
    >
      <h1
        class="text-5xl font-medium md:text-9xl font-great-vibes text-brown-700 drop-shadow-lg"
      >
        Yoofi & Kuor
      </h1>
      <p class="text-base tracking-[0.2rem] text-brown-400 mb-10">30.08.2025 • 11 AM</p>
    </div>

    <div class="flex flex-row justify-center gap-4">
      <div
        class="flex justify-center items-center gap-2 p-3 font-semibold text-xs text-red-600 hover:text-red-700 rounded-3xl bg-white drop-shadow-sm border border-gray-20/50 hover:border-red-600/10 hover:bg-red-50 transition-all delay-75 ease-in-out duration-300"
      >
        <span class="relative right-1 flex size-3">
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75"
          ></span>
          <span class="relative inline-flex size-3 rounded-full bg-rose-600"></span>
        </span>
        <a
          href="https://www.youtube.com/live/9powhWRr8xQ?si=6dMZHByqFktOXmVF"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch Live Stream
        </a>
      </div>

      <!-- <div
        class="flex justify-center items-center gap-2 p-3 font-semibold text-xs text-emerald-600 hover:text-emerald-700 rounded-3xl bg-white drop-shadow-sm border border-gray-20/50 hover:border-emerald-600/10 hover:bg-emerald-50 transition-all delay-75 ease-in-out duration-300"
      >
        <a
          href="https://www.youtube.com/live/9powhWRr8xQ?si=6dMZHByqFktOXmVF"
          target="_blank"
          rel="noopener noreferrer"
        >
          Order Of Ceremony
        </a>
      </div> -->


    </div>
  </div>
</template>
