<template>
  <div class="tool-bar-nav__mobile">
    <div class="tool-bar-nav__mobile__wrapper">
      <div
        class="mobile-menu-btn"
        @click.stop="toggleMobileMenu"
        :class="{ open: isMobileMenu }"
      >
        <font-awesome-icon icon="fa-light fa-circle" class="btn-icon" />

        <div class="mobile-icon edit" @click.stop="setTool('edit')">
          <font-awesome-icon icon="fa-light fa-pen-to-square" />
        </div>
        <div class="mobile-icon pallete" @click.stop="setTool('theme')">
          <font-awesome-icon icon="fa-light fa-palette" />
        </div>
        <div class="mobile-icon add" @click.stop="setTool('section')">
          <font-awesome-icon icon="fa-light fa-plus" />
        </div>
      </div>
    </div>
  </div>
  <div class="tool-bar-nav flex flex-column justify-between">
    <div class="top">
      <ul class="clean-list">
        <li
          @click.stop="setTool('section')"
          :class="{ active: activeTool === 'section' && isToolOpen }"
        >
          <a-tooltip placement="right">
            <template #title>
              <span>Add Section</span>
            </template>
            <div>
              <font-awesome-icon icon="fa-light fa-circle-plus" class="icon" />
            </div>
          </a-tooltip>
        </li>
        <li
          @click.stop="setTool('theme')"
          :class="{ active: activeTool === 'theme' && isToolOpen }"
        >
          <a-tooltip placement="right">
            <template #title>
              <span>Themes</span>
            </template>
            <div>
              <font-awesome-icon icon="fa-light fa-palette" class="icon" />
            </div>
          </a-tooltip>
        </li>
        <li
          @click.stop="setTool('edit')"
          :class="{ active: activeTool === 'edit' && isToolOpen }"
        >
          <a-tooltip placement="right">
            <template #title>
              <span>Edit</span>
            </template>
            <div>
              <font-awesome-icon
                icon="fa-light fa-pen-to-square"
                class="icon"
              />
            </div>
          </a-tooltip>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <ul>
        <!-- <li @click="saveWap">
          <a-tooltip placement="right">
            <template #title>
              <span>Save</span>
            </template>
            <div>
              <font-awesome-icon icon="fa-light fa-floppy-disk" class="icon" />
            </div>
          </a-tooltip>
        </li> -->
        <li>
          <a-tooltip @click="copyUrl" placement="right">
            <template #title>
              <span>Work together</span>
            </template>
            <div>
              <font-awesome-icon icon="fa-light fa-people-group" class="icon" />
            </div>
          </a-tooltip>
        </li>
        <li>
          <a-tooltip @click="saveWap" placement="right">
            <template #title>
              <span>Publish site</span>
            </template>
            <div>
              <font-awesome-icon class="icon" icon="fa-light fa-airplay" />
            </div>
          </a-tooltip>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  PlusCircleOutlined,
  PicCenterOutlined,
  FileTextOutlined,
  EditOutlined,
  HighlightOutlined,
  BgColorsOutlined,
  SaveOutlined,
  CopyrightOutlined,
} from '@ant-design/icons-vue'
import { notification } from 'ant-design-vue'
export default {
  name: '',
  props: {
    isToolOpen: Boolean,
  },
  emits: ['saved'],
  data() {
    return {
      activeTool: null,
      isMobileMenu: false,
    }
  },
  components: {
    PlusCircleOutlined,
    PicCenterOutlined,
    FileTextOutlined,
    EditOutlined,
    HighlightOutlined,
    BgColorsOutlined,
    SaveOutlined,
  },
  computed: {},
  methods: {
    setTool(type) {
      this.toggleMobileMenu()
      this.activeTool = type
      console.log(this.activeTool)
      this.$emit('setTool', type)
    },
    saveWap() {
      this.$emit('saved')
    },
    toggleMobileMenu() {
      this.isMobileMenu = !this.isMobileMenu
    },
    copyUrl() {
      navigator.clipboard.writeText(window.location.href)
      notification['success']({
        message: `Url copied! send it to work together`,
      })
    },
  },
  emits: ['setTool', 'saved'],
}
</script>

<style></style>
