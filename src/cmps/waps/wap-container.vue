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
import wapReview from './wap-review.vue'
import wapText from './wap-text.vue'

export default {
    name: 'wap-container',
    props: {
        cmp: Object
    },
    components: {
        wapCard,
        wapList,
        wapReview,
        wapText,
    },
    computed: {
        info() {
            return this.cmp.info
        }
    },
}
</script>
