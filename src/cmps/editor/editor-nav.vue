<template>
  <nav class="editor-nav flex">
    <div class="editor-nav-select">
      <a-select ref="select" class="page-nav" value="1">
        <a-select-option value="1">Page: How it works</a-select-option>
        <a-select-option value="2">Page: Meals</a-select-option>
        <a-select-option value="3">Page: Reviews</a-select-option>
        <a-select-option value="4">Page :Pricing</a-select-option>
      </a-select>
    </div>
    <div class="editor-nav-view-port flex items-center">
      <a-tooltip @click="resize(1300)" placement="bottom">
        <template #title>
          <span>Switch to desktop</span>
        </template>
        <desktop-outlined class="icon" :class="{ active: viewMode === 1300 }" />
      </a-tooltip>
      <a-tooltip @click="resize(800)" placement="bottom">
        <template #title>
          <span>Switch to tablet</span>
        </template>
        <tablet-outlined class="icon" :class="{ active: viewMode === 800 }" />
      </a-tooltip>
      <a-tooltip @click="resize(420)" placement="bottom">
        <template #title>
          <span>Switch to mobile</span>
        </template>
        <mobile-outlined class="icon" :class="{ active: viewMode === 420 }" />
      </a-tooltip>
    </div>
    <div class="editor-nav-site-domain flex flex-column justify-center">
      <div>
        <lock-outlined class="icon" />
        <span class="http">https:</span
        ><span
          >//welix.herokuapp.com/
          <span
            class="my-site"
            contenteditable="true"
            @input="debouceName"
            ref="wapName"
            >my-site</span
          ></span
        >
      </div>
    </div>
    <div class="editor-nav-actions flex items-center">
      <a-tooltip @click="undo" placement="bottom">
        <template #title>
          <span>Undo</span>
        </template>
        <undo-outlined class="icon" />
      </a-tooltip>
      <a-tooltip @click="redo" placement="bottom">
        <template #title>
          <span>Redo</span>
        </template>
        <redo-outlined class="icon" />
      </a-tooltip>
      <a-tooltip placement="bottom">
        <template #title>
          <span>Zoom in</span>
        </template>
        <zoom-in-outlined class="icon" />
      </a-tooltip>
    </div>
  </nav>
</template>

<script>
import { debounce } from 'lodash'

import {
  UndoOutlined,
  RedoOutlined,
  ZoomInOutlined,
  DesktopOutlined,
  TabletOutlined,
  MobileOutlined,
  LockOutlined,
} from '@ant-design/icons-vue'
import { eventBus } from '../../services/event-bus.service'

export default {
  name: 'editor-nav',
  components: {
    UndoOutlined,
    RedoOutlined,
    ZoomInOutlined,
    DesktopOutlined,
    TabletOutlined,
    MobileOutlined,
    LockOutlined,
  },
  data() {
    return {
      viewMode: 1300,
    }
  },
  created() {
    this.debouceName = debounce(this.changeWapName, 800)
  },
  mounted() {
    this.$refs.wapName.focus()
  },
  methods: {
    resize(size) {
      this.viewMode = size
      eventBus.emit('resized', size)
      console.log('hi')
    },
    undo() {
      this.$store.commit({ type: 'undo' })
    },
    redo() {
      console.log('Hi')
      this.$store.commit({ type: 'redo' })
    },
    changeWapName() {
      const name = this.$refs.wapName.innerText
      this.$store.commit({ type: 'changeWapName', name })
    },
  },
  computed: {
    isSelected() {},
  },
}
</script>

<style></style>
