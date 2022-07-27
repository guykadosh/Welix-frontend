<template>
  <section
    :class="[...cmp.classes, selected]"
    v-click-outside="unselect"
    @click.stop="setEditable('cmp')"
    :style="cmp.style"
  >
    <h2
      @mousedown.stop
      class="heading"
      contenteditable="true"
      @click="setEditable(cmp.info.heading.type, 'heading')"
      @input="changeTxt('heading')"
      ref="heading"
      v-if="cmp.info.heading"
    >
      {{ cmp.info.heading.txt }}
    </h2>
    <section class="form-container">
      <form @submit.prevent class="contact-form">
        <input
          class="contact-input"
          v-for="(input, idx) in form.inputs"
          type="text"
          ref="inputs"
          @input="changePlacehoder(idx)"
          :placeholder="input.placeholder"
          contenteditable="true"
        />
        <textarea
          class="contact-textarea"
          ref="textarea"
          :placeholder="form.textarea.placeholder"
          contenteditable="true"
          @input="changePlacehoder(idx, 'textarea')"
          @click="setEditable('txt', 'textarea')"
        />
        <div class="btn-container">
          <button
            @mousedown.stop
            class="contact-submit"
            @click.prevent=""
            contenteditable="true"
            @click.stop="setEditable(form.btn.type, 'btn')"
            ref="btn"
            @input="changeTxt('btn')"
          >
            {{ form.btn.txt }}
          </button>
        </div>
      </form>
    </section>
  </section>
</template>

<script>
export default {
  name: '',
  props: {
    cmp: Object,
  },
  data() {
    return {
      isSelected: false,
    }
  },
  methods: {
    async changeTxt(ref) {
      console.log(this.$refs)
      const cmpToEdit = this.$store.getters.cmpToEdit || this.cmpToEdit
      const newCmp = JSON.parse(JSON.stringify(cmpToEdit))
      if (ref === 'btn') newCmp.info.form.btn.txt = this.$refs[ref].innerText
      else newCmp.info[ref].txt = this.$refs[ref].innerText
      this.$emit('changedTxt', newCmp)
    },
    async setEditable(type, key, idx = null) {
      if (type === 'cmp') this.isSelected = true
      const el = { type, key, idx }
      const cmp = JSON.parse(JSON.stringify(this.cmp))

      this.$emit('picked', { cmp, el })

      // emit to open side-editor => txt-editor => style => cmp[key].style || cmp[key][idx].style = style
    },
    async changePlacehoder(idx, type) {
      const cmpToEdit = this.$store.getters.cmpToEdit || this.cmpToEdit
      const newCmp = JSON.parse(JSON.stringify(cmpToEdit))
      if (!type) {
        // debugger
        newCmp.info.form.inputs[idx].placeholder =
          this.$refs.inputs[idx].placeholder
      } else {
        newCmp.info.form[type].placeholder = this.$refs[type].placeholder
        // console.log(this.$refs)
      }
      this.$emit('changedTxt', newCmp)
    },
    unselect() {
      this.isSelected = false
    },
  },
  computed: {
    form() {
      return this.cmp.info.form
    },
    selected() {
      return { selected: this.isSelected }
    },
  },
  created() {},
  components: {},
}
</script>

<style></style>
