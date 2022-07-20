<template>
    <section :class="cmp.classes">

        <component v-for="currCmp in info.cmps" :key="currCmp.id" :is="currCmp.type" 
        :cmp="currCmp">
        </component>
    </section>
</template>

<script>
import wapCard from './wap-card.vue'
import wapList from './wap-list.vue'
export default {
    name: 'wap-container',
    props: {
        cmp: Object
    },
    components: {
        wapCard,
        wapList,
    },
    computed: {
        info() {
            return this.cmp.info
        }
    },
}
</script>
