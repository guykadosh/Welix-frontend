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
  },
  computed: {
    info() {
      return this.cmp.info
    },
  },
}
</script>
