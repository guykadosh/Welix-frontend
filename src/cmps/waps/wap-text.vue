<template>
  <section v-if="cmp" :class="cmp.classes" :style="cmp.style">
    <section class="__inner">
      <span class="tag" v-if="info.tag" :style="info.tag.style">{{
          info.tag.txt
      }}</span>
      <h2 v-if="info.heading" class="text1">{{ info.heading.txt }}</h2>
      <h2 v-if="info.subHeading" class="text2">{{ info.subHeading.txt }}</h2>
      <div class="icon-wrapper">
      <img :src="info.icon.src" alt=""   
          :class="info.icon.classes" 
          :style="info.icon.style" 
          v-if="info.icon" 
          @click="goToLink(info.icon)"
      >
   
      </div>
    </section>
  </section>
</template>
<script>
export default {
  name: 'wap-text',
  props: {
    cmp: Object,
  },
  methods: {
    goToLink(info) {
      window.open(info.link, '_blank')
    }
  },
  computed: {
    info() {
      return this.cmp.info
    },
  },
  created() {
    console.log('wap test',  this.cmp)
  }
}
</script>
