<template>
  <div class="tool-bar flex">
    <editorToolBarNav @setTool="openTool" />
    <section class="tool-bar-actions" :class="isEditorOpen">
      <div class="tool-bar-actions__header">
        <h2>{{ title }}</h2>
      </div>
      <section v-if="tool === 'element'">
        <div>Element A</div>
        <div>Element B</div>
        <div>Element C</div>
        <div>Element D</div>
        <div>Element E</div>
      </section>
      <editorToolSections v-if="tool === 'section'" :cmps="cmps" />
      <el-editor v-if="tool === 'edit'" />
    </section>
  </div>
</template>

<script>
import { Container, Draggable } from 'vue3-smooth-dnd'
import { applyDrag } from '@/services/dnd.utils/helpers.js'
import { eventBus } from '../../services/event-bus.service'
import editorToolBarNav from './editor-tool-bar-nav.vue'
import elEditor from './el-editor.vue'
import editorToolSections from './editor-tool-sections.vue'

export default {
  name: 'edit-tool-bar',
  props: {
    cmps: Array,
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
  },
  computed: {
    isEditorOpen() {
      return {
        'open-section': this.isOpen && this.tool === 'section',
        'open-edit': this.isOpen && this.tool === 'edit',
      }
    },
    title() {
      switch (this.tool) {
        case 'section':
          return 'Add Section'
        case 'edit':
          return 'Edit'
      }
    },
  },
  created() {
    eventBus.on('open-edit', this.openElEdit)
    this.items = JSON.parse(JSON.stringify(this.cmps))
  },
  components: {
    Container,
    Draggable,
    editorToolBarNav,
    elEditor,
    editorToolSections,
  },
}
</script>

<style></style>
