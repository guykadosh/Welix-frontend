<template>
  <div class="tool-bar flex">
    <editor-tool-bar-nav @saved="saveWap" @setTool="openTool" />
    <section class="tool-bar-actions" :class="isEditorOpen">
      <div class="tool-bar-actions__header flex justify-between">
        <h2>{{ title }}</h2>
        <p class="close" @click="isOpen = false"><close-outlined /></p>
      </div>
      <el-editor v-if="tool === 'edit'" />
      <editor-tool-sections v-if="tool === 'section'" :cmps="cmps" />
      <editor-tool-theme v-if="tool === 'theme'" />
    </section>
  </div>
</template>

<script>
import { Container, Draggable } from 'vue3-smooth-dnd'
import { applyDrag } from '@/services/dnd.utils/helpers.js'
import { eventBus } from '../../services/event-bus.service'
import { CloseOutlined } from '@ant-design/icons-vue'
import editorToolBarNav from './editor-tool-bar-nav.vue'
import elEditor from './el-editor.vue'
import editorToolSections from './editor-tool-sections.vue'
import editorToolTheme from './editor-tool-theme.vue'
import { notification } from 'ant-design-vue'

export default {
  name: 'edit-tool-bar',
  props: {
    cmps: Array,
  },
  emits: ['saved'],
  components: {
    Container,
    Draggable,
    editorToolBarNav,
    elEditor,
    editorToolSections,
    editorToolTheme,
    CloseOutlined,
  },
  data() {
    return {
      items: null,
      isOpen: false,
      tool: null,
    }
  },
  methods: {
    addWapCmp(cmpId) {
      console.log('add cmp', cmpId)
    },
    onDrop(dropRes) {
      let cmps = JSON.parse(JSON.stringify(this.items))
      cmps = applyDrag(cmps, dropRes)
      this.$store.commit({ type: 'updateCmps', cmps })

      //   this.items = applyDrag(this.items, dropRes)
    },
    getChildPayload(idx) {
      return this.items[idx]
    },
    openTool(type) {
      if (this.tool === type && this.isOpen) {
        this.isOpen = false
        return
      }
      if (this.isOpen && this.tool !== type) {
        this.tool = type
        this.isOpen = true
        return
      }
      this.isOpen = !this.isOpen
      this.tool = type
    },
    openElEdit() {
      this.tool = 'edit'
      this.isOpen = true
    },
    async saveWap() {
      if (!this.user) {
        notification['error']({
          message: `Login first`,
        })
        return // signup / login form
      }
      if (!this.wap.name) {
        // alert to user to enter a name with msg then return
        notification['error']({
          message: `Please pick a name to your website first`,
        })
        eventBus.emit('name-focus')
        return
      }
      await this.$store.dispatch({ type: 'saveWap', isPublished: false })
      notification['success']({
        message: `Site saved successfully`,
      })
      this.$router.push('/dashboard')
    },
    publishWap() {
      // if(!this.user) signup / login form
      // if(!this.wap.name) to user user to enter a name then return
      this.$store.dispatch({ type: 'saveWap', isPublished: true })
    },
  },
  computed: {
    isEditorOpen() {
      return {
        'open-section': this.isOpen && this.tool === 'section',
        'open-edit':
          (this.isOpen && this.tool === 'edit') ||
          (this.isOpen && this.tool === 'theme'),
      }
    },
    title() {
      switch (this.tool) {
        case 'section':
          return 'Add Section'
        case 'edit':
          return 'Edit'
        case 'theme':
          return 'Pick a theme'
      }
    },
    user() {
      return this.$store.getters.getUser
    },
    wap() {
      return this.$store.getters.getCurrWap
    },
  },
  created() {
    eventBus.on('open-edit', this.openElEdit)
    this.items = JSON.parse(JSON.stringify(this.cmps))
  },
}
</script>

<style></style>
