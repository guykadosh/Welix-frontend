<template>
  <ul class="nav-bar">
    <li v-for="link in cmp.links">
      <a :href="link.href">{{ link.title }}</a>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    cmp: Object,
  },
}
</script>
