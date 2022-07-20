<template>
    <section v-if="cmp" class="wap-gallery" :class="cmp.classes">
        <h3>{{ info.title }}</h3>
        <div v-for="img in info.imgs">
            <img :src="img" alt="gallery-img">
        </div>
    </section>
</template>
<script>


export default {
    name: 'wap-gallery',
    props: {
        cmp: Object
    },
    computed: {
        info() {
            return this.cmp.info
        }
    }
}
</script>
