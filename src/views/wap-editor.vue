<template>
  <section class="editor flex flex-column">
    <editor-header />
    <editor-nav />
    <section class="editor-main flex">
      <editor-tool-bar v-if="wap" :cmps="cmps" @wapSaved="wapSaved" />
      <editor-wap :wap="wap" v-if="wap" />
      <div
        v-for="pointer in pointers"
        class="pointer"
        :style="pointer.style"
      ></div>
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
import { createVNode, h } from 'vue'
import { eventBus } from '../services/event-bus.service.js'
import { Modal } from 'ant-design-vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
import {
  socketService,
  SOCKET_EMIT_SET_TOPIC,
  SOCKET_EVENT_CMP_UPDATED,
  SOCKET_EVENT_WAP_UPDATED,
  SOCKET_EVENT_CMP_REMOVED,
} from '../services/socket.service.js'
import { utilService } from '../services/util.service.js'
// import { h } from 'vue'

export default {
  name: 'wap-editor',
  data() {
    return {
      isSaved: false,
      pointers: [],
    }
  },
  async created() {
    document.addEventListener('mousemove', this.handleMouseMove)
    socketService.on(SOCKET_EVENT_CMP_UPDATED, this.updateCmp)
    socketService.on(SOCKET_EVENT_WAP_UPDATED, this.setCurrWap)
    socketService.on(SOCKET_EVENT_CMP_REMOVED, this.removeCmp)
    socketService.on('all_mouse_activity', pointer => {
      const idx = this.pointers.findIndex(p => p.id === pointer.id)
      if (idx === -1) {
        pointer.style.backgroundColor = utilService.getRandomColor()
        this.pointers.push(pointer)
      } else {
        pointer.style.backgroundColor = this.pointers[idx].style.backgroundColor
        // pointer.style.backgroundColor = utilService.getRandomColor()
        this.pointers[idx] = pointer
      }
      console.log(this.pointers)
      // this.pointers[0] = { pos: data.pos }
      // this.pointer =
      // console.log(pointer)
    })
    // eventBus.on('savedWap', this.wapSaved)
    try {
      const { wapId } = this.$route.params
      socketService.emit(SOCKET_EMIT_SET_TOPIC, wapId)

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
  // render() {
  //   return h('div', {
  //     class: 'pointer',
  //     style: { height: '50px', width: '50px', backgroundColor: 'red' },
  //   })
  // },
  methods: {
    wapSaved() {
      this.isSaved = true
      console.log(this.isSaved)
    },
    updateCmp(cmp) {
      console.log(cmp)
      this.$store.commit({ type: 'updateCmp', cmp })
    },
    setCurrWap(wap) {
      console.log('Hi')
      console.log(wap)
      this.$store.commit({ type: 'setCurrWap', wap })
    },
    removeCmp(cmpId) {
      console.log(cmpId)
      this.$store.commit({ type: 'removeCmp', cmpId })
    },
    handleMouseMove(ev) {
      // console.log(ev.clientX, ev.clientY)
      socketService.emit('mouse_activity', {
        x: ev.clientX,
        y: ev.clientY,
        username: this.user?.username || 'guest',
      })
    },
  },
  computed: {
    wap() {
      return this.$store.getters.getCurrWap
    },
    cmps() {
      return this.$store.getters.getCmps
    },
    user() {
      return this.$store.getters.getUser
    },
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
    } else {
      next()
    }
  },
  beforeUnmount() {
    if (!this.isSaved) {
      // show confirm msg to discard changes 'unsaved changes will be discareded...'
    }
  },
  async unmounted() {
    document.removeEventListener('mousemove', this.handleMouseMove)
    wapService.saveToSession(this.wap)
    if (!this.isSaved && !this.wap.isSaved) {
      try {
        console.log('hi?')
        await this.$store.dispatch({ type: 'removeWap', wapId: this.wap._id })
        this.$store.commit({
          type: 'setCurrWap',
          wap: wapService.getEmptyWap(),
        })
      } catch (err) {
        console.log(err)
      }
    }
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

<style>
.pointer {
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: blue;
  z-index: 3;
}
</style>
