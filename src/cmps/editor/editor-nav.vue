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
      <a-tooltip @click="resize(1700)" placement="bottom">
        <template #title>
          <span>Switch to desktop</span>
        </template>
        <div>
          <font-awesome-icon
            icon="fa-light fa-display"
            :class="{ active: viewMode === 1300 }"
            class="icon"
          />
        </div>
        <!-- <desktop-outlined class="icon" :class="{ active: viewMode === 1300 }" /> -->
      </a-tooltip>
      <a-tooltip @click="resize(800)" placement="bottom">
        <template #title>
          <span>Switch to tablet</span>
        </template>
        <div>
          <font-awesome-icon
            icon="fa-light fa-tablet-screen"
            :class="{ active: viewMode === 800 }"
            class="icon"
          />
        </div>
        <!-- <tablet-outlined class="icon" :class="{ active: viewMode === 800 }" /> -->
      </a-tooltip>
      <a-tooltip @click="resize(420)" placement="bottom">
        <template #title>
          <span>Switch to mobile</span>
        </template>
        <div>
          <font-awesome-icon
            icon="fa-light fa-mobile"
            :class="{ active: viewMode === 420 }"
            class="icon"
          />
        </div>
        <!-- <mobile-outlined class="icon" :class="{ active: viewMode === 420 }" /> -->
      </a-tooltip>
    </div>
    <div class="editor-nav-site-domain flex flex-column justify-center">
      <div>
        <!-- <lock-outlined class="icon" /> -->
        <span class="http">https:</span
        ><span
          >//welix.herokuapp.com/
          <span
            class="my-site"
            contenteditable="true"
            @input="debouceName"
            ref="wapName"
            >{{ siteName }}</span
          ></span
        >
      </div>
    </div>
    <div class="editor-nav-actions flex items-center">
      <a-tooltip @click="undo" placement="bottom">
        <template #title>
          <span>Undo</span>
        </template>
        <div>
          <font-awesome-icon
            icon="fa-light fa-share fa-flip-horizontal"
            class="icon fa-flip-horizontal"
          />
        </div>
      </a-tooltip>
      <a-tooltip @click="redo" placement="bottom">
        <template #title>
          <span>Redo</span>
        </template>
        <div>
          <font-awesome-icon icon="fa-light fa-share" class="icon" />
        </div>
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
import { notification } from 'ant-design-vue'

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
    eventBus.on('name-focus', this.focusName)
  },
  methods: {
    resize(size) {
      this.viewMode = size
      eventBus.emit('resized', size)
      console.log('hi')
    },
    // async undo() {
    //   try {
    //     await this.$store.dispatch({ type: 'undo' })
    //   } catch (err) {
    //     console.log(err)
    //     // notification['Somthing went wrong...']
    //   }
    // },
    // async redo() {
    //   try {
    //     this.$store.dispatch({ type: 'redo' })
    //   } catch (err) {
    //     console.log(err)
    //     // notification['Somthing went wrong...']
    //   }
    // },
    undo() {
      this.$store.commit({ type: 'undo' })
    },
    redo() {
      this.$store.commit({ type: 'redo' })
    },
    changeWapName() {
      const name = this.$refs.wapName.innerText
      this.$store.commit({ type: 'changeWapName', name })
    },
    focusName() {
      this.$refs.wapName.focus()
    },
  },
  computed: {
    wap() {
      return this.$store.getters.getCurrWap
    },
    siteName() {
      return this.wap?.name || 'my-site'
    },
  },
}
</script>

<style></style>
