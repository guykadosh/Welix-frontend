<template>
  <ul class="nav-bar clean-list flex items-center" :class="cmp.classes">
    <li v-for="link in cmp.info.links" class="nav-link" contenteditable="true" @click="select(link)">
      <a>{{ link.title }}</a>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'wap-nav-edit',
  props: {
    cmp: Object,
  },
  methods: {
    select(element) {
      console.log('element', element)
    },
  },
}
</script>
