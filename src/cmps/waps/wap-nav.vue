<template>
  <ul class="nav-bar clean-list flex items-center" :class="cmp.classes">
    <li v-for="link in cmp.info.links" class="nav-link">
      <a :href="link.href">{{ link.txt }}</a>
    </li>
  </ul>
  <span class="mobile-nav" style="display: none;">☰</span>

</template>
<script>
export default {
  name: 'wap-nav',
  props: {
    cmp: Object,
  },
}
</script>
