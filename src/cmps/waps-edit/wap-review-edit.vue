<template>
  <section
    v-if="cmp"
    class="wap-review"
    :style="cmp.style"
    :class="[...cmp.classes, selected]"
    v-click-outside="unselect"
    @click="setEditable('cmp')"
  >
    <div class="wap-review__inner">
      <img
        v-if="info.img"
        :src="info.img.url"
        @click="setEditable(info.img.type, 'img')"
        alt="img-review"
        contenteditable="true"
      />
      <div class="wap-review-texts">
        <p
          v-if="info.text"
          class="wap-review-text"
          ref="text"
          :style="info.text.style"
          contenteditable="true"
          @click="setEditable(info.text.type, 'text')"
          @input="changeTxt('text')"
          @mousedown.stop
        >
          {{ info.text.txt }}
        </p>
        <p
          v-if="info.author"
          class="wap-review-author"
          ref="author"
          :style="info.author.style"
          contenteditable="true"
          @click="setEditable(info.author.type, 'author')"
          @input="changeTxt('author')"
          @mousedown.stop
        >
          {{ info.author.txt }}
        </p>
        <p
          v-if="info.role"
          class="wap-review-description"
          :style="info.role.style"
          contenteditable="true"
          @click="setEditable(info.role.type, 'role')"
          @input="changeTxt('role')"
          @mousedown.stop
        >
          {{ info.role.txt }}
        </p>
      </div>
    </div>
  </section>
</template>
<script>
import { eventBus } from '../../services/event-bus.service'

export default {
  name: 'wap-review-edit',
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
      // eventBus.emit('open-edit')
      // this.$store.commit({ type: 'setElToEdit', el })
      // this.$store.commit({ type: 'setCmpToEdit', cmp })

      // emit to open side-editor => txt-editor => style => cmp[key].style || cmp[key][idx].style = style
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
