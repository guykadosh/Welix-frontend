<template>
  <section v-if="cmp" class="wap-list" :class="cmp.classes">
    <h3 class="heading">{{ info.heading }}</h3>
    <ul class="clean-list">
      <span v-if="info.listIcon">{{ info.listIcon }}</span>
      <li v-for="li in info.list" :key="li">
        {{ li }}
      </li>
    </ul>
    <a :href="info.link.href">{{ info.link.txt }}</a>
  </section>
</template>
<script>
export default {
  name: 'wap-list-edit',
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
