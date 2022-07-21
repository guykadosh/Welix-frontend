<template>
    <section :class="cmp.classes">
        <h2 class="heading">{{ cmp.info.heading }}</h2>
        <input class="contact-input" v-for="input in form.inputs" :type="input.type"
            :placeholder="input.placeholder">
        <textarea class="contact-textarea" :placeholder="form.textarea.placeholder" />
        <button class="contact-submit" @click.prevent="">{{form.btn.txt}}</button>
    </section>
</template>

<script>
export default {
    name: '',
    props: {
        cmp: Object
    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
        form() {
            return this.cmp.info.form
        }
    },
    created() {

    },
    components: {

    },
}
</script>

<style>
</style>