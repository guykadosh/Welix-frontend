<template>
  <!-- <pre>{{ wap }}</pre> -->
  <section v-if="wap" class="wap-details">
    <component
      v-for="cmp in wap.cmps"
      :is="cmp.type"
      :cmp="cmp"
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
    wapContact
  },
  data() {
    return {
      wap: null,
    }
  },
  async created() {
    const { wapId } = this.$route.params
    const wap = await wapService.getById(wapId)
    console.log(wap)
    this.wap = wap
  },
}
</script>

