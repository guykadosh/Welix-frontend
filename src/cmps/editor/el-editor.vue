<template lang="">
  <pre>{{ type }}</pre>
  <component :is="type" @edited="updateCmp"></component>
</template>
<script>
import elEditorTxt from './costum-editors/el-editor-txt.vue'

export default {
  components: {
    elEditorTxt,
  },
  methods: {
    updateCmp(style, link) {
      const cmp = JSON.parse(JSON.stringify(this.cmp))
      if (style) {
        if (this.el.idx === null) {
          cmp.info[this.el.key].style = style
        } else {
          cmp.info[this.el.key][idx].style = style
        }
      }

      if (link) {
        cmp.info[this.el.key].link = link
      }

      const newCmp = JSON.parse(JSON.stringify(cmp))
      this.$store.commit({ type: 'updateCmp', newCmp })
    },
  },
  created() {
    console.log(this.el)
    console.log(this.cmp)
  },
  computed: {
    cmp() {
      return this.$store.getters.cmpToEdit
    },
    el() {
      // {type, key, idx}
      return this.$store.getters.elToEdit
    },
    type() {
      return 'el-editor-' + this.el.type
    },
  },
}
</script>
<style lang=""></style>
