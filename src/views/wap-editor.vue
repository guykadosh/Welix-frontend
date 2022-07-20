<template>
    <editor-header />
    <editor-nav />
</template>

<script>
import { wapService } from '../services/wap.service.js'
import editorHeader from '../cmps/editor/editor-header.vue'
import editorNav from '../cmps/editor/editor-nav.vue'
export default {
    name: 'wap-editor',
    data() {
        return {
            wap: null,
        }
    },
    methods: {

    },
    computed: {

    },
    async created() {
        const { wapId } = this.$route.params
        try { this.wap = await wapService.getById(wapId) }
        catch (err) { console.log(err) }
    },
    components: {
        editorHeader,
        editorNav
    },
}
</script>

<style>
</style>