<template>
  <section class="flex sections">
    <div class="tool-bar-actions__labels flex flex-column">
      <div
        class="tool-bar-actions__label flex items-center"
        v-for="(label, idx) in labels"
        :key="label.id"
        :class="{ selected: label.selected }"
      >
        <span
          class="tool-bar-actions__label-text"
          :class="{ selected: label.selected }"
          @click="setFilter(label.type, idx)"
        >
          {{ label.title }}
        </span>
        <!-- <span class="mark-active" :class="{ selected: label.selected }"></span> -->
      </div>
    </div>

    <div class="tool-bar-actions__options flex flex-column">
      <div class="tool-bar-actions__options-filter">
        <a-select
          ref="select"
          class="select-filter"
          placeholder="All"
          @select="setSelectFilter"
        >
          <a-select-option
            v-for="(label, idx) in labels"
            :key="label.id"
            :value="idx"
            >{{ label.title }}</a-select-option
          >
        </a-select>
      </div>
      <p class="tool-bar-actions__options-title">{{ title }}</p>
      <Container
        :get-child-payload="getChildPayload"
        group-name="1"
        behaviour="copy"
      >
        <Draggable v-for="cmp in cmps" :key="cmp.id">
          <div class="cmp-preview">
            <img v-if="cmp.thumbnail" :src="cmp.thumbnail" alt="" />
            <img v-else src="@/assets/img/omnifood-header.png" alt="" />
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
        { id: 'label00', title: 'All', type: '', selected: false },
        {
          id: 'label01',
          title: 'Headers',
          type: 'wap-header',
          selected: true,
        },
        { id: 'label02', title: 'Heros', type: 'wap-hero', selected: false },
        {
          id: 'label03',
          title: 'Contact',
          type: 'wap-contact',
          selected: false,
        },
        {
          id: 'label04',
          title: 'Sections',
          type: 'wap-container',
          selected: false,
        },
        {
          id: 'label05',
          title: 'Testimonials',
          type: 'wap-review',
          selected: false,
        },
        { id: 'label06', title: 'About', type: 'wap-footer', selected: false },
        { id: 'label07', title: 'Text', type: 'wap-text', selected: false },
        { id: 'label08', title: 'Cards', type: 'wap-card', selected: false },
        { id: 'label09', title: 'List', type: 'wap-list', selected: false },
        { id: 'label10', title: 'Map', type: 'wap-map', selected: false },
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
    setSelectFilter(idx) {
      const { type } = this.labels[idx]
      this.setFilter(type, idx)
    },
  },
  computed: {
    title() {
      return this.labels.find(label => label.selected).title
    },
  },
}
</script>
<style lang=""></style>
