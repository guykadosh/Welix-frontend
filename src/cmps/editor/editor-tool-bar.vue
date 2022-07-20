<template>
    <div class="edit-tool-bar flex">

        <ul class="tool-bar-nav">
            <li>Elements</li>
            <li>Sections</li>
            <li>Editor</li>
        </ul>

        <section class="tools">
            <div class="cmp-preview" v-for="cmp in cmps">
                <span>{{ cmp.type }}</span>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'edit-tool-bar',
    props: {
        cmps: Array
    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    },
    created() {

    },
    components: {

    },
}
</script>

<style>
</style>