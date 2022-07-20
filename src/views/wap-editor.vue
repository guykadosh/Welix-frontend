<template>
    <section class="wap-editor flex flex-column">
        <editor-header />
        <editor-nav />
        <section class="editor-main flex">
            <editor-tool-bar v-if="wap" :cmps="wap.cmps" />
            <wap-preview :cmps="wap.cmps" v-if="wap"/>
        </section>
    </section>
</template>

<script>
import { wapService } from '../services/wap.service.js'
import editorHeader from '../cmps/editor/editor-header.vue'
import editorNav from '../cmps/editor/editor-nav.vue'
import editorToolBar from '../cmps/editor/editor-tool-bar.vue'
import wapPreview from '../cmps/editor/wap-preview.vue'
import wapGallery from '../cmps/waps/wap-gallery.vue'
import wapList from '../cmps/waps/wap-list.vue'
import wapNav from '../cmps/waps/wap-nav.vue'
import wapText from '../cmps/waps/wap-text.vue'
import wapReview from '../cmps/waps/wap-review.vue'
import wapFooter from '../cmps/waps/wap-footer.vue'
import wapCard from '../cmps/waps/wap-card.vue'
import wapContainer from '../cmps/waps/wap-container.vue'

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
        editorNav,
        editorToolBar,
        wapPreview,
        wapGallery,
        wapList,
        wapNav,
        wapText,
        wapReview,
        wapFooter,
        wapCard,
        wapContainer
    },
}
</script>

<style>
</style>