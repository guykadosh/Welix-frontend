<template>
  <section class="el-editor-inner flex flex-column">
    <div class="box">
      <p class="title">Change image</p>
      <img :src="url" />
      <div class="flex justify-between items-center">
        <a-input
          v-model:value="url"
          @keyup.enter="setUrl"
          placeholder="Enter url or upload"
        />
        <ImgUpload @uploaded="setUrl" />
      </div>
    </div>
  </section>
</template>
<script>
import { CloudUploadOutlined } from '@ant-design/icons-vue'
import ImgUpload from './img-upload.vue'

export default {
  props: {
    cmp: Object,
  },
  data() {
    return {
      url: '',
      fileList: [],
    }
  },
  components: {
    CloudUploadOutlined,
    ImgUpload,
  },
  created() {
    this.url = this.cmp.info.img?.url || this.cmp.info.logoImg.url
  },
  methods: {
    setUrl(url) {
      if (typeof url === 'string') this.url = url
      this.$emit('edited', { url: this.url })
    },
  },
}
</script>

<style scoped>
.ant-input {
  width: 200px;
}

.icon {
  font-size: 32px;
}

img {
  width: 100px;
  margin-bottom: 5px;
}
</style>
