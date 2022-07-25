<template>
  <section :style="cmp.style" :class="cmp.classes">
    <div class="wap-container__inner">
      <component
        v-for="currCmp in info.cmps"
        :key="currCmp.id"
        :is="currCmp.type"
        :cmp="currCmp"
      >
      </component>
    </div>
  </section>
</template>

<script>
import wapCard from './wap-card.vue'
import wapList from './wap-list.vue'
import wapReview from './wap-review.vue'
import wapText from './wap-text.vue'
import wapGallery from './wap-gallery.vue'
import wapMap from './wap-map.vue'

export default {
  name: 'wap-container',
  props: {
    cmp: Object,
  },
  components: {
    wapCard,
    wapList,
    wapReview,
    wapText,
    wapGallery,
    wapMap
  },
  computed: {
    info() {
      return this.cmp.info
    },
  },
}
</script>
