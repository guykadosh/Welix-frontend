<template>
    <div class="edit-tool-bar flex">
        <editorToolBarNav @openEditor="openEditor"/>
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
import editorToolBarNav from './editor-tool-bar-nav.vue'
export default {
    name: 'edit-tool-bar',
    props: {
        cmps: Array
    },
    data() {
        return {
            items: null,
            isEditor: false,
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
        openEditor() {
            console.log('open editor')
        },
    },
    computed: {
        isOpen() {
            
        }
    },
    created() {
        this.items = JSON.parse(JSON.stringify(this.cmps))
    },
    components: {
        Container,
        Draggable,
        editorToolBarNav

    },
}
</script>

<style>
</style>