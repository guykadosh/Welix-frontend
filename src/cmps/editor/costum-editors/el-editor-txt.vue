<template lang="">
  <section class="el-editor-inner flex flex-column">
    <div class="flex justify-between">
      <p>Font Family</p>
      <Select
        :options="fonts"
        v-model:value="style.fontFamily"
        @change="setStyle"
        defaultActiveFirstOption
      ></Select>
    </div>
    <div class="flex justify-between">
      <p>Font Size</p>
      <Slider
        v-model:value="fontSize"
        @change="setfontSize"
        :min="16"
        :max="82"
      ></Slider>
    </div>
    <div>
      <p>Font color</p>
      <color-picker @picked="setColor" />
    </div>
    <div>
      <p>Background color</p>
      <color-picker @picked="setBgColor" />
    </div>
  </section>
  <!-- <input type="color" v-model="style.color" @input="setStyle" /> -->
</template>
<script>
import colorPicker from './color-picker.vue'
import { Select, Slider } from 'ant-design-vue'

export default {
  components: {
    colorPicker,
    Select,
    Slider,
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
        { value: 'Roboto-Regular', label: 'Roboto' },
        { value: 'Impact', label: 'Impact' },
        { value: 'Arial', label: 'Arial' },
        { value: 'Rubik-Regula', label: 'Rubik' },
      ],
    }
  },
  methods: {
    setStyle() {
      this.$emit('edited', this.style)
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
