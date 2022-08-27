<script setup>
const { ref } = require("@vue/reactivity");
const show = ref(false);

const props = defineProps({
  Name: String,
  Role: String,
  imgLink: String,
  ID: String,
});

const toggleShow = async () => {
  try {
    await navigator.clipboard.writeText(props.ID);
    console.log("Copied");
  } catch ($e) {
    console.log("Cannot copy");
  }
  show.value = !show.value;
  setTimeout(() => {
    show.value = !show.value;
  }, 2000);
};
</script>

<template>
  <div
    class="text-center p-5 bg-slate-500 rounded-md m-4 border md:hover:scale-110 transition-all"
    style="max-width: 200px"
  >
    <img
      :src="imgLink"
      class="rounded-full inline border border-slate-800"
      style="max-width: 160px"
    />
    <br />
    <div
      class="text-2xl inline-block relative cursor-pointer"
      @click="toggleShow"
    >
      {{ Name }}
      <transition name="id">
        <div
          class="absolute bottom-8 bg-blue-400 rounded-md px-3 text-sm"
          v-show="show"
        >
          ID Copied to Clipboard
        </div>
      </transition>
    </div>
    <div class="text-xl">{{ Role }}</div>
  </div>
</template>

<style scoped>
.id-enter-from,
.id-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
.id-enter-active,
.id-leave-active {
  transition: all 0.4s ease;
}
</style>
