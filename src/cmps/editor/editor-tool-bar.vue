<template>
  <div class="edit-tool-bar flex">
    <editorToolBarNav @setTool="openTool" />
    <section class="tools" :class="isEditorOpen">
      <section v-if="tool === 'element'">
        <div>Element A</div>
        <div>Element B</div>
        <div>Element C</div>
        <div>Element D</div>
        <div>Element E</div>
      </section>
      <section class="flex" v-if="tool === 'section'">
        <div class="types">
          <div>Section A</div>
          <div>Section B</div>
          <div>Section C</div>
          <div>Section D</div>
          <div>Section F</div>
        </div>

        <Container
          :get-child-payload="getChildPayload"
          group-name="1"
          @drop="onDrop($event)"
          behaviour="copy"
        >
          <Draggable v-for="item in items" :key="item.id">
            <div class="cmp-preview" @click="addWapCmp(item.id)">
              <span>{{ item.type }}</span>
            </div>
          </Draggable>
        </Container>
      </section>
      <section v-if="tool === 'edit'">
        <el-editor />
      </section>
    </section>
  </div>
</template>

<script>
import { Container, Draggable } from 'vue3-smooth-dnd'
import { applyDrag } from '@/services/dnd.utils/helpers.js'
import { eventBus } from '../../services/event-bus.service'
import editorToolBarNav from './editor-tool-bar-nav.vue'
import elEditor from './el-editor.vue'

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
      return { open: this.isOpen }
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
  },
}
</script>

<style></style>
