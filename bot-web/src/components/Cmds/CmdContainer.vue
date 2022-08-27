<script setup>
import { ref } from "@vue/reactivity";
const props = defineProps({
  Name: String,
});
const shown = ref(true);
const toggleShow = () => {
  shown.value = !shown.value;
};
</script>

<template>
  <div>
    <div
      @click="toggleShow"
      class="text-2xl my-3 cursor-pointer flex justify-between border rounded p-3"
    >
      <div>{{ Name }}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        class="h-6 w-6"
        :class="{ svg: shown }"
      >
        <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z"
        />
      </svg>
    </div>
    <transition name="show">
      <div v-show="shown" class="md:px-2 px-1">
        <slot />
      </div>
    </transition>
  </div>
</template>

<style scoped>
svg {
  filter: invert(94%) sepia(4%) saturate(1487%) hue-rotate(181deg)
    brightness(92%) contrast(91%);
  transition: all 0.4s ease-in;
}
.svg {
  transform: rotate(180deg);
}
</style>
