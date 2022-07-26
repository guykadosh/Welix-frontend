<template>
  <section v-if="cmp" class="wap-gallery" :class="cmp.classes" :style="cmp.style" @click="setEditable('cmp')">
    <h3 @mousedown.stop class="title">{{ info.txt }}</h3>
    <div class="imgs-container">
      <img v-for="(url, idx) in info.imgs.urls" :key="url" :class="'img' + (idx + 1)" :src="url" alt="gallery-img"
        @click.stop="setEditable(info.imgs.type, 'imgs')" />
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
  methods: {
    setEditable(type, key, idx = null) {
      const el = { type, key, idx }
      const cmp = JSON.parse(JSON.stringify(this.cmp))

      this.$emit('picked', { cmp, el })

      // eventBus.emit('open-edit')
      // this.$store.commit({ type: 'setElToEdit', el })
      // this.$store.commit({ type: 'setCmpToEdit', cmp })

      // emit to open side-editor => txt-editor => style => cmp[key].style || cmp[key][idx].style = style
    },
  },
  computed: {
    info() {
      return this.cmp.info
    },
  },
}
</script>
