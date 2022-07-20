<template>
    <h1>wap-editor</h1>
    <pre>{{ wap }}</pre>
</template>

<script>
import { wapService } from '../services/wap.service.js'
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

    },
}
</script>

<style>
</style>