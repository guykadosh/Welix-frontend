<template>
  <section v-if="wap" class="wap-details" :class="wapClass">
    <component
      v-for="cmp in wap.cmps"
      :is="cmp.type"
      :cmp="cmp"
      :wap="wap"
      :key="cmp.id"
    ></component>
  </section>
</template>
<script>
import { wapService } from '../services/wap.service'
import wapHeader from '../cmps/waps/wap-header.vue'
import wapHero from '../cmps/waps/wap-hero.vue'
import wapGallery from '../cmps/waps/wap-gallery.vue'
import wapList from '../cmps/waps/wap-list.vue'
import wapCard from '../cmps/waps/wap-card.vue'
import wapContainer from '../cmps/waps/wap-container.vue'
import wapReview from '../cmps/waps/wap-review.vue'
import wapText from '../cmps/waps/wap-text.vue'
import wapFooter from '../cmps/waps/wap-footer.vue'
import wapContact from '../cmps/waps/wap-contact.vue'
import wapMap from '../cmps/waps/wap-map.vue'

export default {
  name: 'wap-details',
  components: {
    wapHeader,
    wapHero,
    wapGallery,
    wapList,
    wapCard,
    wapContainer,
    wapReview,
    wapText,
    wapFooter,
    wapContact,
    wapMap,
  },
  data() {
    return {
      wap: null,
    }
  },
  async created() {
    const { wapId } = this.$route.params
    const wap = await wapService.getById(wapId)

    this.wap = wap
    console.log(wap)
    const wapName = wap.name.replaceAll(' ', '-')

    // history.replaceState({}, null, wapName)
  },
  computed: {
    wapClass() {
      return this.wap?.class || ''
    },
  },
}
</script>
