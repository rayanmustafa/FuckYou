<script setup>
import Container from "./CmdContainer.vue";
import Command from "./Command.vue";
</script>

<template>
  <section>
    <Container Name="Whitelist Commands">
      <Command Name="name" Desc="Desc" />
    </Container>
  </section>
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
