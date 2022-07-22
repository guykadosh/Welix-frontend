<template>
  <section v-if="cmp" class="wap-card" :class="cmp.classes">
    <img v-if="info.img" class="card-img" :src="info.img.url" />
    <div class="card-img-container"></div>
    <div class="card-content">
      <span class="card-tag" contenteditable="true">{{ info.tag }}</span>
      <h2 class="card-heading" v-if="info.heading" contenteditable="true">{{ info.heading.txt }}</h2>
      <p class="card-price" v-if="info.price" >
        $ <span contenteditable="true">{{ info.price.txt }}</span>
      </p>
      <h3 class="card-subheading" v-if="info.subHeading" contenteditable="true">
        {{ info.subHeading.txt }}
      </h3>
      <ul class="card-list clean-list" v-if="info.list">
        <li v-for="line in info.list" :key="line">
          <span>{{ line.icon }}</span> <span contenteditable="true">{{ line.txt }}</span>
        </li>
      </ul>
      <a v-if="info.btn" class="card-btn" >{{
        info.btn.txt
      }}</a>
    </div>
  </section>
</template>
<script>
export default {
  name: 'wap-card-edit',
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
