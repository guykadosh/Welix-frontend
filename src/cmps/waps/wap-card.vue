<template>
  <section v-if="cmp" class="wap-card" :class="cmp.classes">
    <img class="card-img" :src="info.imgUrl" />
    <div class="card-content">
      <h2 class="card-heading" v-if="info.heading">{{ info.heading }}</h2>
      <h3 class="card-subheading" v-if="info.subHeading">
        {{ info.subHeading }}
      </h3>
      <ul class="card-list clean-list">
        <li v-for="line in info.list" :key="line">
          <span>{{ line.icon }}</span> <span>{{ line.txt }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: 'wap-card',
  props: {
    cmp: Object,
  },
  computed: {
    info() {
      return this.cmp.info
    },
  },
}
</script>
