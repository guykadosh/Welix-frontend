<template>
    <section :class="cmp.classes">
        <h2 class="heading">{{ cmp.info.heading.txt }}</h2>
        <section class="form-container">
            <form @submit.prevent class="contact-form">
                <input class="contact-input" v-for="input in form.inputs" :type="input.type"
                    :placeholder="input.placeholder">
                <textarea class="contact-textarea" :placeholder="form.textarea.placeholder" />
                <div class="btn-container">
                    <button class="contact-submit" @click.prevent="">{{ form.btn.txt }}</button>
                </div>
            </form>
        </section>
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