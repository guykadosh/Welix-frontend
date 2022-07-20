<template>
    <section v-if="cmp" class="wap-text" 
    :class="cmp.classes">
    <p>{{info.heading}}</p>
    <h2>{{info.subHeading}}</h2>
    </section>
</template>
<script>
export default {
    name: 'wap-text',
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
