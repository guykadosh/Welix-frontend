<template>
  <section class="el-editor-inner">
    <div class="extra-tools flex">
      <a-tooltip class="tool" @click="duplicateCmp" placement="top">
        <template #title>
          <span>Duplicate</span>
        </template>
        <font-awesome-icon icon="fa-light fa-copy" />
      </a-tooltip>
      <a-tooltip class="tool" @click="removeCmp" placement="top">
        <template #title>
          <span>Delete</span>
        </template>
        <font-awesome-icon icon="fa-light fa-trash" />
      </a-tooltip>
    </div>

    <div class="box">
      <p class="title">Background color</p>
      <color-picker @picked="setBgColor" />
    </div>
  </section>
</template>
<script>
import colorPicker from './color-picker.vue'
import { DeleteOutlined, CopyOutlined } from '@ant-design/icons-vue'
export default {
  name: 'el-editor-cmp',
  props: {
    cmp: Object,
  },
  components: {
    colorPicker,
    DeleteOutlined,
    CopyOutlined,
  },
  data() {
    return {
      style: {
        backgroundColor: '',
      },
    }
  },
  methods: {
    setStyle() {
      this.$emit('edited', { style: this.style })
    },
    setBgColor(color) {
      this.style.backgroundColor = color
      this.setStyle()
    },
    removeCmp() {
      this.$emit('removedCmp')
    },
    duplicateCmp() {
      this.$emit('duplicatedCmp')
    },
  },
}
</script>
<style lang=""></style>
