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
          src="/images/pic5.png"
          class="object-cover aspect-square size-16 lg:size-24 rounded-2xl shadow-xl rotate-[-14deg] bg-white p-1 mt-4"
        />
        <img
          src="/images/pic6.png"
          class="object-cover aspect-square size-16 lg:size-24 rounded-2xl shadow-xl rotate-[9deg] bg-white p-1"
        />
      </div>

      <!-- Spacer for photos -->
      <div class="mt-8 lg:mt-12" />

      <!-- Heading -->
      <div class="flex flex-col justify-center items-center gap-1">
        <p class="text-xs text-gray-500 uppercase">
          This Helps Us Plan For the Numbers
        </p>
        <h2
          class="text-xl lg:text-2xl font-semibold tracking-tight text-brown-800 mb-6"
        >
          Let Us Know If You Can Join Us:
        </h2>
      </div>

      <div class="flex flex-col gap-4 w-full">
        <!-- Full Name Input -->
        <div class="flex flex-col w-full">
          <label
            class="block text-left text-sm text-gray-700 mb-1 ml-1"
            for="fullName"
            >Enter full name</label
          >
          <input
            v-model="name"
            id="fullName"
            type="text"
            placeholder="Enter full name"
            class="w-full px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600/40 placeholder:text-sm"
          />
        </div>

        <!-- Guest Count -->
        <div
          class="flex items-center justify-start text-sm tracking-tight text-gray-700 gap-2"
        >
          <span class="">I'll come with</span>
          <div class="flex items-center gap-4">
            <button
              @click="decreaseGuests"
              class="bg-green-50 text-green-600 hover:bg-green-700 hover:text-white border-2 border-green-100 rounded-full flex items-center justify-center p-2 text-xl font-extrabold transition-all duration-300 ease-in-out delay-75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h14"
                />
              </svg>
            </button>
            <span class="text-green-600 text-lg font-extrabold">{{
              guests
            }}</span>
            <button
              @click="increaseGuests"
              class="bg-green-50 text-green-600 hover:bg-green-700 hover:text-white border-2 border-green-100 rounded-full flex items-center justify-center p-2 text-xl font-extrabold transition-all duration-300 ease-in-out delay-75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
          <span>other person<span v-if="guests !== 1">s</span></span>
        </div>
      </div>

      <!-- RSVP Button -->
      <button
        @click="submitRSVP"
        class="w-full bg-green-700 text-white py-3 mt-4 rounded-full font-semibold hover:bg-green-800"
      >
        Save RSVP
      </button>

      <!-- Call-to-Action -->
      <p class="mt-6 text-sm text-gray-700">
        Call: Prosper on
        <a
          class="text-green-600 font-semibold underline"
          href=":tel:020 123 4567"
          target="_blank"
          rel="noopener noreferrer"
          >020 123 4567</a
        >
        or Edith on
        <a
          class="text-green-600 font-semibold underline"
          href=":tel:020 123 4567"
          target="_blank"
          rel="noopener noreferrer"
          >020 123 4567</a
        >
      </p>
    </div>

    <NavBar />
  </div>
</template>

<script setup>
import { ref } from "vue";
import NavBar from "@/components/NavBar.vue";
const name = ref("");
const guests = ref(0);
const loading = ref(false);

function increaseGuests() {
  guests.value += 1;
}
function decreaseGuests() {
  if (guests.value > 0) guests.value -= 1;
}
async function submitRSVP() {
  try {
    loading.value = true;
    if (name.value.trim() === "") {
      alert("Please enter your full name");
      return;
    }

    const payload = {
      name: name.value,
      number_of_guests: guests.value + 1,
    };

    await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    alert(`Thanks ${name.value}, your RSVP has been saved!`);
    name.value = "";
    guests.value = 0;
  } finally {
    loading.value = false;
  }
}
</script>
