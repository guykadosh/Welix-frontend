<template lang="">
  <component
    v-if="type"
    :is="type"
    @edited="updateCmp"
    @removedCmp="removeCmp"
    @duplicatedCmp="duplicateCmp"
    :cmp="cmp"
  ></component>
  <div v-else class="el-editor-inner">
    <h2>Pick an element to edit</h2>
  </div>
</template>
<script>
import elEditorTxt from './costum-editors/el-editor-txt.vue'
import elEditorBtn from './costum-editors/el-editor-btn.vue'
import elEditorImg from './costum-editors/el-editor-img.vue'
import elEditorImgs from './costum-editors/el-editor-imgs.vue'
import elEditorCmp from './costum-editors/el-editor-cmp.vue'

export default {
  components: {
    elEditorTxt,
    elEditorBtn,
    elEditorImg,
    elEditorImgs,
    elEditorCmp,
  },
  methods: {
    updateCmp({ style, link, url, urls }) {
      debugger
      const { key, idx } = this.el

      const cmp = JSON.parse(JSON.stringify(this.cmp))

      if (key) {
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

        if (urls) {
          cmp.info[key].urls = urls
        }

        if (link) {
          cmp.info[this.el.key].link = link
        }
      } else {
        cmp.style = style
      }

      
      const newCmp = JSON.parse(JSON.stringify(cmp))
      this.$store.commit({ type: 'setCmpToEdit', cmp: newCmp })
      this.$store.commit({ type: 'updateCmp', newCmp })
    },
    removeCmp() {
      this.$store.commit({ type: 'removeCmp', cmpId: this.cmp.id })
    },
    duplicateCmp() {
      this.$store.commit({ type: 'duplicateCmp', cmpId: this.cmp.id })
    },
  },
  created() {},
  computed: {
    cmp() {
      return this.$store.getters.cmpToEdit
    },
    el() {
      // {type, key, idx}
      return this.$store.getters.elToEdit
    },
    type() {
      return this.el?.type ? 'el-editor-' + this.el.type : ''
    },
  },
}
</script>
<style lang=""></style>
