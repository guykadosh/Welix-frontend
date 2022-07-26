<template>
  <div class="tool-bar flex">
    <editor-tool-bar-nav
      @saved="saveWap"
      @setTool="openTool"
      :isToolOpen="isOpen"
    />
    <section class="tool-bar-actions" :class="isEditorOpen">
      <div class="tool-bar-actions__header flex justify-between">
        <h2>{{ title }}</h2>
        <p class="close" @click="isOpen = false">
          <font-awesome-icon icon="fa-light fa-xmark-large" />
        </p>
      </div>
      <el-editor v-if="tool === 'edit'" />
      <editor-tool-sections v-if="tool === 'section'" :cmps="cmps" />
      <editor-tool-theme v-if="tool === 'theme'" />
    </section>
  </div>
  <div>
    <a-modal wrapClassName="login-form" v-model:visible="visible">
      <login @login="login" @signup="signup" />
      <template #footer></template>
    </a-modal>
  </div>
</template>

<script>
import { Container, Draggable } from 'vue3-smooth-dnd'
import { applyDrag } from '@/services/dnd.utils/helpers.js'
import { eventBus } from '../../services/event-bus.service'
import { CloseOutlined } from '@ant-design/icons-vue'
import { notification } from 'ant-design-vue'
import editorToolBarNav from './editor-tool-bar-nav.vue'
import elEditor from './el-editor.vue'
import editorToolSections from './editor-tool-sections.vue'
import editorToolTheme from './editor-tool-theme.vue'
import login from '../app/login.vue'

export default {
  name: 'edit-tool-bar',
  props: {
    cmps: Array,
  },
  emits: ['saved', 'wapSaved'],
  components: {
    Container,
    Draggable,
    editorToolBarNav,
    elEditor,
    editorToolSections,
    editorToolTheme,
    CloseOutlined,
    login,
  },
  data() {
    return {
      items: null,
      isOpen: false,
      tool: null,
      visible: false,
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
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
      if (!this.wap.name) {
        notification['error']({
          message: `Please pick a name to your website first`,
        })
        this.$emit('nameFocus')
        return
      }

      if (!this.user) {
        this.visible = true
        return
      }
      this.$emit('wapSaved')
      // eventBus.emit('wapSaved')
      const wapToSave = JSON.parse(JSON.stringify(this.wap))
      wapToSave.createdBy = {
        _id: this.user._id,
        fullname: this.user.fullname,
      }
      wapToSave.isSaved = true
      wapToSave.leads = []

      console.log(wapToSave)
      await this.$store.dispatch({ type: 'saveWap', wap: wapToSave })

      notification['success']({
        message: `Site saved successfully`,
      })
      this.$router.push('/dashboard')
    },
    async login(credentials) {
      try {
        credentials = JSON.parse(JSON.stringify(credentials))
        const user = await this.$store.dispatch({ type: 'login', credentials })

        if (user) {
          this.saveWap()
          notification['success']({
            message: `Welcome ${user.fullname}`,
          })
        }
      } catch (err) {
        console.log(err)
        notification['error']({
          message: `Wrong credentials`,
        })
      }
    },
    async signup(credentials) {
      try {
        const user = await this.$store.dispatch({ type: 'signup', credentials })

        if (user) {
          this.saveWap()
          notification['success']({
            message: `Welcome ${user.fullname}`,
          })
        }
      } catch (err) {
        console.log(err)
        notification['error']({
          message: `Cannot signup`,
        })
      }
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
