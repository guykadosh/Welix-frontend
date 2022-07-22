<template>
  <main class="editor-wap-container main-layout">
    <!-- <iframe
      v-if="loaded"
      :src="iframe.src"
      :style="iframe.style"
      :height="iframe.style.height"
      :width="iframe.style.width"
      type="application/pdf"
      frameborder="0"
    ></iframe> -->
    <div class="wap" ref="wap">
      <Container
        :get-child-payload="getChildPayload"
        group-name="1"
        @drop="onDrop($event)"
      >
        <Draggable v-for="cmp in wap.cmps" :key="cmp.id">
          <component :is="cmp.type + '-edit'" :cmp="cmp" />
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

export default {
  name: '',
  props: {
    wap: Object,
  },
  data() {
    return {
      iframe: {
        src: window.location.href,
        style: null,
        wrapperStyle: null,
      },
      loaded: false,
    }
  },
  methods: {
    onDrop(dropRes) {
      let cmps = JSON.parse(JSON.stringify(this.wap.cmps))
      cmps = applyDrag(cmps, dropRes)
      this.$store.commit({ type: 'updateCmps', cmps })
    },
    getChildPayload(idx) {
      return this.wap.cmps[idx]
    },
  },
  computed: {},
  mounted() {
    let wap = this.$refs.wap
    this.iframe.style = {
      position: 'absolute',
      width: window.innerWidth,
      height: window.innerHeight,
      top: -wap.offsetTop + 'px',
      left: -wap.offsetLeft + 'px',
    }
    this.iframe.wrapperStyle = {
      overflow: 'hidden',
      height: wap.clientHeight + 'px',
      width: wap.clientWidth + 'px',
    }
    this.loaded = true
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
  },
}
</script>

<style></style>
