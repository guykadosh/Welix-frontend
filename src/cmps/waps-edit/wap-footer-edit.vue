<template>
  <section v-if="cmp" class="wap-footer" :class="cmp.classes" :style="cmp.style">
    <div class="footer-inner">
      <div v-if="info.logoImg" class="logo-box" :style="info.logoImg.style">
        <img class="logo" :src="info.logoImg.url" contenteditable="true"
          @click.stop="setEditable(info.logoImg.type, 'img')" />
      </div>
      <div @mousedown.stop v-else v-if="info.logoTxt">
        <h2 contenteditable="true" @click.stop="setEditable(info.logoTxt.type, 'logoTxt')" ref="heading"
          @input="changeTxt('heading')">
          {{ info.logoTxt.txt }}</h2>
      </div>
      <div class="row">
        <h3 contenteditable="true" @mousedown.stop @click.stop="setEditable(info.row1.type, 'row1')"
          @input="changeTxt('row1')" ref="row1" :style="info.row1.style">
          {{ info.row1.txt }}
        </h3>
        <div class="flex flex-column"></div>
        <p @mousedown.stop class="txt2" v-for="text in info.row1.texts" contenteditable="true">
          {{ text }}
        </p>
      </div>
      <div class="row">
        <h3 contenteditable="true" @mousedown.stop @click.stop="setEditable(info.row.type, 'row2')"
        @input="changeTxt('row2')" ref="row2">
          {{ info.row2.txt }}</h3>
        <div class="flex flex-column"></div>
        <p contenteditable="true" @mousedown.stop v-for="text in info.row2.texts">
          {{ text }}
        </p>
      </div>
    </div>

    <p contenteditable="true" @mousedown.stop class="coffee"
      @click.stop="setEditable(info.copyright.type, 'copyright')">
      {{ info.copyright.txt }}
    </p>
  </section>
</template>
<script>
import { eventBus } from '@/services/event-bus.service'
export default {
  name: 'wap-footer-edit',
  props: {
    cmp: Object,
  },
  data() {
    return {
      newInfo: {
        heading: '',
      },
      cmpToEdit: null,
    }
  },
  computed: {
    info() {
      return this.cmp.info
    },
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
      const el = { type, key, idx }
      const cmp = JSON.parse(JSON.stringify(this.cmp))

      this.$emit('picked', { cmp, el })
      // eventBus.emit('open-edit')
    },
    setCmpEditable() { },
  },
  created() {
    this.cmpToEdit = JSON.parse(JSON.stringify(this.cmp))
  },
}
</script>
