<template>
  <!-- <pre>{{ wap }}</pre> -->
  <section class="wap-details">
    <!-- <component v-for="cmp in wap.cmps" :is="cmp.type"></component> -->
    <!-- <wap-header :cmp="wap.cmps[0]" /> -->
    <pre>{{ wap.cmps[0].type }}</pre>
    <component :is="wap.cmps[0].type" :cmp="wap.cmps[0]"></component>
  </section>
</template>
<script>
import { wapService } from '../services/wap.service'
import wapHeader from '../cmps/waps/wap-header.vue'
import WapHeader from '../cmps/waps/wap-header.vue'

export default {
  name: 'wap-details',
  components: [wapHeader],
  data() {
    return {
      wap: null,
    }
  },
  created() {
    console.log(this.$route)
    const { wapId } = this.$route.params
    console.log(wapId)
    this.wap = wapService.getWapById(wapId)
    console.log(this.wap)
    console.log(this.wap.cmps[0])
  },
  components: { WapHeader },
}
</script>
<style lang=""></style>
