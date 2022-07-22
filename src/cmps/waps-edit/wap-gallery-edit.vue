<template>
  <section v-if="cmp" class="wap-gallery" :class="cmp.classes">
    <h3 class="title">{{ info.txt }}</h3>
    <div class="imgs-container">
      <img
        v-for="url in info.imgs.urls"
        :key="url"
        :src="url"
        alt="gallery-img"
      />
    </div>
  </section>
</template>
<script>
export default {
  name: 'wap-gallery-edit',
  props: {
    cmp: Object,
  },
  methods: {
    setEditable(type, key, idx = null) {
      eventBus.emit('open-edit')
      const el = { type, key, idx }
      const cmp = JSON.parse(JSON.stringify(this.cmp))

      this.$store.commit({ type: 'setElToEdit', el })
      this.$store.commit({ type: 'setCmpToEdit', cmp })

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
