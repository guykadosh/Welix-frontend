<template>
  <section class="editor flex flex-column">
    <editor-header />
    <editor-nav />
    <section class="editor-main flex">
      <editor-tool-bar v-if="wap" :cmps="cmps" @wapSaved="wapSaved" />
      <editor-wap :wap="wap" v-if="wap" />
      <pointer v-for="pointer in pointers" :pointer="pointer" />
    </section>
  </section>
</template>

<script>
// Services
import { wapService } from '../services/wap.service.js'
import { utilService } from '../services/util.service.js'
import {
  socketService,
  SOCKET_EMIT_SET_EDITOR,
  SOCKET_EVENT_CMP_UPDATED,
  SOCKET_EVENT_WAP_UPDATED,
  SOCKET_EVENT_CMP_REMOVED,
  SOCKET_EVENT_MOUSE_ACTIVITY,
} from '../services/socket.service.js'
// Libraries
import { createVNode } from 'vue'
import { Modal } from 'ant-design-vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
// Cmps
import editorHeader from '../cmps/editor/editor-header.vue'
import editorNav from '../cmps/editor/editor-nav.vue'
import editorToolBar from '../cmps/editor/editor-tool-bar.vue'
import editorWap from '../cmps/editor/editor-wap.vue'
import pointer from '../cmps/editor/pointer.vue'

export default {
  name: 'wap-editor',
  data() {
    return {
      isSaved: false,
      pointers: [],
    }
  },
  async created() {
    try {
      const { wapId } = this.$route.params
      socketService.emit(SOCKET_EMIT_SET_EDITOR, { wapId })
      document.addEventListener('mousemove', this.handleMouseMove)
      socketService.on(SOCKET_EVENT_MOUSE_ACTIVITY, this.handleMouseSocket)
      socketService.on(SOCKET_EVENT_CMP_UPDATED, this.updateCmp)
      socketService.on(SOCKET_EVENT_WAP_UPDATED, this.setCurrWap)
      socketService.on(SOCKET_EVENT_CMP_REMOVED, this.removeCmp)

      if (wapId) {
        await this.$store.dispatch({ type: 'loadWap', wapId })
      } else {
        if (!this.wap)
          this.$store.commit({
            type: 'setCurrWap',
            wap: wapService.getEmptyWap(),
          })
      }
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    wapSaved() {
      this.isSaved = true
    },
    updateCmp(cmp) {
      this.$store.commit({ type: 'updateCmp', cmp })
    },
    setCurrWap(wap) {
      console.log('Setting curr wap')
      this.$store.commit({ type: 'setCurrWap', wap })
    },
    removeCmp(cmpId) {
      this.$store.commit({ type: 'removeCmp', cmpId })
    },
    handleMouseMove(ev) {
      socketService.emit('mouse_activity', {
        x: ev.clientX,
        y: ev.clientY,
        username: this.user?.username || 'guest',
      })
    },
    handleMouseSocket(pointer) {
      const idx = this.pointers.findIndex(p => p.id === pointer.id)
      if (idx === -1) {
        pointer.color = utilService.getRandomColor()
        this.pointers.push(pointer)
      } else {
        pointer.color = this.pointers[idx].color
        this.pointers[idx] = pointer
      }
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
    next()
    // uncomment to warn user from deleting the wap
    // if (!this.isSaved) {
    //   Modal.confirm({
    //     title: 'Are you sure you want to leave?',
    //     icon: createVNode(ExclamationCircleOutlined),
    //     content: createVNode(
    //       'div',
    //       { style: 'color:red;' },
    //       'Unsaved changes will be discarded'
    //     ),
    //     onOk() {
    //       next()
    //     },
    //     onCancel() {
    //       next(false)
    //     },
    //     class: 'test',
    //   })
    // } else {
    //   next()
    // }
  },
  async unmounted() {
    wapService.saveToSession(this.wap)
    if (!this.isSaved && !this.wap.isSaved) {
      try {
        await this.$store.dispatch({ type: 'removeWap', wapId: this.wap._id })
        this.$store.commit({
          type: 'setCurrWap',
          wap: wapService.getEmptyWap(),
        })
      } catch (err) {
        console.log(err)
      }
    }

    document.removeEventListener('mousemove', this.handleMouseMove)
    socketService.off(SOCKET_EVENT_CMP_UPDATED)
    socketService.off(SOCKET_EVENT_WAP_UPDATED)
    socketService.off(SOCKET_EVENT_CMP_REMOVED)
    socketService.off(SOCKET_EVENT_MOUSE_ACTIVITY)
  },
  components: {
    editorHeader,
    editorNav,
    editorToolBar,
    editorWap,
    ExclamationCircleOutlined,
    pointer,
  },
}
</script>

<style></style>
