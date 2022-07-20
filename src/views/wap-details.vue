<template>
  <section class="wap-details">
    <component v-for="cmp in wap.cmps" :is="cmp.type"></component>
  </section>
</template>
<script>
import { wapService } from '../services/wap.service'

export default {
  data() {
    return {
      wap: null,
    }
  },
  created() {
    const { wapId } = this.$route.params

    // get wap from service
  },
}
</script>
<style lang=""></style>
