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

    <div class="flex justify-between items-center">
      <a-input
        v-model:value="url"
        @keyup.enter="setBgcImg"
        placeholder="Enter url or upload"
      />
      <img-upload @uploaded="setBgcImg" />
    </div>
  </section>
</template>
<script>
import colorPicker from './color-picker.vue'
import { DeleteOutlined, CopyOutlined } from '@ant-design/icons-vue'
import ImgUpload from './img-upload.vue'
export default {
  name: 'el-editor-cmp',
  props: {
    cmp: Object,
  },
  components: {
    colorPicker,
    DeleteOutlined,
    CopyOutlined,
    ImgUpload,
  },
  data() {
    return {
      style: {
        backgroundColor: '',
        backgroundImage: '',
        backgroundSize: 'fit',
      },
      url: '',
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
    setBgcImg(url) {
      if (typeof url !== 'string') url = this.url
      console.log(url)
      this.style.backgroundImage = `url('${url}')`
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
