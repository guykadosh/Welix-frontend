<template>
    <main class="wap-preview">
        <Container :get-child-payload="getChildPayload" group-name="1" @drop="onDrop($event)">
            <Draggable v-for="cmp in cmps" :key="cmp.id">
                <component :is="cmp.type" :cmp="cmp"/>
            </Draggable>
        </Container>
    </main>
</template>

<script>
import { Container, Draggable } from 'vue3-smooth-dnd'
import { applyDrag } from '@/services/dnd.utils/helpers.js'
import wapHeader from '../waps/wap-header.vue'
import wapHero from '../waps/wap-hero.vue'

export default {
    name: '',
    props: {
        cmps: Array
    },
    data() {
        return {
            items: []
        }
    },
    methods: {
        onDrop(dropRes) {
            this.items = applyDrag(this.items, dropRes)
            console.log('items', this.items)
        },
        getChildPayload(idx) {
            return this.items[idx]
        },
    },
    computed: {

    },
    created() {

    },
    components: {
        Container,
        Draggable,
        wapHeader,
        wapHero
    },
}
</script>

<style>
</style>