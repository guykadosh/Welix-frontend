<template>
  <section v-if="cmp" class="wap-card" :class="cmp.classes" :style="cmp.style">
    <img v-if="info.img" class="card-img" :src="info.img.url" />
    <div class="card-img-container"></div>
    <div class="card-content">
      <span class="card-tag" v-if="info.tag" :style="info.tag.style">{{
        info.tag.txt
      }}</span>
      <h2 class="card-heading" v-if="info.heading" :style="info.heading.style">
        {{ info.heading.txt }}
      </h2>
      <p class="card-price" v-if="info.price" :style="info.price.style">
        $ <span>{{ info.price.txt }}</span>
      </p>
      <h3
        class="card-subheading"
        v-if="info.subHeading"
        :style="info.subHeading.style"
      >
        {{ info.subHeading.txt }}
      </h3>
      <ul class="card-list clean-list" v-if="info.list.length">
        <li v-for="line in info.list" :key="line">
          <img :src="line.icon" srcset="" />

          <span>{{ line.txt }}</span>
        </li>
      </ul>
      <a v-if="info.btn" :href="info.btn.link" class="card-btn">
        {{ info.btn.txt }}
      </a>
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
