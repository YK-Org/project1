<template>
  <div
    class="relative min-h-dvh flex flex-col justify-center items-center overflow-hidden px-4 py-24 lg:py-16"
  >
    <!-- Background Image with Reduced Opacity -->
    <div
      class="absolute inset-0 bg-[url('/images/yk2.png')] bg-cover bg-center z-0"
    ></div>

    <div
      class="bg-white flex flex-col items-center gap-4 rounded-3xl p-4 lg:p-8 max-w-md w-full relative text-center"
    >
      <!-- Overlapping Photos -->
      <div class="absolute -mt-12 lg:-mt-24 flex justify-center w-full z-10">
        <img
          src="/images/gift1.png"
          class="object-cover aspect-square size-16 lg:size-24 rounded-2xl drop-shadow-xl scale-150 rotate-[-14deg]"
        />
        <img
          src="/images/gift2.png"
          class="object-cover aspect-square size-16 lg:size-24 rounded-2xl drop-shadow-xl scale-150 rotate-[9deg]"
        />
      </div>

      <!-- Spacer for photos -->
      <div class="mt-8 lg:mt-12" />

      <!-- Heading -->
      <div class="flex flex-col justify-center items-center gap-1">
        <p class="text-xs text-gray-500 uppercase">
          We’re so grateful for your love and support. That alone is our
          greatest gift.
        </p>
        <h2
          class="text-xl lg:text-2xl font-semibold tracking-tight text-brown-800"
        >
          We’re excited to start our life together. If you’d like to give a
          gift, please consider one of the following:
        </h2>
      </div>

      <div class="mt-2 sm:mt-6 flex flex-col gap-4 text-left">
        <div
          class="bg-white rounded-xl border border-gray-200 px-4 py-3 flex gap-3 items-center"
        >
          <span class="text-lg">🙏</span>
          <p class="text-sm">Saying a prayer for us</p>
        </div>

        <div class="bg-white rounded-xl border border-gray-200 px-4 py-3">
          <div class="flex gap-3 items-start">
            <span class="text-lg">🎁</span>
            <div class="flex flex-col gap-1 text-sm">
              <p class="font-bold">Gift in Cash</p>
              <p>
                <span class="text-gray-500 text-sm">Account Name: </span> Joshua
                Yoofi Graham
              </p>
              <p>
                <span class="text-gray-500 text-sm">MTN MoMo: </span> 050 123
                4567
              </p>
              <p>
                <span class="text-gray-500 text-sm">First National Bank: </span>
                0004 0878 7799 7878
              </p>
            </div>
          </div>
        </div>

        <div
          class="bg-white rounded-xl border border-gray-200 px-4 py-3 flex gap-3 items-start"
        >
          <span class="text-lg">💻</span>
          <div>
            <p class="text-sm leading-snug">
              Request for our website and app design and development services
              <span class="italic text-xs text-gray-500"
                >Please after the honeymoon 😅</span
              >
            </p>
            <p class="text-xs text-gray-500">
              We designed and developed this website ourselves.😉
            </p>
          </div>
        </div>
      </div>
    </div>

    <NavBar />
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
</script>
