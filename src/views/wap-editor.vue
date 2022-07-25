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
import { createVNode } from 'vue'
import { eventBus } from '../services/event-bus.service.js'
import { Modal } from 'ant-design-vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
export default {
  name: 'wap-editor',
  data() {
    return {
      isSaved: false,
    }
  },
  methods: {
    wapSaved() {
      this.isSaved = true
      console.log(this.isSaved)
    },
  },
  computed: {
    wap() {
      return this.$store.getters.getCurrWap
    },
    cmps() {
      return this.$store.getters.getCmps
    },
  },
  async created() {
    eventBus.on('savedWap', this.wapSaved)
    try {
      const { wapId } = this.$route.params

      if (wapId) {
        const wap = await wapService.getById(wapId)
        console.log(wap)
        this.$store.commit({
          type: 'setCurrWap',
          wap: wap,
        })
      } else {
        if (!this.wap)
          this.$store.commit({
            type: 'setCurrWap',
            wap: wapService.getEmptyWap(),
          })
      }
    } catch (err) {}
  },
  beforeRouteLeave(to, from, next) {
    if (!this.isSaved) {
      Modal.confirm({
        title: 'Are you sure you want to leave?',
        icon: createVNode(ExclamationCircleOutlined),
        content: createVNode(
          'div',
          { style: 'color:red;' },
          'Unsaved changes will be discarded'
        ),
        onOk() {
          next()
        },
        onCancel() {
          next(false)
        },
        class: 'test',
      })
    }
  },
  beforeUnmount() {
    if (!this.isSaved) {
      // show confirm msg to discard changes 'unsaved changes will be discareded...'
    }
  },
  async unmounted() {
    // wapService.saveToSession(this.wap)
    // if (!this.isSaved && !this.wap.isSaved) {
    //   try {
    //     console.log('hi?')
    //     await this.$store.dispatch({ type: 'removeWap', wapId: this.wap._id })
    //     this.$store.commit({
    //       type: 'setCurrWap',
    //       wap: wapService.getEmptyWap(),
    //     })
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
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
    wapMapEdit,
    ExclamationCircleOutlined,
  },
}
</script>

<style></style>
