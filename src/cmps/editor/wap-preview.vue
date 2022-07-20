<template>
    <main class="wap-preview">
        <Container :get-child-payload="getChildPayload" group-name="1" @drop="onDrop($event)">
            <Draggable v-for="item in items" :key="item.id">
                <component :is="item.type" :cmp="item" />
            </Draggable>
        </Container>
    </main>
</template>

<script>
import { Container, Draggable } from 'vue3-smooth-dnd'
import { applyDrag } from '@/services/dnd.utils/helpers.js'
import wapHeader from '../waps/wap-header.vue'
import wapHero from '../waps/wap-hero.vue'
import wapGallery from '../waps/wap-gallery.vue'
import wapList from '../waps/wap-list.vue'
import wapCard from '../waps/wap-card.vue'
import wapContainer from '../waps/wap-container.vue'

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
        this.items = JSON.parse(JSON.stringify(this.cmps))
    },
    components: {
        Container,
        Draggable,
        wapHeader,
        wapHero,
        wapGallery,
        wapList,
        wapCard,
        wapContainer
    },
}
</script>

<style>
</style>