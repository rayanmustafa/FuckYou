<script setup>
const { ref } = require("@vue/reactivity");
const props = defineProps({
  Name: String,
  Desc: String,
});
const show = ref(false);
const toggleShow = () => {
  show.value = !show.value;
};
</script>

<template>
  <div class="mb-4">
    <div
      @click="toggleShow"
      class="cursor-pointer py-4 p-2 px-3 bg-slate-800 text-slate-200 rounded-t-lg flex justify-between"
    >
      <div>
        {{ Name }}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        class="h-6 w-6"
        :class="{ svg: show }"
      >
        <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z"
        />
      </svg>
    </div>
    <transition name="acc">
      <div
        v-show="show"
        class="py-4 p-2 px-3 bg-slate-800 text-slate-200 border-t border-t-slate-200"
      >
        {{ Desc }}
      </div>
    </transition>
  </div>
</template>

<style scoped>
.acc-enter-active {
  animation: acc 0.5s ease-in;
}
.acc-leave-active {
  animation: acc2 0.5s ease-in;
}
@keyframes acc {
  from {
    max-height: 0;
  }
  to {
    max-height: 400px;
  }
}
@keyframes acc2 {
  from {
    max-height: auto;
  }
  to {
    max-height: 0;
  }
}
svg {
  filter: invert(94%) sepia(4%) saturate(1487%) hue-rotate(181deg)
    brightness(92%) contrast(91%);
  transition: all 0.4s ease-in;
}
.svg {
  transform: rotate(180deg);
}
</style>
