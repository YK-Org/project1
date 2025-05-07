<template>
  <div
    class="min-h-screen bg-[url('/images/yk2.png')] bg-cover bg-center flex flex-col items-center justify-center px-4 py-16"
  >
    <div class="relative w-full max-w-lg">
      <div class="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        <img
          src="/images/gift1.png"
          class="w-20 md:w-24 rotate-[-6deg] rounded-lg"
        />
        <img
          src="/images/gift2.png"
          class="w-20 md:w-24 rotate-[6deg] rounded-lg -ml-16"
        />
      </div>

      <div
        class="bg-white/90 rounded-2xl shadow-xl p-8 pt-20 text-center z-0 relative"
      >
        <p class="text-xs text-gray-500">
          We’re so grateful for your love and support! That alone are our
          greatest gift.
        </p>
        <h2 class="font-bold text-sm md:text-base mt-1">
          As we embark on this new chapter, we’re excited to start our life
          together. If you’d like to give a gift,
        </h2>
        <p class="text-xs text-gray-500">please consider:</p>

        <div class="mt-6 flex flex-col gap-4 text-left">
          <div
            class="bg-white rounded-xl border border-gray-200 px-4 py-3 flex gap-3 items-center"
          >
            <span class="text-lg">🙏</span>
            <p class="text-sm">Saying a prayer for us</p>
          </div>

          <div class="bg-white rounded-xl border border-gray-200 px-4 py-3">
            <div class="flex gap-3 items-start">
              <span class="text-lg">🎁</span>
              <div class="flex flex-col gap-3 text-sm">
                <div>
                  <p class="font-bold">MTN Mobile Money</p>
                  <p class="text-xs text-gray-700">Account Name</p>
                  <p>050 123 4567</p>
                </div>
                <div>
                  <p class="font-bold">Bank</p>
                  <p class="text-xs text-gray-700">Account Name</p>
                  <p>0004 0878 7799 7878</p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="bg-white rounded-xl border border-gray-200 px-4 py-3 flex gap-3 items-start"
          >
            <span class="text-lg">💻</span>
            <p class="text-sm leading-snug">
              Requesting for our services as Website and App design &
              development.
              <span class="italic text-xs text-gray-500"
                >Please after honeymoon 😅</span
              >
            </p>
          </div>
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
