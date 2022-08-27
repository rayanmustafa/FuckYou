<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import Writer from "vue-writer";
let words = // غير الكلام اللي تحت
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus eum nostrum aut asperiores, dignissimos consequuntur sit earum autem recusandae quae?";
</script>

<template>
  <hr />
  <section class="bg-slate-400 py-12 px-10" style="height: 80vh">
    <div>
      <div class="text-4xl text-center">About the bot</div>
      <div class="text-2xl p-4">
        <Writer :array="[words]" :iterations="1" :typeSpeed="70" />
      </div>
    </div>
  </section>
</template>

<style>
.is-typed {
  font-family: "Monaco";
}

.is-typed span.typed {
  color: black;
}

.is-typed span.cursor {
  display: inline-block;
  width: 3px;
  background-color: black;
  animation: blink 1s infinite;
}

.is-typed span.underscore {
  display: inline-flex;
  width: 10px;
  height: 1px;
  align-items: flex-end;
  background-color: black;
  animation: blink 1s infinite;
}

.is-typed span.cursor.typing {
  animation: none;
}

@keyframes blink {
  49% {
    background-color: black;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
