<template>
  <ul class="nav-bar clean-list flex">
    <li v-for="link in cmp.info.links">
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
