<template>
  <div class="flex flex-col items-center gap-4 w-full fixed bottom-2 sm:bottom-4">
    <!-- 🟡 Glow wrapper -->
    <div class="relative glow-wrapper rounded-3xl">
      <!-- ✨ Animated glow effect -->
      <div
        class="absolute -inset-[2px] rounded-3xl glow-border pointer-events-none"
      ></div>

      <!-- Navbar -->
      <nav
        class="relative z-10 flex items-center gap-0 lg:gap-3 px-2 py-2 text-nowrap rounded-3xl drop-shadow-2xl shadow-3xl bg-white text-xs lg:text-sm backdrop-blur-sm"
      >
        <NuxtLink to="/" :class="linkClass('/')"> Home </NuxtLink>
        <NuxtLink to="/story" :class="linkClass('/story')"> Our Story </NuxtLink>
        <NuxtLink to="/directions" :class="linkClass('/directions')">Directions</NuxtLink>
        <NuxtLink
          to="/rsvp"
          :class="linkClass('/rsvp')"
          class="relative flex items-center gap-1"
        >
          RSVP
          <span class="absolute top-2 right-1 flex size-2">
            <span
              class="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75"
            ></span>
            <span class="relative inline-flex size-2 rounded-full bg-rose-600"></span>
          </span>
        </NuxtLink>
        <NuxtLink to="/gift" :class="linkClass('/gift')">Gift</NuxtLink>
      </nav>
    </div>

    <p class="text-xs text-gray-500">
      Designed and developed by Yoofi & Matekuor with love ❤️
    </p>
  </div>
</template>

<script setup>
const route = useRoute();

// function linkClass(path) {
//   return route.path === path
//     ? "bg-emerald-700 hover:bg-emerald-800 text-white px-3 py-2 rounded-3xl font-medium drop-shadow transition-all delay-75 ease-in-out duration-300"
//     : "hover:bg-gray-100 rounded-3xl px-3 py-2 transition-all delay-75 ease-in-out duration-300";
// }

function linkClass(path) {
  const isActive = route.path === path;

  return [
    "transition-all duration-300 ease-out",
    "px-3 py-2 rounded-3xl transform",
    isActive
      ? "bg-emerald-700 text-white font-semibold drop-shadow animate-bounce-tab"
      : "hover:bg-gray-100 text-gray-700 hover:scale-[1.04]",
  ].join(" ");
}
</script>

<style lang="css">
.glow-wrapper {
  position: relative;
}

.glow-border {
  background: linear-gradient(
    130deg,
    rgba(34, 211, 238, 0.6),
    rgba(244, 205, 120, 0.6),
    rgba(177, 213, 91, 0.6),
    rgba(244, 120, 120, 0.6),
    rgba(220, 145, 255, 0.6),
    rgba(120, 244, 197, 0.6)
  );
  border-radius: inherit;
  filter: blur(1px);
  z-index: 0;
  animation: glowMove 2s linear infinite;
  background-size: 300% 300%;
  opacity: 0.9;
}

@keyframes glowMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* tab bounce */
@keyframes bounce-tab-smooth {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.02);
  }
  60% {
    transform: scale(0.97);
  }
  100% {
    transform: scale(1);
  }
}

.animate-bounce-tab {
  animation: bounce-tab-smooth 700ms cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;
}
</style>
