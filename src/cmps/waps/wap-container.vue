<template>
    <section :class="cmp.classes">

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
