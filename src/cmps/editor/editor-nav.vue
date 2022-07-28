<template>
  <nav class="editor-nav flex items-center">
    <div class="back">
      <a-tooltip placement="bottom">
        <router-link class="back-link" to="/template">
          <font-awesome-icon icon="fa-light fa-arrow-left" />
        </router-link>
        <template #title>
          <span>Go back</span>
        </template>
      </a-tooltip>
    </div>

    <div class="editor-nav-view-port flex items-center">
      <a-tooltip @click="resize(1700)" placement="bottom">
        <template #title>
          <span>Switch to desktop</span>
        </template>
        <div>
          <font-awesome-icon
            icon="fa-light fa-display"
            :class="{ active: viewMode === 1700 }"
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
        <font-awesome-icon icon="fa-light fa-lock" class="icon" />
        <span class="http">https://</span
        ><span
          ><span class="heroku-url">welix.herokuapp.com/</span>
          <span
            class="my-site"
            contenteditable="true"
            @input="debouceName"
            ref="wapName"
            >{{ siteName }}</span
          ></span
        >
        <span class="preview-site" @click="previewSite">Preview site →</span>
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
      viewMode: 1700,
    }
  },
  created() {
    this.debouceName = debounce(this.changeWapName, 400)
  },
  mounted() {
    this.$refs.wapName.focus()
    eventBus.on('name-focus', this.focusName)
  },
  methods: {
    resize(size) {
      this.viewMode = size
      eventBus.emit('resized', size)
    },
    async undo() {
      try {
        await this.$store.dispatch({ type: 'undo' })
      } catch (err) {
        console.log(err)
        // notification['Somthing went wrong...']
      }
    },
    async redo() {
      try {
        this.$store.dispatch({ type: 'redo' })
      } catch (err) {
        console.log(err)
        // notification['Somthing went wrong...']
      }
    },
    async changeWapName() {
      try {
        const name = this.$refs.wapName.innerText
        this.$store.dispatch({ type: 'changeWapName', name })
      } catch (err) {
        console.log(err)
        // TODO: msg to user
      }
    },
    previewSite() {
      if (!this.wap.name) {
        notification['error']({
          message: `Please pick a name to your website first`,
        })
        this.focusName
        return
      }

      const routeData = this.$router.resolve({
        name: 'wap-details',
        params: { wapId: this.wap._id },
      })
      window.open(routeData.href, '_blank')
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
