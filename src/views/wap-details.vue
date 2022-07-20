<template>
  <!-- <pre>{{ wap }}</pre> -->
  <section v-if="wap" class="wap-details main-layout">
    <component v-for="cmp in wap.cmps" :is="cmp.type" :cmp="cmp"></component>
    <!-- <wap-header :cmp="wap.cmps[0]" /> -->

    <!-- <component :is="wap.cmps[0].type" :cmp="wap.cmps[0]"></component> -->
  </section>
</template>
<script>
import { wapService } from '../services/wap.service'
import wapHeader from '../cmps/waps/wap-header.vue'
import wapHero from '../cmps/waps/wap-hero.vue'

export default {
  name: 'wap-details',
  components: { wapHeader, wapHero },
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
<style lang=""></style>
