<template>
  <main class="wap-preview">
    <Container
      :get-child-payload="getChildPayload"
      group-name="1"
      @drop="onDrop($event)"
    >
      <Draggable v-for="item in items" :key="item.id">
        <component :is="item.type + '-edit'" :cmp="item" />
      </Draggable>
    </Container>
  </main>
</template>

<script>
import { Container, Draggable } from 'vue3-smooth-dnd'
import { applyDrag } from '@/services/dnd.utils/helpers.js'
import wapHeaderEdit from '../waps-edit/wap-header-edit.vue'
import wapHeroEdit from '../waps-edit/wap-hero-edit.vue'
import wapGalleryEdit from '../waps-edit/wap-gallery-edit.vue'
import wapListEdit from '../waps-edit/wap-list-edit.vue'
import wapCardEdit from '../waps-edit/wap-card-edit.vue'
import wapContainerEdit from '../waps-edit/wap-container-edit.vue'
import wapFooterEdit from '../waps-edit/wap-footer-edit.vue'
import wapReviewEdit from '../waps-edit/wap-review-edit.vue'
import wapTextEdit from '../waps-edit/wap-text-edit.vue'

export default {
  name: '',
  props: {
    cmps: Array,
  },
  data() {
    return {
      items: [],
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
  computed: {},
  created() {
    this.items = JSON.parse(JSON.stringify(this.cmps))
  },
  components: {
    Container,
    Draggable,
    wapHeaderEdit,
    wapHeroEdit,
    wapGalleryEdit,
    wapListEdit,
    wapCardEdit,
    wapContainerEdit,
    wapFooterEdit,
    wapTextEdit,
    wapReviewEdit,
  },
}
</script>

<style></style>
