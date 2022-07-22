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
      url: '',
      fileList: [],
    }
  },
  components: {
    CloudUploadOutlined,
  },
  created() {
    this.url = this.cmp.info.img?.url || this.cmp.info.logoImg.url
  },
  methods: {
    setUrl() {
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
