<template>
  <div
    class="relative min-h-dvh flex flex-col justify-center items-center overflow-hidden px-4 py-24 lg:py-32"
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
          src="/images/pic5.png"
          class="object-cover aspect-square size-16 lg:size-24 rounded-2xl shadow-xl rotate-[-14deg] bg-white p-1 mt-4"
        />
        <NuxtImg
          src="/images/pic6.png"
          class="object-cover aspect-square size-16 lg:size-24 rounded-2xl shadow-xl rotate-[9deg] bg-white p-1"
        />
      </div>

      <!-- Spacer for photos -->
      <div class="mt-6" />

      <!-- Heading -->
      <div class="flex flex-col justify-center items-center gap-1">
        <p class="text-xs text-gray-500 uppercase">This Helps Us Plan For the Numbers</p>
        <h2 class="text-xl lg:text-2xl font-semibold tracking-tight text-brown-800 mb-6">
          Let Us Know If You Can Join Us:
        </h2>
      </div>

      <div class="flex flex-col gap-4 w-full">
        <!-- Full Name Input -->
        <div class="flex flex-col w-full">
          <label class="block text-left text-sm text-gray-700 mb-1 ml-1" for="fullName"
            >Enter full name</label
          >
          <input
            v-model="name"
            id="fullName"
            type="text"
            placeholder="Enter full name"
            class="w-full px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600/40 placeholder:text-sm"
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
              class="bg-emerald-50 text-emerald-600 hover:bg-emerald-700 hover:text-white border-2 border-emerald-100 rounded-full flex items-center justify-center p-2 text-xl font-extrabold transition-all duration-300 ease-in-out delay-75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="size-4"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
              </svg>
            </button>
            <span class="text-emerald-600 text-lg font-extrabold">{{ guests }}</span>
            <button
              @click="increaseGuests"
              class="bg-emerald-50 text-emerald-600 hover:bg-emerald-700 hover:text-white border-2 border-emerald-100 rounded-full flex items-center justify-center p-2 text-xl font-extrabold transition-all duration-300 ease-in-out delay-75"
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

      <p v-if="funnyNote" class="text-base font-semibold text-amber-600 text-left mt-2">
        {{ funnyNote }}
      </p>

      <!-- RSVP Button -->
      <button
        @click="submitRSVP"
        :disabled="loading"
        class="w-full bg-emerald-700 text-white py-3 mt-4 rounded-full font-semibold hover:bg-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span v-if="loading">Saving...</span>
        <span v-else>Save RSVP</span>
      </button>

      <!-- Call-to-Action -->
      <p class="mt-6 text-sm text-gray-700">
        Call: Prosper on
        <NuxtLink
          to="tel:+233203660341"
          target="_blank"
          class="text-emerald-600 font-semibold underline hover:text-emerald-800 whitespace-nowrap"
          >020 366 0341</NuxtLink
        >
        or Edith on
        <NuxtLink
          to="tel:+233241981002"
          target="_blank"
          class="text-emerald-600 font-semibold underline hover:text-emerald-800 whitespace-nowrap"
          >024 198 1002</NuxtLink
        >
      </p>
    </div>

    <div
      class="bg-white relative flex flex-col items-center gap-4 rounded-3xl p-4 lg:p-8 max-w-md w-full text-center mt-4"
    >
      <div class="max-w-md mx-auto text-center flex flex-col gap-2">
        <h3 class="text-lg font-semibold text-gray-800">Wedding Colors & Inspiration</h3>
        <p class="text-xs text-gray-500">
          Need a little inspiration for the colors and what to wear
        </p>
      </div>

      <!-- Color Swatches -->
      <div class="flex justify-center flex-wrap gap-4">
        <div
          v-for="(color, index) in weddingColors"
          :key="index"
          class="flex items-center gap-1"
        >
          <div
            class="w-8 h-8 rounded-full border"
            :style="{ backgroundColor: color.hex }"
          ></div>
          <p class="text-xs font-medium text-gray-700">{{ color.name }}</p>
        </div>
      </div>

      <!-- <div
        class="flex w-full overflow-scroll py-1 -space-x-2 drop-shadow-xl scrollbar-hidden"
      >
        <a
          href="https://i.pinimg.com/1200x/95/2d/f6/952df6ec7ff24263db12bd87b3ecbd84.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NuxtImg
            src="https://i.pinimg.com/1200x/95/2d/f6/952df6ec7ff24263db12bd87b3ecbd84.jpg"
            class="object-cover aspect-square rounded-xl scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[4deg] hover:rotate-0 bg-white p-0.5"
          />
        </a>

        <a
          href="https://i.pinimg.com/736x/79/a1/e4/79a1e434555c4b1b937a90c49d7cdf6f.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NuxtImg
            src="https://i.pinimg.com/736x/79/a1/e4/79a1e434555c4b1b937a90c49d7cdf6f.jpg"
            class="object-cover aspect-square rounded-xl scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[-3deg] hover:rotate-0 bg-white p-0.5"
          />
        </a>

        <a
          href="https://i.pinimg.com/1200x/d8/44/bd/d844bd5d16fe1e8884a3beae84be7b51.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NuxtImg
            src="https://i.pinimg.com/1200x/d8/44/bd/d844bd5d16fe1e8884a3beae84be7b51.jpg"
            class="object-cover aspect-square rounded-xl scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[4deg] hover:rotate-0 bg-white p-0.5"
          />
        </a>

        <a
          href="https://i.pinimg.com/736x/9d/38/8a/9d388af19a6f8d847ad921018b149b47.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NuxtImg
            src="https://i.pinimg.com/736x/9d/38/8a/9d388af19a6f8d847ad921018b149b47.jpg"
            class="object-cover aspect-square rounded-xl scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[-3deg] hover:rotate-0 bg-white p-0.5"
          />
        </a>

        <a
          href="https://i.pinimg.com/736x/f0/51/52/f05152e130167349550e7339dbe93781.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NuxtImg
            src="https://i.pinimg.com/736x/f0/51/52/f05152e130167349550e7339dbe93781.jpg"
            class="object-cover aspect-square rounded-xl scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[-3deg] hover:rotate-0 bg-white p-0.5"
          />
        </a>

        <a
          href="https://i.pinimg.com/1200x/b1/fc/df/b1fcdf61e98b9f75237a9d7f671bcdc4.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NuxtImg
            src="https://i.pinimg.com/1200x/b1/fc/df/b1fcdf61e98b9f75237a9d7f671bcdc4.jpg"
            class="object-cover aspect-square rounded-xl scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[4deg] hover:rotate-0 bg-white p-0.5"
          />
        </a>


        <a
          href="https://i.pinimg.com/736x/05/79/d1/0579d13b916d84f730656c47a5599e04.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NuxtImg
            src="https://i.pinimg.com/736x/05/79/d1/0579d13b916d84f730656c47a5599e04.jpg"
            class="object-cover aspect-square rounded-xl scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[4deg] hover:rotate-0 bg-white p-0.5"
          />
        </a>

        <a
          href="https://i.pinimg.com/736x/81/b4/56/81b456206ca5401d2b93bc57700a02e7.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NuxtImg
            src="https://i.pinimg.com/736x/81/b4/56/81b456206ca5401d2b93bc57700a02e7.jpg"
            class="object-cover aspect-square rounded-xl scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[4deg] hover:rotate-0 bg-white p-0.5"
          />
        </a>

        <a
          href="https://i.pinimg.com/1200x/f1/c9/40/f1c9404861e77e74b2bd2d6f5d1799d7.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NuxtImg
            src="https://i.pinimg.com/1200x/f1/c9/40/f1c9404861e77e74b2bd2d6f5d1799d7.jpg"
            class="object-cover aspect-square rounded-xl scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out rotate-[-3deg] hover:rotate-0 bg-white p-0.5"
          />
        </a>
      </div> -->

      <div
        class="flex justify-center w-full overflow-scroll p-4 -space-x-2 drop-shadow-xl scrollbar-hidden"
      >
        <a
          v-for="(url, index) in inspirationImages"
          :key="index"
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NuxtImg
            :src="url"
            width="64"
            height="64"
            class="w-16 h-16 object-cover rounded-xl scale-105 hover:scale-110 transition-all duration-200 delay-75 ease-in-out hover:rotate-0 bg-white p-0.5"
            :class="index % 2 === 0 ? 'rotate-[10deg]' : 'rotate-[-12deg]'"
          />
        </a>
      </div>
      <NuxtLink
        to="https://www.pinterest.com/search/pins/?q=emerald%20beige%20guest%20outfits"
        target="_blank"
        class="border border-emerald-600/50 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-emerald-800 hover:text-white transition-all delay-75 ease-in-out duration-300"
      >
        See More Inspiration</NuxtLink
      >
    </div>

    <transition name="slide-down">
      <div
        v-if="showToast"
        class="fixed top-6 left-1/2 transform -translate-x-1/2 bg-emerald-800 text-white border border-emerald-100 px-4 py-3 rounded-xl shadow-xl text-sm font-medium z-50"
      >
        {{ toastMessage }}
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import confetti from "canvas-confetti";

const name = ref("");
const guests = ref(0);
const loading = ref(false);

const weddingColors = [
  { name: "Emerald", hex: "#006a4e", meaning: "Abundance" },
  { name: "Beige", hex: "#F1E5D1", meaning: "calm" },
];

const inspirationImages = [
  "https://i.pinimg.com/1200x/95/2d/f6/952df6ec7ff24263db12bd87b3ecbd84.jpg",
  "https://i.pinimg.com/1200x/d8/44/bd/d844bd5d16fe1e8884a3beae84be7b51.jpg",
  "https://i.pinimg.com/736x/9d/38/8a/9d388af19a6f8d847ad921018b149b47.jpg",
  "https://i.pinimg.com/736x/f0/51/52/f05152e130167349550e7339dbe93781.jpg",
  "https://i.pinimg.com/736x/05/79/d1/0579d13b916d84f730656c47a5599e04.jpg",
  "https://i.pinimg.com/736x/81/b4/56/81b456206ca5401d2b93bc57700a02e7.jpg",
];
const funnyNote = computed(() => {
  const g = guests.value;

  if (g >= 100) return "100 people?? You’re hosting your own wedding inside ours! 🎪";
  if (g >= 90)
    return "This has turned into a festival. Should we start selling tickets? 🎟️";
  if (g >= 80)
    return "Abeg, let us know if we should move this to Independence Square. 🇬🇭";
  if (g >= 70) return "This looks like the entire WhatsApp broadcast list. 😅";
  if (g >= 60) return "Ei! Are you sure we’re not naming your baby too? 👶🏾🎉";
  if (g >= 50) return "So basically, you’re bringing your village. Cool cool. 🛖";
  if (g >= 45) return "Make sure they all wear matching kente. Thanks. 👗👕";
  if (g >= 40) return "Security might ask questions, please prepare answers. 🕵🏾‍♂️";
  if (g >= 35) return "We see you… Wedding guest of the year! 🏆";
  if (g >= 30) return "Did you even RSVP for yourself… or just your entourage? 😭";
  if (g >= 25) return "We need to check the food budget again. 🍽️🔁";
  if (g >= 22) return "You're basically throwing a side-event now. 😮‍💨";
  if (g >= 20) return "You dey bring neighborhood or church branch? 😂";
  if (g >= 18) return "Hope they’re not all hungry... and thirsty. 🧃😬";
  if (g >= 16) return "This is no longer RSVP, it’s a census. 📝";
  if (g >= 14) return "The caterer just fainted. Hold on. 😵";
  if (g >= 12) return "We'll need an MC just for your table. 🎤";
  if (g >= 10) return "Are you the event planner or the guest? 😅";
  if (g >= 9) return "We better order more jollof. 🍛";
  if (g >= 8) return "Ei! Do we provide transport too? 🚌";
  if (g >= 7) return "Please, tell us there’s a sponsorship coming. 💰";
  if (g >= 6) return "Hope you're bringing your own chairs. 🪑😂";
  if (g >= 5) return "We’ll set a special table just for your crew. 🍽️";
  if (g >= 4) return "VIP section loading for your squad... 🔥";
  if (g >= 3) return "This is turning into your own mini party 😄";
  if (g === 2) return "Double trouble! We love it 💃🏾🕺🏾";
  if (g === 1) return "Perfect! You and your +1. Love it. ❤️";
  return "";
});

function increaseGuests() {
  guests.value += 1;
}
function decreaseGuests() {
  if (guests.value > 0) guests.value -= 1;
}

function launchConfetti() {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
  });
}

const showToast = ref(false);
const toastMessage = ref("");
let toastTimeout = null;

function showRSVPToast(message) {
  toastMessage.value = message;
  showToast.value = true;

  // Clear previous timeout if any
  if (toastTimeout) clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    showToast.value = false;
  }, 5000); // Hide after 5 seconds
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
      created_date: new Date(),
    };

    await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // alert(`Thanks ${name.value}, your RSVP has been saved!`);
    // showSuccess.value = true;
    launchConfetti();
    showRSVPToast(`🎉 Thanks ${name.value}, your RSVP is saved!`);

    name.value = "";
    guests.value = 0;
  } catch (error) {
    alert("Something went wrong!");
  } finally {
    loading.value = false;
  }
}
</script>

<style>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
.scrollbar-hidden {
  -ms-overflow-style: none; /* IE/Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
