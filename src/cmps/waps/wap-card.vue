<template>
  <section v-if="cmp" class="wap-card" :class="cmp.classes">
<<<<<<< HEAD
    <img class="card-img" :src="info.imgUrl" />
    <div class="card-img-container"></div>
=======
    <img v-if="info.img" class="card-img" :src="info.img.url" />
>>>>>>> 3040b8242f94e7997632813f3504c7535c251382
    <div class="card-content">
      <span class="card-tag">{{ info.tag }}</span>
      <h2 class="card-heading" v-if="info.heading">{{ info.heading.txt }}</h2>
      <p class="card-price" v-if="info.price">
        $ <span>{{ info.price.txt }}</span>
      </p>
      <h3 class="card-subheading" v-if="info.subHeading">
        {{ info.subHeading.txt }}
      </h3>
      <ul class="card-list clean-list" v-if="info.list">
        <li v-for="line in info.list" :key="line">
          <span>{{ line.icon }}</span> <span>{{ line.txt }}</span>
        </li>
      </ul>
<<<<<<< HEAD
      <a v-if="info.btn" :href="info.btn.href" class="card-btn">{{info.btn.txt}}</a>
=======
      <a v-if="info.btn" :href="info.btn.link" class="card-btn">{{
        info.btn.txt
      }}</a>
>>>>>>> 3040b8242f94e7997632813f3504c7535c251382
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
