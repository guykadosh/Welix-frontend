<template>
    <section v-if="cmp" class="wap-list" :class="cmp.classes">
        <h3>{{ info.heading }}</h3>
        <ul>
            <span>{{ info.listIcon }}</span>
            <li v-for="li in info.list" :key="li">
                {{ li }}
            </li>
        </ul>
        <a :href="info.link.href">{{ info.link.title }}</a>
    </section>
</template>
<script>
export default {
    name: 'wap-list',
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
