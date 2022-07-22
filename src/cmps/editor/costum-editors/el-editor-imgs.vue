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
        <a-upload
          v-model:file-list="fileList"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        >
          <CloudUploadOutlined class="icon" />
        </a-upload>
      </div>
    </div>
  </section>
</template>
<script>
import { CloudUploadOutlined } from '@ant-design/icons-vue'

export default {
  props: {
    cmp: Object,
  },
  data() {
    return {
      urls: null,
      fileList: [],
    }
  },
  created() {
    // console.log(this.cmp.info.imgs.urls)
    this.urls = JSON.parse(JSON.stringify(this.cmp.info.imgs.urls))
  },
  components: {
    CloudUploadOutlined,
  },
  methods: {
    setUrls() {
      this.$emit('edited', { urls: this.urls })
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
