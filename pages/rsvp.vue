<template>
  <div
    class="min-h-screen bg-[url('/images/yk2.png')] bg-cover bg-center flex flex-col items-center justify-center px-4 py-16"
  >
    <div
      class="bg-white/90 rounded-3xl shadow-xl p-8 max-w-md w-full relative text-center"
    >
      <!-- Overlapping Photos -->
      <div class="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-2">
        <img
          src="/images/pic1.png"
          class="w-16 h-16 object-cover rounded-lg shadow-md rotate-[-6deg]"
        />
        <img
          src="/images/pic2.png"
          class="w-16 h-16 object-cover rounded-lg shadow-md rotate-[5deg]"
        />
      </div>

      <!-- Spacer for photos -->
      <div class="mt-12" />

      <!-- Heading -->
      <p class="text-xs text-gray-500 uppercase mb-1">
        This Helps Us Plan For the Numbers
      </p>
      <h2 class="text-lg font-semibold text-gray-900 mb-6">
        Let Us Know If You Can Join Us:
      </h2>

      <!-- Full Name Input -->
      <label class="block text-left text-sm text-gray-700 mb-1" for="fullName"
        >Enter full name</label
      >
      <input
        v-model="name"
        id="fullName"
        type="text"
        placeholder="Enter full name"
        class="w-full px-4 py-2 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"
      />

      <!-- Guest Count -->
      <p class="text-sm text-gray-700 mb-6">
        I'll come with
        <span class="inline-flex items-center gap-1 mx-1">
          <span class="bg-green-600 text-white text-xs px-2 py-1 rounded-full"
            >1</span
          >
          <span class="bg-green-600 text-white text-xs px-2 py-1 rounded-full"
            >1</span
          >
        </span>
        other person
      </p>

      <!-- RSVP Button -->
      <button
        @click="submitRSVP"
        class="w-full bg-green-700 text-white py-2 rounded-full font-semibold hover:bg-green-800 transition"
      >
        Save RSVP
      </button>

      <!-- Call-to-Action -->
      <p class="mt-6 text-sm text-gray-700">
        Call : <span class="text-brown-700 font-semibold">Ama</span> on
        <span class="text-red-600 font-semibold">020 123 4567</span>
      </p>
    </div>

    <div class="flex flex-col justify-center items-center text-center mt-12">
      <NavBar />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NavBar from "@/components/NavBar.vue";
const name = ref("");

function submitRSVP() {
  if (name.value.trim() === "") {
    alert("Please enter your full name");
    return;
  }
  alert(`Thanks ${name.value}, your RSVP has been saved!`);
  name.value = "";
}
</script>
