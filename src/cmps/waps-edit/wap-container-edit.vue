<template>
  <section class="full main-layout" :style="cmp.style">
    <Container
      :get-child-payload="getChildPayload"
      group-name="2"
      @drop="onDrop($event)"
      :tag="{ value: 'div', props: { class: cmp.classes } }"
      :auto-scroll-enabled="true"
    >
      <Draggable v-for="item in items" :key="item.id">
        <component :is="item.type + '-edit'" :cmp="item"> </component>
      </Draggable>
    </Container>
  </section>
</template>

<script>
import { Container, Draggable } from 'vue3-smooth-dnd'
import { applyDrag } from '@/services/dnd.utils/helpers.js'
import wapCardEdit from './wap-card-edit.vue'
import wapListEdit from './wap-list-edit.vue'
import wapReviewEdit from './wap-review-edit.vue'
import wapTextEdit from './wap-text-edit.vue'

export default {
  name: 'wap-container-edit',
  props: {
    cmp: Object,
  },
  components: {
    Container,
    Draggable,
    wapCardEdit,
    wapListEdit,
    wapReviewEdit,
    wapTextEdit,
  },
  data() {
    return {
      items: null,
    }
  },
  created() {
    this.items = JSON.parse(JSON.stringify(this.info.cmps))
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
    info() {
      return this.cmp.info
    },
  },
}
</script>
