<template>
  <section v-if="cmp" class="wap-list" :class="cmp.classes">
    <h3 class="heading">{{ info.heading.txt }}</h3>
    <ul
      contenteditable="true"
      :style="info.list.style"
      class="clean-list"
      @click="setEditable(info.list.type, 'list')"
    >
      <span v-if="info.listIcon">{{ info.listIcon }}</span>
      <li v-for="(txt, idx) in info.list.txt" :key="txt">
        <span
          contenteditable="true"
          :ref="'txt' + idx"
          @input="changeTxt('list', idx, 'txt' + idx)"
          >{{ txt }}</span
        >
      </li>
    </ul>
    <a v-if="info.link" :href="info.link.link">{{ info.link.txt }}</a>
  </section>
</template>
<script>
import { eventBus } from '../../services/event-bus.service'

export default {
  name: 'wap-list-edit',
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
    changeTxt(ref, idx = null, itemRef) {
      if (idx === null) {
        this.cmpToEdit.info[ref].txt = this.$refs[ref].innerText
      } else {
        this.cmpToEdit.info[ref].txt[idx].txt =
          this.$refs[itemRef].txt[0].innerText
      }

      const newCmp = JSON.parse(JSON.stringify(this.cmpToEdit))
      this.$store.commit({ type: 'updateCmp', newCmp })
    },
    setEditable(type, key, idx = null) {
      console.log(type, key)
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
