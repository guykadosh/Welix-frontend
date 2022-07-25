<template>
  <section
    v-if="cmp"
    class="wap-hero"
    :style="cmp.style"
    :class="cmp.classes"
    @click.stop="setEditable('cmp')"
  >
    <div class="hero-inner">
      <div class="text-box">
        <h1
          @mousedown.stop
          v-if="info.heading"
          @click.stop="setEditable(info.heading.type, 'heading')"
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
          @click.stop="setEditable(info.subHeading.type, 'subHeading')"
          @input="changeTxt('subHeading')"
        >
          {{ info.subHeading.txt }}
        </h2>
        <div class="imgs-hero">
          <div v-if="info.imgs" v-for="url in info.imgs.urls" :key="url">
            <img
              :src="url"
              alt="gallery-img"
              @click.stop="setEditable(info.imgs.type, 'imgs')"
            />
          </div>
        </div>

        <div class="btns" v-if="info.btns">
          <a
            @mousedown.stop
            v-for="(btn, idx) in info.btns"
            :class="'btn' + (idx + 1)"
            :href="btn.link"
            :style="btn.style"
            @click.stop="setEditable(btn.type, 'btns', idx)"
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
        @click.stop="setEditable(info.img.type, 'img')"
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
    async changeTxt(ref) {
      const cmpToEdit = this.$store.getters.cmpToEdit || this.cmpToEdit
      const newCmp = JSON.parse(JSON.stringify(cmpToEdit))
      newCmp.info[ref].txt = this.$refs[ref].innerText

      this.$emit('changedTxt', newCmp)
    },
    async setEditable(type, key, idx = null) {
      const el = { type, key, idx }
      const cmp = JSON.parse(JSON.stringify(this.cmp))

      this.$emit('picked', { cmp, el })

      // emit to open side-editor => txt-editor => style => cmp[key].style || cmp[key][idx].style = style
    },
    setCmpEditable() {},
  },
  created() {
    this.cmpToEdit = JSON.parse(JSON.stringify(this.cmp))
  },
}
</script>
<style></style>
