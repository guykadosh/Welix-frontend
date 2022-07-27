<template>
  <section class="el-editor-inner flex flex-column">
    <div v-for="(url, idx) in urls" class="box">
      <p class="title">Change image</p>
      <img :src="url" />
      <div class="flex justify-between items-center">
        <a-input
          v-model:value="urls[idx]"
          @keyup.enter="setUrls"
          :placeholder="url"
        />
        <img-upload @uploaded="setUrl($event, idx)" />
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
      urls: null,
    }
  },
  created() {
    // console.log(this.cmp.info.imgs.urls)
    this.urls = JSON.parse(JSON.stringify(this.cmp.info.imgs.urls))
  },
  components: {
    CloudUploadOutlined,
    ImgUpload,
  },
  methods: {
    setUrls() {
      this.$emit('edited', { urls: this.urls })
    },
    setUrl(url, idx) {
      this.urls[idx] = url
      this.setUrls()
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
  width: 75px;
  margin-bottom: 3px;
}
</style>
