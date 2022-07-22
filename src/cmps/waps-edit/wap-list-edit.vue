<template>
  <section v-if="cmp" class="wap-list" :class="cmp.classes">
    <h3 class="heading">{{ info.heading.txt }}</h3>
    <ul class="clean-list">
      <span v-if="info.listIcon">{{ info.listIcon }}</span>
      <li v-for="txt in info.list.txt" :key="txt">
        <span>{{ txt }}</span>
      </li>
    </ul>
    <a v-if="info.link" :href="info.link.link">{{ info.link.txt }}</a>
  </section>
</template>
<script>
export default {
  name: 'wap-list-edit',
  props: {
    cmp: Object,
  },
  methods: {
    changeTxt(ref, idx = null, itemRef) {
      if (idx === null) {
        this.cmpToEdit.info[ref].txt = this.$refs[ref].innerText
      } else {
        this.cmpToEdit.info[ref][idx].txt = this.$refs[itemRef][0].innerText
      }

      const newCmp = JSON.parse(JSON.stringify(this.cmpToEdit))
      this.$store.commit({ type: 'updateCmp', newCmp })
    },
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
