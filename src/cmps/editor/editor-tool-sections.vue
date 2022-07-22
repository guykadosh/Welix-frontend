<template>
  <section class="flex sections">
    <div class="tool-bar-actions__labels flex flex-column">
      <div
        class="tool-bar-actions__label"
        v-for="(label, idx) in labels"
        :key="label.id"
      >
        <span
          class="tool-bar-actions__label-text"
          :class="{ selected: label.selected }"
          @click="setFilter(label.type, idx)"
        >
          {{ label.title }}
        </span>
      </div>
    </div>

    <div class="tool-bar-actions__options flex flex-column">
      <p class="tool-bar-actions__options-title">Headers</p>
      <Container
        :get-child-payload="getChildPayload"
        group-name="1"
        behaviour="copy"
      >
        <Draggable v-for="cmp in cmps" :key="cmp.id">
          <div class="cmp-preview" @click="addWapCmp(cmp.id)">
            <img src="@/assets/img/omnifood-header.png" alt="" />
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
        { id: 'label01', title: 'Headers', type: 'wap-header', selected: true },
        { id: 'label02', title: 'Heros', type: 'wap-hero', selected: false },
        {
          id: 'label03',
          title: 'Contact',
          type: 'wap-contact',
          selected: false,
        },
        {
          id: 'label04',
          title: 'Full Sections',
          type: 'wap-contact',
          selected: false,
        },
        {
          id: 'label05',
          title: 'Testimonials',
          type: 'wap-review',
          selected: false,
        },
        { id: 'label06', title: 'About', type: 'wap-footer', selected: false },
        { id: 'label07', title: 'Map', type: 'wap-map', selected: false },
      ],
      filterBy: '',
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
    setFilter(filterBy, idx) {
      this.labels.forEach(label => (label.selected = false))
      this.labels[idx].selected = true

      this.$store.commit({ type: 'setFilter', filterBy })
    },
  },
}
</script>
<style lang=""></style>
