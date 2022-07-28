<template>
  <section class="img-upload">
    <label>
      <CloudUploadOutlined class="icon" />
      <!-- <p>Drag photos and videos here</p>
            <p>or click here to select from computer</p> -->
      <input type="file" @change="handleFile" hidden />
    </label>
    <!-- <img v-else src="../assets/loader.gif" alt="" /> -->
  </section>
</template>

<script>
import { uploadImg } from '../../../services/img-upload.service'
import { CloudUploadOutlined } from '@ant-design/icons-vue'

export default {
  name: 'img-upload',
  components: {
    CloudUploadOutlined,
  },
  data() {
    return {}
  },
  methods: {
    handleFile(ev) {
      console.log(ev)
      let file
      file = ev.target.files[0]
      //   else if (ev.type === 'drop') file = ev.dataTransfer.files[0]
      this.onUploadFile(file)
    },
    async onUploadFile(file) {
      //   this.isLoading = true
      const loader = this.$loading.show()
      const res = await uploadImg(file)
      //   this.isLoading = false
      loader.hide()
      this.$emit('uploaded', res.url)
    },
  },
}
</script>

<style scoped>
.icon {
  font-size: 28px;
  margin-inline-start: 10px;
  cursor: pointer;
}
</style>
