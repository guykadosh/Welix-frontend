<template>
  <section v-if="cmp" class="wap-hero" :style="cmp.style" :class="cmp.classes">
    <div class="hero-inner">
      <div class="text-box">
        <h1
        @mousedown.stop
          v-if="info.heading"
          @click="setEditable(info.heading.type, 'heading')"
          contenteditable="true"
          ref="heading"
          @input="changeTxt('heading')"
          class="heading"
          :style="info.heading.style"
        >
          {{ info.heading.txt }}
        </h1>
        <h2
        @mousedown.stop
          v-if="info.subHeading"
          contenteditable="true"
          class="sub-heading"
          ref="subHeading"
          :style="info.subHeading.style"
          @click="setEditable(info.subHeading.type, 'subHeading')"
          @input="changeTxt('subHeading')"
        >
          {{ info.subHeading.txt }}
        </h2>
        <div class="btns" v-if="info.btns">
          <a
          @mousedown.stop
            v-for="(btn, idx) in info.btns"
            :class="'btn' + (idx + 1)"
            :href="btn.link"
            :style="btn.style"
            @click="setEditable(btn.type, 'btns', idx)"
            contenteditable="true"
          >
            {{ btn.txt }}</a
          >
        </div>
      </div>
      <img
        contenteditable="true"
        v-if="info.img"
        :src="info.img.url"
        @click="setEditable(info.img.type, 'img')"
      />
    </div>
  </section>
</template>
<script>
import { eventBus } from '../../services/event-bus.service'

export default {
  name: 'wap-hero-edit',
  props: {
    cmp: Object,
  },
  mounted() {},
  watch: {},
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
    changeTxt(ref) {
      this.cmpToEdit.info[ref].txt = this.$refs[ref].innerText
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
  created() {
    this.cmpToEdit = JSON.parse(JSON.stringify(this.cmp))
  },
}
</script>
<style></style>
