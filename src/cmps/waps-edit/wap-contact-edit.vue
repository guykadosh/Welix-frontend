<template>
  <section :class="cmp.classes" :style="cmp.style">
    <h2 class="heading" contenteditable="true">{{ cmp.info.heading.txt }}</h2>
    <section class="form-container">
      <form @submit.prevent class="contact-form">
        <input
          class="contact-input"
          v-for="input in form.inputs"
          :type="input.type"
          :placeholder="input.placeholder"
          disabled
          contenteditable="true"
        />
        <textarea
          class="contact-textarea"
          :placeholder="form.textarea.placeholder"
        />
        <button
          class="contact-submit"
          @click.prevent=""
          disabled
          contenteditable="true"
        >
          {{ form.btn.txt }}
        </button>
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
    return {}
  },
  methods: {},
  computed: {
    form() {
      return this.cmp.info.form
    },
  },
  created() {},
  components: {},
}
</script>

<style></style>
