<template lang="">
  <div class="pointer-container flex flex-column" :style="pointer.pos">
    <span class="pointer" :style="{ backgroundColor: pointer.color }"></span>
    <span class="pointer-text" :style="{ color: pointer.color }">
      {{ pointer.name }}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    pointer: Object,
  },
}
</script>
<style>
.pointer-container {
  position: absolute;
}

.pointer {
  width: 25px;
  height: 25px;
  /* background-color: blue; */
  clip-path: polygon(
    100% 45%,
    65% 58%,
    100% 93%,
    93% 100%,
    57% 66%,
    44% 100%,
    0 0
  );
  z-index: 100;
}

.pointer-text {
  font-weight: 500;
  font-family: Roboto-medium;
}
</style>
