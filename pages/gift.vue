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
        <NuxtImg
          src="/images/gift1.png"
          class="object-cover aspect-square size-16 lg:size-24 rounded-2xl drop-shadow-xl scale-150 rotate-[-14deg]"
        />
        <NuxtImg
          src="/images/gift2.png"
          class="object-cover aspect-square size-16 lg:size-24 rounded-2xl drop-shadow-xl scale-150 rotate-[9deg]"
        />
      </div>

      <!-- Spacer for photos -->
      <div class="mt-6" />

      <!-- Heading -->
      <div class="flex flex-col justify-center items-center gap-1">
        <p class="text-xs text-gray-500 uppercase">
          We’re so grateful for your love and support.
        </p>
        <h2 class="text-xl lg:text-2xl font-semibold tracking-tight text-brown-800">
          If you’d like to give a gift, please consider one of the following:
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
            <div class="flex flex-col w-full gap-4 text-sm">
              <p class="font-bold">Gift in Cash</p>

              <button
                @click="copyToClipboard('0557382244', 'momo')"
                class="flex justify-between items-center w-full text-sm text-gray-500 hover:text-emerald-600"
              >
                <!-- Left: Label + Value -->
                <span class="text-left">
                  MTN MoMo:
                  <span class="font-semibold text-gray-900">055 738 2244</span>
                </span>

                <!-- Right: Copy status -->
                <span
                  class="text-xs ml-4 transition-opacity duration-300"
                  :class="
                    copiedStatus.momo
                      ? 'text-emerald-700 font-semibold'
                      : 'text-emerald-600'
                  "
                >
                  {{ copiedStatus.momo ? "Copied!" : "Copy" }}
                </span>
              </button>

              <button
                @click="copyToClipboard('1011011754004', 'bank')"
                class="flex justify-between items-center w-full text-sm text-gray-500 hover:text-emerald-600"
              >
                <!-- Left: Label + Value -->
                <span class="text-left">
                  First National Bank:
                  <span class="font-semibold text-gray-900">1011011754004</span>
                </span>

                <!-- Right: Copy status -->
                <span
                  class="text-xs ml-4 transition-opacity duration-300"
                  :class="
                    copiedStatus.bank
                      ? 'text-emerald-700 font-semibold'
                      : 'text-emerald-600'
                  "
                >
                  {{ copiedStatus.bank ? "Copied!" : "Copy" }}
                </span>
              </button>

              <p class="text-gray-500 text-sm">
                Account Name:
                <span class="font-semibold text-gray-900">Joshua Yoofi Graham</span>
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
          </div>
        </div>
      </div>
    </div>

    <NavBar />
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";

import { ref } from "vue";

const copiedStatus = ref({
  momo: false,
  bank: false,
});

const copyTimeouts = {};

function copyToClipboard(text, fieldKey) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      copiedStatus.value[fieldKey] = true;

      // Clear existing timeout if it exists
      if (copyTimeouts[fieldKey]) clearTimeout(copyTimeouts[fieldKey]);

      // Set new timeout to reset the copied status
      copyTimeouts[fieldKey] = setTimeout(() => {
        copiedStatus.value[fieldKey] = false;
      }, 2000);
    })
    .catch(() => {
      showRSVPToast("❌ Copy failed");
    });

  showRSVPToast("📋 Copied!");
}
</script>
