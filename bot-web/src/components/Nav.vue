<script setup>
const { ref } = require("@vue/reactivity");

const show = ref(false);

const toggleNav = () => {
  show.value = !show.value;
};
</script>

<template>
  <header>
    <nav
      class="flex flex-wrap items-center justify-between w-full py-4 md:py-1 px-12 text-lg bg-slate-700 text-slate-300"
    >
      <div>
        <router-link to="/" class="text-3xl"
          ><img
            src="@/assets/logo.png"
            alt="oliver-bot"
            class="hidden md:inline w-12 mx-4 my-3"
          />Oliver Bot</router-link
        >
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        @click="toggleNav"
        class="h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div
        class="w-full md:flex md:items-center md:w-auto"
        :class="{ hidden: !show }"
      >
        <ul
          class="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0"
        >
          <li>
            <router-link
              class="md:p-4 py-2 md:inline-block block text-slate-300"
              to="/commands"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                class="w-5 h-5 mb-1 mx-1 inline"
              >
                <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M9.372 86.63C-3.124 74.13-3.124 53.87 9.372 41.37C21.87 28.88 42.13 28.88 54.63 41.37L246.6 233.4C259.1 245.9 259.1 266.1 246.6 278.6L54.63 470.6C42.13 483.1 21.87 483.1 9.372 470.6C-3.124 458.1-3.124 437.9 9.372 425.4L178.7 256L9.372 86.63zM544 416C561.7 416 576 430.3 576 448C576 465.7 561.7 480 544 480H256C238.3 480 224 465.7 224 448C224 430.3 238.3 416 256 416H544z"
                />
              </svg>
              Commands
            </router-link>
            <router-link
              class="md:p-4 py-2 md:inline-block block text-slate-300"
              to="/support"
            >
              <svg
                class="w-5 h-5 mb-1 mx-1 inline"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z"
                />
              </svg>
              Support
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
svg {
  filter: invert(94%) sepia(4%) saturate(1487%) hue-rotate(181deg)
    brightness(92%) contrast(91%);
}
</style>
