<template>
  <header
    class="wap-header"
    :style="cmp.style"
    :class="[...cmp.classes, selected]"
    v-click-outside="unselect"
    @click="setEditable('cmp')"
  >
    <div class="wap-header__inner flex justify-between items-center">
      <div
        @mousedown.stop
        v-if="info.logoImg"
        class="logo-box"
        :style="info.logoImg.style"
        @click.stop="setEditable(info.logoImg.type, 'logoImg')"
      >
        <img contenteditable="true" class="logo" :src="info.logoImg.url" />
      </div>
      <div v-else>
        <h2
          @mousedown.stop
          :style="info.logoTxt.style"
          class="logo"
          contenteditable="true"
          ref="logoTxt"
          @input="changeTxt('logoTxt')"
          @click.stop="setEditable(info.logoTxt.type, 'logoTxt')"
        >
          {{ info.logoTxt.txt }}
        </h2>
      </div>
      <wap-nav-edit v-if="info.nav" :cmp="info.nav" @picked="emitPicked" />
    </div>
  </header>
</template>
<script>
import wapNavEdit from './wap-nav-edit.vue'
import { eventBus } from '../../services/event-bus.service'

export default {
  name: 'wap-header-edit',
  props: {
    cmp: Object,
  },
  methods: {
    select(element) {
      console.log('element', element)
    },
  },
  components: {
    wapNavEdit,
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

      // this.$store.commit({ type: 'updateCmp', newCmp })
    },
    setEditable(type, key, idx = null) {
      if (type === 'cmp') this.isSelected = true
      const el = { type, key, idx }
      const cmp = JSON.parse(JSON.stringify(this.cmp))

      this.$emit('picked', { cmp, el })

      // eventBus.emit('open-edit')
      // this.$store.commit({ type: 'setElToEdit', el })
      // this.$store.commit({ type: 'setCmpToEdit', cmp })

      // emit to open side-editor => txt-editor => style => cmp[key].style || cmp[key][idx].style = style
    },
    emitPicked(ev) {
      this.$emit('picked', ev)
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
<style lang=""></style>
