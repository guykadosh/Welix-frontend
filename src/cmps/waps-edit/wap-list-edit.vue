<template>
  <section
    v-if="cmp"
    class="wap-list-cmp"
    :class="[...cmp.classes, selected]"
    v-click-outside="unselect"
    :style="cmp.style"
  >
    <h3 @mousedown.stop class="heading">{{ info.heading.txt }}</h3>
    <ul
      contenteditable="true"
      :style="info.list.style"
      class="clean-list"
      @click="setEditable(info.list.type, 'list')"
    >
      <span v-if="info.listIcon">{{ info.listIcon }}</span>
      <li @mousedown.stop v-for="(txt, idx) in info.list.txt" :key="txt">
        <span
          @mousedown.stop
          contenteditable="true"
          :ref="'txt' + idx"
          @input="changeTxt('list', idx, 'txt' + idx)"
          >{{ txt }}</span
        >
      </li>
    </ul>
    <a @mousedown.stop v-if="info.link" :href="info.link.link">{{
      info.link.txt
    }}</a>
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
      isSelected: false,
    }
  },
  created() {
    this.cmpToEdit = JSON.parse(JSON.stringify(this.cmp))
  },
  methods: {
    changeTxt(ref, idx = null, itemRef) {
      const cmpToEdit = this.$store.getters.cmpToEdit || this.cmpToEdit
      const newCmp = JSON.parse(JSON.stringify(cmpToEdit))

      if (idx === null) {
        newCmp.info[ref].txt = this.$refs[ref].innerText
      } else {
        newCmp.info[ref].txt[idx].txt = this.$refs[itemRef].txt[0].innerText
      }

      this.$emit('changedTxt', newCmp)
    },
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
}
</script>
