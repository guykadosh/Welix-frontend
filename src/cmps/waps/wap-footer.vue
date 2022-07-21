<template>
  <section v-if="cmp" class="wap-footer" :class="cmp.classes">
    <div class="footer-inner flex">
      <div class="logo-box" :style="info.logo.style">
        <img v-if="info.logo.img" class="logo" :src="info.logo.img" />
        <h2 v-else class="logo">{{ info.logo.txt }}</h2>
      </div>
      <div class="row">
        <h3>{{ info.row1.txt }}</h3>
        <div class="flex flex-column"></div>
        <p v-for="text in info.row1.texts">{{ text }}</p>
      </div>
      <div class="row">
        <h3>{{ info.row2.txt }}</h3>
        <div class="flex flex-column"></div>
        <p v-for="text in info.row2.texts">{{ text }}</p>
      </div>
    </div>

    <p>{{ info.copyright }}</p>
  </section>
</template>
<script>
export default {
  name: 'wap-footer',
  props: {
    cmp: Object,
  },
  computed: {
    info() {
      return this.cmp.info
    },
  },
}
</script>
