<template>
  <main
    class="editor-wap-container"
    :class="responsiveClass"
    ref="container"
    :style="{ maxWidth: conMaxWidth + 'px' }"
  >
    <div class="wap-to-edit" :style="wap.style">
      <Container
        :get-child-payload="getChildPayload"
        group-name="1"
        @drop="onDrop($event)"
      >
        <Draggable v-for="cmp in wap.cmps" :key="cmp.id">
          <component
            :is="cmp.type + '-edit'"
            :cmp="cmp"
            @changedTxt="changeTxt"
            @updatedCmp="updateCmp"
          />
        </Draggable>
      </Container>
    </div>
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
import wapContactEdit from '../waps-edit/wap-contact-edit.vue'
import wapMapEdit from '../waps-edit/wap-map-edit.vue'
import { eventBus } from '../../services/event-bus.service'

export default {
  name: '',
  props: {
    wap: Object,
  },
  data() {
    return {
      conMaxWidth: 1300,
      responsiveClass: '',
    }
  },
  // directives: {
  //   responsive: ResponsiveDirective,
  // },
  watch: {},
  methods: {
    onDrop(dropRes) {
      let cmps = JSON.parse(JSON.stringify(this.wap.cmps))
      cmps = applyDrag(cmps, dropRes)
      this.$store.commit({ type: 'updateCmps', cmps })
    },
    getChildPayload(idx) {
      return this.wap.cmps[idx]
    },
    resized() {
      if (!this.$refs.container) return
      const { offsetWidth } = this.$refs.container
      if (offsetWidth < 700) this.responsiveClass = ''
      if (offsetWidth >= 700) this.responsiveClass = 'small'
      if (offsetWidth >= 840) this.responsiveClass = 'small medium'
      if (offsetWidth >= 1024) this.responsiveClass = 'small medium narrow'
      if (offsetWidth >= 1300)
        this.responsiveClass = 'small medium narrow normal'
      if (offsetWidth >= 1360)
        this.responsiveClass = 'small medium narrow normal wide'
    },
    resize(size) {
      this.conMaxWidth = size
    },
    changeTxt() {},
    updateCmp() {},
  },
  computed: {},
  created() {
    eventBus.on('resized', this.resize)
  },
  mounted() {
    new ResizeObserver(this.resized).observe(this.$refs.container)
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
    wapContactEdit,
    wapMapEdit,
  },
}
</script>

<style></style>
