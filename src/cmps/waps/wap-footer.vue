<template>
    <section v-if="cmp" class="wap-footer" 
    :class="cmp.classes">
    <p>{{info.adress}}</p>
    <p>{{info.contact}}</p>
    <p>{{info.hours}}</p>
    <p>{{info.copyright}}</p>
    </section>
</template>
<script>
export default {
    name: 'wap-footer',
    props: {
        cmp: Object,
    },
    computed: {
        info() {
            return this.cmp.info
        },
    },
}
</script>
