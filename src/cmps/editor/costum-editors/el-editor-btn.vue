<template>
  <section class="el-editor-inner flex flex-column">
    <div class="box flex justify-between">
      <p class="title">Border Radius</p>
      <a-slider
        v-model:value="borderRadius"
        @change="setBorderRadius"
        :min="3"
        :max="100"
      ></a-slider>
    </div>
    <div class="box">
      <p class="title">Font color</p>
      <color-picker @picked="setColor" />
    </div>
    <div class="box">
      <p class="title">Background color</p>
      <color-picker @picked="setBgColor" />
    </div>
    <div class="box">
      <p class="title">Make it linkable</p>
      <a-input
        v-model:value="link"
        placeholder="Enter url"
        @keyup.enter="setLink"
      />
    </div>
  </section>
  <!-- <input type="color" v-model="style.color" @input="setStyle" /> -->
</template>
<script>
import colorPicker from './color-picker.vue'

export default {
  components: {
    colorPicker,
  },
  data() {
    return {
      style: {
        color: '',
        backgroundColor: '',
        borderRadius: '',
      },
      borderRadius: 6,
      link: '',
    }
  },
  methods: {
    setStyle() {
      this.$emit('edited', { style: this.style })
    },
    setLink() {
      this.$emit('edited', { link: this.link })
    },
    setColor(color) {
      this.style.color = color
      this.setStyle()
    },
    setBgColor(color) {
      this.style.backgroundColor = color
      this.setStyle()
    },
    setBorderRadius() {
      this.style.borderRadius = this.borderRadius + 'px'
      this.setStyle()
    },
  },
  computed: {
    cmp() {
      return this.$store.getters.cmpToEdit
    },
  },
}
</script>
<style scoped>
.ant-slider {
  width: 150px;
}
.ant-select {
  width: 150px;
}
</style>
