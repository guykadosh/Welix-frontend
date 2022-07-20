<template>
    <div class="edit-tool-bar flex">

        <ul class="tool-bar-nav">
            <li>Elements</li>
            <li>Sections</li>
            <li>Editor</li>
        </ul>

        <section class="tools">
            <Container :get-child-payload="getChildPayload" group-name="1" @drop="onDrop($event)" behaviour="copy">
                <Draggable v-for="item in items" :key="item.id">
                    <div class="cmp-preview" @click="addWapCmp(item.id)">
                        <span>{{ item.type }}</span>
                    </div>
                </Draggable>
            </Container>
        </section>
    </div>
</template>

<script>
import { Container, Draggable } from 'vue3-smooth-dnd'
import { applyDrag } from '@/services/dnd.utils/helpers.js'
export default {
    name: 'edit-tool-bar',
    props: {
        cmps: Array
    },
    data() {
        return {
            items: null,
        }
    },
    methods: {
        addWapCmp(cmpId) {
            console.log('add cmp', cmpId)
        },
        onDrop(dropRes) {
            this.items = applyDrag(this.items, dropRes)
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
    },
}
</script>

<style>
</style>