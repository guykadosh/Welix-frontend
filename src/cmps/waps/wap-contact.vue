<template>
  <section :class="cmp.classes" :style="cmp.style">
    <h2 class="heading">{{ cmp.info.heading.txt }}</h2>
    <h3 v-if="cmp.info.subHeading" class="sub-heading">
      {{ cmp.info.subHeading.txt }}
    </h3>
    <section class="form-container">
      <form @submit.prevent="addContact" class="contact-form">
        <input
          class="contact-input"
          v-for="(input, idx) in form.inputs"
          :type="input.type"
          :placeholder="input.placeholder"
          v-model="contact.inputs[idx].txt"
        />
        <textarea
          class="contact-textarea"
          :placeholder="form.textarea.placeholder"
          v-model="contact.text"
        />
        <div class="btn-container">
          <button class="contact-submit">
            {{ form.btn.txt }}
          </button>
        </div>
      </form>
    </section>
  </section>
</template>

<script>
import { notification } from 'ant-design-vue'
import { datePickerProps } from 'ant-design-vue/lib/date-picker/generatePicker/props'

export default {
  name: '',
  props: {
    cmp: Object,
    wap: Object,
  },
  data() {
    return {
      contact: {
        inputs: [
          { type: 'name', txt: '' },
          { type: 'email', txt: '' },
        ],
        text: '',
      },
    }
  },
  methods: {
    async addContact() {
      try {
        console.log('Hi?')
        console.log(this.wap)
        const wap = JSON.parse(JSON.stringify(this.wap))
        const contact = {
          key: this.contact.inputs[0].txt,
          name: this.contact.inputs[0].txt,
          email: this.contact.inputs[1].txt,
          msg: this.contact.text,
          at: Date.now(),
        }

        wap.usersData.contacts.push(contact)
        await this.$store.dispatch({ type: 'saveWap', wap })
        this.$router.push('/thank-you')
        // notification['success']({
        //   message: `Thank you! we will reach to you soon`,
        // })
      } catch (err) {
        console.log(err)
      }
    },
  },
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
