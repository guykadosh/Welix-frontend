<template>
  <ul class="nav-bar clean-list flex items-center" :class="cmp.classes">
    <li v-for="(link, idx ) in cmp.info.links" class="nav-link" contenteditable="true" @click="select(link)"
    ref="title" @input="changeTxt('title', idx)" @mousedown.stop>
      <a >{{ link.title }}</a>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'wap-nav-edit',
  props: {
    cmp: Object,
  },
  data() {
    return {
      currCmp: null,
    }
  },
  methods: {
    select(element) {
      console.log('element', element)
    },
    changeTxt(ref, idx) {
      console.log()
      console.log(ref, idx)
      this.cmpToEdit.info.links[idx].title = this.$refs[ref].innerText
      // console.log(this.cmpToEdit.info.links[idx].title)
      // this.$store.dispatch({ type: 'updateCmp', cmp: this.cmpToEdit })
    },
    created() {
      this.currCmp = JSON.parse(JSON.stringify(this.cmp))
    },
  },
}
</script>
