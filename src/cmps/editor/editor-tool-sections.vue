<template>
  <section class="flex">
    <div class="tool-bar-actions__labels flex flex-column">
      <div class="tool-bar-actions__label" v-for="label in labels">
        <span class="tool-bar-actions__label--text">
          {{ label.title }}
        </span>
      </div>
    </div>

    <div class="tool-bar-actions__options flex flex-column">
      <Container
        :get-child-payload="getChildPayload"
        group-name="1"
        behaviour="copy"
      >
        <Draggable v-for="cmp in cmps" :key="cmp.id">
          <div class="cmp-preview" @click="addWapCmp(cmp.id)">
            <span>{{ cmp.type }}</span>
          </div>
        </Draggable>
      </Container>
    </div>
  </section>
</template>
<script>
import { Container, Draggable } from 'vue3-smooth-dnd'

export default {
  props: {
    cmps: Array,
  },
  data() {
    return {
      labels: [
        { title: 'Headers', type: 'wap-header' },
        { title: 'Heros', type: 'wap-hero' },
        { title: 'Contact', type: 'wap-contact' },
        { title: 'Full Sections', type: 'wap-contact' },
        { title: 'Testimonials', type: 'wap-review' },
        { title: 'About', type: 'wap-footer' },
        { title: 'Map', type: 'wap-map' },
      ],
    }
  },
  created() {
    console.log(this.cmps)
  },
  components: {
    Container,
    Draggable,
  },
  methods: {
    getChildPayload(idx) {
      return this.cmps[idx]
    },
  },
}
</script>
<style lang=""></style>
