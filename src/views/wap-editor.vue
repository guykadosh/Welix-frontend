<template>
  <section class="editor flex flex-column">
    <editor-header />
    <editor-nav />
    <section class="editor-main flex">
      <editor-tool-bar v-if="wap" :cmps="cmps" />
      <editor-wap :wap="wap" v-if="wap" />
    </section>
  </section>
</template>

<script>
import { wapService } from '../services/wap.service.js'
import editorHeader from '../cmps/editor/editor-header.vue'
import editorNav from '../cmps/editor/editor-nav.vue'
import editorToolBar from '../cmps/editor/editor-tool-bar.vue'
import editorWap from '../cmps/editor/editor-wap.vue'
import wapGalleryEdit from '../cmps/waps-edit/wap-gallery-edit.vue'
import wapListEdit from '../cmps/waps-edit/wap-list-edit.vue'
import wapNavEdit from '../cmps/waps-edit/wap-nav-edit.vue'
import wapTextEdit from '../cmps/waps-edit/wap-text-edit.vue'
import wapReviewEdit from '../cmps/waps-edit/wap-review-edit.vue'
import wapFooterEdit from '../cmps/waps-edit/wap-footer-edit.vue'
import wapCardEdit from '../cmps/waps-edit/wap-card-edit.vue'
import wapContainerEdit from '../cmps/waps-edit/wap-container-edit.vue'
import wapContactEdit from '../cmps/waps-edit/wap-contact-edit.vue'
import wapMapEdit from '../cmps/waps-edit/wap-map-edit.vue'

export default {
  name: 'wap-editor',
  data() {
    return {}
  },
  methods: {},
  computed: {
    wap() {
      return this.$store.getters.getCurrWap 
    },
    cmps() {
      return this.$store.getters.getCmps
    },
  },
  created() {
    if (!this.wap) this.$store.commit({type: 'setCurrWap', wap: wapService.getEmptyWap()})
    console.log(this.wap)
  },
  components: {
    editorHeader,
    editorNav,
    editorToolBar,
    editorWap,
    wapGalleryEdit,
    wapListEdit,
    wapNavEdit,
    wapTextEdit,
    wapReviewEdit,
    wapFooterEdit,
    wapCardEdit,
    wapContainerEdit,
    wapContactEdit,
    wapMapEdit
  },
}
</script>

<style></style>
