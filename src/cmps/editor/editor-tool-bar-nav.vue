<template>
  <div @click="setTool('section')" class="add-section-mobile">
    <font-awesome-icon icon="fa-light fa-plus-large" class="plus-icon-mobile" />
  </div>
  <div class="tool-bar-nav flex flex-column justify-between">
    <div class="top">
      <ul class="clean-list">
        <li
          @click="setTool('section')"
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
          @click="setTool('theme')"
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
          @click="setTool('edit')"
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
        <li @click="saveWap">
          <a-tooltip placement="right">
            <template #title>
              <span>Save</span>
            </template>
            <div>
              <font-awesome-icon icon="fa-light fa-floppy-disk" class="icon" />
            </div>
          </a-tooltip>
        </li>
        <li>
          <a-tooltip placement="right">
            <template #title>
              <span>Work together</span>
            </template>
            <div>
              <font-awesome-icon icon="fa-light fa-people-group" class="icon" />
            </div>
          </a-tooltip>
        </li>
        <li>
          <a-tooltip placement="right">
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
} from '@ant-design/icons-vue'
export default {
  name: '',
  props: {
    isToolOpen: Boolean,
  },
  emits: ['saved'],
  data() {
    return {
      activeTool: null,
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
  methods: {
    setTool(type) {
      this.activeTool = type
      this.$emit('setTool', type)
    },
    saveWap() {
      this.$emit('saved')
    },
  },
  emits: ['setTool', 'saved'],
}
</script>

<style></style>
