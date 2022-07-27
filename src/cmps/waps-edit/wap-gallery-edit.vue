<template>
  <section
    v-if="cmp"
    class="wap-gallery"
    :class="[...cmp.classes, selected]"
    v-click-outside="unselect"
    :style="cmp.style"
    @click="setEditable('cmp')"
  >
    <h3 @mousedown.stop class="title">{{ info.txt }}</h3>
    <!--     <div class="imgs-container">
      <img v-for="(url, idx) in info.imgs.urls" :key="url" :class="'img' + (idx + 1)" 
        @click.stop="setEditable(info.imgs.type, 'imgs')" />
      <img :src="url" alt="gallery-img" />
    </div>
 -->
    <div class="imgs-container">
      <div
        v-for="(url, idx) in info.imgs.urls"
        :key="url"
        :class="'img' + (idx + 1)"
      >
        <img
          :src="url"
          alt="gallery-img"
          @click.stop="setEditable(info.imgs.type, 'imgs')"
        />
      </div>
    </div>
  </section>
</template>
<script>
import { eventBus } from '../../services/event-bus.service'
export default {
  name: 'wap-gallery-edit',
  props: {
    cmp: Object,
  },
  data() {
    return {
      isSelected: false,
    }
  },
  methods: {
    setEditable(type, key, idx = null) {
      if (type === 'cmp') this.isSelected = true
      const el = { type, key, idx }
      const cmp = JSON.parse(JSON.stringify(this.cmp))

      this.$emit('picked', { cmp, el })
    },
    unselect() {
      this.isSelected = false
    },
  },
  computed: {
    info() {
      return this.cmp.info
    },
    selected() {
      return { selected: this.isSelected }
    },
  },
  created() {
    console.log('im here')
  },
}
</script>
