<template>
    <section :class="cmp.classes">
        <component v-for="currCmp in cmp.cmps" :is="currCmp.type" 
        :cmp="currCmp"></component>
    </section>
</template>

<script>
export default {
    name: 'wap-container',
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
