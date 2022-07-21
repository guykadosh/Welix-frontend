<template>
  <section class="color-picker">
    <label :style="{ backgroundColor: color }">
      <bg-colors-outlined />
      <input
        v-model="color"
        @input="changeColor"
        style="display: none"
        type="color"
      />
    </label>
    <div
      v-for="color in colors"
      :style="{ backgroundColor: color }"
      @click="changeColor(color)"
    ></div>
  </section>
</template>
<script>
import { BgColorsOutlined } from '@ant-design/icons-vue'
export default {
  name: 'color-picker',
  emits: ['picked'],
  components: {
    BgColorsOutlined,
  },
  data() {
    return {
      colors: [
        '#f03e3e',
        '#f06595',
        '#e599f7',
        '#7950f2',
        '#4c6ef5',
        '#15aabf',
        '#12b886',
        '#40c057',
        '#82c91e',
        '#fcc419',
        '#ff922b',
      ],
      color: '',
    }
  },
  created() {},
  methods: {
    changeColor(color) {
      if (typeof color !== 'string') color = this.color
      this.$emit('picked', color)
    },
  },
}
</script>
