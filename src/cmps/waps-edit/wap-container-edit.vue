<template>
  <section
    :style="cmp.style"
    :class="[...cmp.classes, selected]"
    v-click-outside="unselect"
    @click="setEditable('cmp')"
  >
    <!-- <Container
      :get-child-payload="getChildPayload"
      group-name="2"
      @drop="onDrop($event)"
      :tag="{ value: 'div', props: { class: cmp.classes } }"
      :auto-scroll-enabled="true"
    > -->
    <!-- <Draggable v-for="item in items" :key="item.id"> -->

    <div class="wap-container__inner">
      <component
        v-for="cmp in cmp.info.cmps"
        :key="cmp.id"
        :is="cmp.type + '-edit'"
        :cmp="cmp"
        @picked="emitPicked"
      ></component>
    </div>
    <!-- </Draggable>
    </Container> -->
  </section>
</template>

<script>
import { Container, Draggable } from 'vue3-smooth-dnd'
import { applyDrag } from '@/services/dnd.utils/helpers.js'
import { eventBus } from '../../services/event-bus.service'
import wapCardEdit from './wap-card-edit.vue'
import wapListEdit from './wap-list-edit.vue'
import wapReviewEdit from './wap-review-edit.vue'
import wapTextEdit from './wap-text-edit.vue'
import wapMapEdit from './wap-map-edit.vue'
import wapContactEdit from './wap-contact-edit.vue'
import wapGalleryEdit from './wap-gallery-edit.vue'
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
    wapMapEdit,
    wapContactEdit,
    wapGalleryEdit,
  },
  data() {
    return {
      items: null,
      isSelected: false,
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
    setEditable(type, key, idx = null) {
      if (type === 'cmp') this.isSelected = true
      const el = { type, key, idx }
      const cmp = JSON.parse(JSON.stringify(this.cmp))

      this.$emit('picked', { cmp, el })
      // eventBus.emit('open-edit')
      // this.$store.commit({ type: 'setElToEdit', el })
      // this.$store.commit({ type: 'setCmpToEdit', cmp })

      // emit to open side-editor => txt-editor => style => cmp[key].style || cmp[key][idx].style = style
    },
    emitPicked(ev) {
      this.$emit('picked', ev)
    },
    unselect() {
      this.isSelected = false
    },
  },
  computed: {
    info() {
      return this.cmp.info
    },
    selected() {
      return { selected: this.isSelected }
    },
  },
}
</script>
