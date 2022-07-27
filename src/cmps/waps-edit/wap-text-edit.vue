<template>
  <section v-if="cmp" class="wap-text" :style="cmp.style" :class="[...cmp.classes, selected]" v-click-outside="unselect"
    @click="setEditable('cmp')">
    <section class="__inner">
      <span class="tag" v-if="info.tag" :style="info.tag.style" ref="tag"
        @click.stop="setEditable(info.tag.type, 'tag')" @input="changeTxt('tag')" @mousedown.stop>{{ info.tag.txt
        }}</span>
      <h2 contenteditable="true" class="text1" :style="info.heading.style" ref="heading"
        @click.stop="setEditable(info.heading.type, 'heading')" @input="changeTxt('heading')" @mousedown.stop>
        {{ info.heading.txt }}
      </h2>
      <h2 v-if="info.subHeading" contenteditable="true" class="text2" ref="subHeading" :style="info.subHeading.style"
        @click.stop="setEditable(info.subHeading.type, 'subHeading')" @input="changeTxt('subHeading')" @mousedown.stop>
        {{ info.subHeading.txt }}
      </h2>
    </section>
  </section>
</template>
<script>
import { isGloballyWhitelisted } from '@vue/shared'
import { eventBus } from '../../services/event-bus.service'

export default {
  name: 'wap-text-edit',
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
    changeTxt(ref) {
      const cmpToEdit = this.$store.getters.cmpToEdit || this.cmpToEdit
      const newCmp = JSON.parse(JSON.stringify(cmpToEdit))

      newCmp.info[ref].txt = this.$refs[ref].innerText

      this.$emit('changedTxt', newCmp)
      // this.$store.commit({ type: 'setCmpToEdit', cmp: newCmp })
      // this.$store.commit({ type: 'updateCmp', newCmp })
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
