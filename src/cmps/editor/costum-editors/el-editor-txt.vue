<template lang="">
  <section class="el-editor-inner flex flex-column">
    <div class="box flex justify-between">
      <p class="title">Font Family</p>
      <a-select
        :options="fonts"
        v-model:value="style.fontFamily"
        @change="setStyle"
        defaultActiveFirstOption
      ></a-select>
    </div>
    <div class="box flex justify-between">
      <p class="title">Font Size</p>
      <a-slider
        v-model:value="fontSize"
        @change="setfontSize"
        :min="16"
        :max="82"
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
        fontFamily: '',
        fontSize: '',
      },
      fontSize: 32,
      link: '',
      fonts: [
        { value: '', label: 'Pick font' },
        { value: 'Great-Vibes', label: 'Great Vibes' },
        { value: 'Roboto-Regular', label: 'Roboto' },
        { value: 'Impact', label: 'Impact' },
        { value: 'Arial', label: 'Arial' },
        { value: 'Rubik-Regula', label: 'Rubik' },
      ],
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
    setfontSize() {
      this.style.fontSize = this.fontSize + 'px'
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
