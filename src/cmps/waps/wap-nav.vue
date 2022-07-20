<template>
  <ul class="nav-bar clean-list flex items-center" :class="cmp.classes">
    <li v-for="link in cmp.info.links" class="nav-link">
      <a :href="link.href">{{ link.title }}</a>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'wap-nav',
  props: {
    cmp: Object,
  },
}
</script>
