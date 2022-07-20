<template>
    <section v-if="cmp" class="wap-card" :class="cmp.classes">
        <h2 v-if="info.heading">{{ info.heading }}</h2>
        <p v-if="info.subHeading">{{ info.subHeading }}</p>
        <ul class="card-list">
            <li v-for="line in info.list" :key="line">
                {{line}}
            </li>
        </ul>
        <img :src="info.imgUrl" alt="card-img">

    </section>
</template>
<script>
export default {
    name: 'wap-card',
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
