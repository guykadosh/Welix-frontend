<template>
  <section v-if="cmp" class="wap-text" :class="cmp.classes" :style="cmp.style">
    <span
      class="tag"
      v-if="info.tag"
      :style="info.tag.style"
      ref="tag"
      @click="setEditable(info.tag.type, 'tag')"
      @input="changeTxt('tag')"
      @mousedown.stop
      >{{ info.tag.txt }}</span
    >
    <h2
      contenteditable="true"
      class="text1"
      :style="info.heading.style"
      ref="heading"
      @click="setEditable(info.heading.type, 'heading')"
      @input="changeTxt('heading')"
      @mousedown.stop
    >
      {{ info.heading.txt }}
    </h2>
    <h2
      contenteditable="true"
      class="text2"
      ref="subHeading"
      :style="info.subHeading.style"
      @click="setEditable(info.subHeading.type, 'subHeading')"
      @input="changeTxt('subHeading')"
      @mousedown.stop
    >
      {{ info.subHeading.txt }}
    </h2>
  </section>
</template>
<script>
import { eventBus } from '../../services/event-bus.service'

export default {
  name: 'wap-text-edit',
  props: {
    cmp: Object,
  },
  data() {
    return {
      cmpToEdit: null,
    }
  },
  created() {
    this.cmpToEdit = JSON.parse(JSON.stringify(this.cmp))
  },
  methods: {
    changeTxt(ref) {
      const cmpToEdit = this.$store.getters.cmpToEdit || this.cmpToEdit
      const newCmp = JSON.parse(JSON.stringify(cmpToEdit))

      newCmp.info[ref].txt = this.$refs[ref].innerText

      this.$store.commit({ type: 'setCmpToEdit', cmp: newCmp })
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
