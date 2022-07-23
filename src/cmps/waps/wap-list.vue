<template>
  <section v-if="cmp" class="wap-list" :class="cmp.classes" :style="cmp.style">
    <h3 class="heading">{{ info.heading.txt }}</h3>
    <ul class="clean-list">
      <span v-if="info.listIcon">{{ info.listIcon }}</span>
      <li v-for="txt in info.list.txt" :key="txt">
        {{ txt }}
      </li>
    </ul>
    <a v-if="info.link" :href="info.link.link">{{ info.link.txt }}</a>
  </section>
</template>
<script>
export default {
  name: 'wap-list',
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
