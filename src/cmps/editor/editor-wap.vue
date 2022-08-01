<template>
  <main
    v-if="wap"
    class="editor-wap-container"
    ref="container"
    :class="[responsiveClass, wrapper]"
    :style="{ maxWidth: conMaxWidth + 'px' }"
  >
    <div class="wap-to-edit" :style="wap.style" :class="wapClass">
      <Container
        :get-child-payload="getChildPayload"
        group-name="1"
        @drop="onDrop($event)"
        :style="{ touchActions: 'auto' }"
      >
        <div v-if="!wap.cmps.length" class="drag-here">
          <h2>+ Drag section here</h2>
        </div>
        <Draggable
          v-for="cmp in wap.cmps"
          :key="cmp.id"
          :style="{ touchActions: 'auto' }"
        >
          <component
            :is="cmp.type + '-edit'"
            :cmp="cmp"
            @changedTxt="debounceChangeTxt"
            @picked="setCmpToEdit"
          />
        </Draggable>
      </Container>
    </div>
  </main>
</template>

<script>
// Services
import { wapService } from '../../services/wap.service'
import { eventBus } from '../../services/event-bus.service'
import { debounce } from 'lodash'
// Libraries
import { Container, Draggable } from 'vue3-smooth-dnd'
// Cmps
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

export default {
  name: 'editor-wap',
  props: {
    wap: Object,
  },
  data() {
    return {
      conMaxWidth: 1700,
      responsiveClass: '',
      unsubResize: null,
    }
  },
  created() {
    this.unsubResize = eventBus.on('resized', this.resize)
    this.debounceChangeTxt = debounce(this.changeTxt, 500)
  },
  mounted() {
    new ResizeObserver(this.resized).observe(this.$refs.container)
  },
  methods: {
    async onDrop(dropRes) {
      try {
        let cmps = JSON.parse(JSON.stringify(this.wap.cmps))
        cmps = wapService.applyDrag(cmps, dropRes)
        await this.$store.dispatch({ type: 'updateCmps', cmps })
      } catch (err) {
        // notification['error']
      }
    },
    getChildPayload(idx) {
      return this.wap.cmps[idx]
    },
    resized() {
      if (!this.$refs.container) return
      const { offsetWidth } = this.$refs.container
      if (offsetWidth < 620) this.responsiveClass = 'mobile'
      if (offsetWidth >= 620) this.responsiveClass = this.small
      if (offsetWidth >= 860) this.responsiveClass = this.medium
      if (offsetWidth >= 1024) this.responsiveClass = this.narrow
      if (offsetWidth >= 1300) this.responsiveClass = this.normal
      if (offsetWidth >= 1500) this.responsiveClass = this.wide
    },
    resize(size) {
      this.conMaxWidth = size
    },
    async changeTxt(cmp) {
      try {
        this.$store.commit({ type: 'setCmpToEdit', cmp })
        await this.$store.dispatch({ type: 'updateCmp' })
      } catch (err) {
        console.log(err)
      }
    },
    setCmpToEdit({ el, cmp }) {
      eventBus.emit('open-edit')
      this.$store.commit({ type: 'setElToEdit', el })
      this.$store.commit({ type: 'setCmpToEdit', cmp })
    },
  },
  computed: {
    wrapper() {
      if (this.conMaxWidth === 420) return 'smartphone'
      if (this.conMaxWidth === 800) return 'tablet'
      return ''
    },
    small() {
      return ['small']
    },
    medium() {
      return [...this.small, 'medium']
    },
    narrow() {
      return [...this.medium, 'narrow']
    },
    normal() {
      return [...this.narrow, 'normal']
    },
    wide() {
      return [...this.normal, 'wide']
    },
    wapClass() {
      return this.wap?.class || ''
    },
  },
  unmounted() {
    this.unsubResize()
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

<style>
.smooth-dnd-disable-touch-action * {
  touch-action: auto;
}
</style>
