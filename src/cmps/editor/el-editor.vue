<template lang="">
  <pre>{{ type }}</pre>
  <component :is="type" @edited="updateCmp"></component>
</template>
<script>
import elEditorTxt from './costum-editors/el-editor-txt.vue'
import elEditorBtn from './costum-editors/el-editor-btn.vue'

export default {
  components: {
    elEditorTxt,
    elEditorBtn,
  },
  methods: {
    updateCmp(style, link, url) {
      const { key, idx } = this.el

      const cmp = JSON.parse(JSON.stringify(this.cmp))

      if (style) {
        if (idx === null) {
          cmp.info[key].style = style
        } else {
          cmp.info[key][idx].style = style
        }
      }

      if (url) {
        cmp.info[key].url = url
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
