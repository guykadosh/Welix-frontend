<template>
    <section v-if="cmp" class="wap-review" 
    :class="cmp.classes">
        <img :src="info.imgUrl" alt="img-review">
        <h3>{{ info.heading }}</h3>
        <h5>{{ info.subHeading }}</h5>
    </section>
</template>
<script>
export default {
    name: 'wap-review',
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
