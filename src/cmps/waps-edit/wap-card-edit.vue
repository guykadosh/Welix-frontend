<template>
  <section v-if="cmp" class="wap-card" :style="cmp.style" :class="cmp.classes">
    <img
      v-if="info.img"
      class="card-img"
      :src="info.img.url"
      @click.stop="setEditable(info.img.type, 'img')"
    />
    <div class="card-img-container"></div>
    <div class="card-content">
      <div v-if="info.icon">
        <font-awesome-icon :icon="info.icon.link" class="card-icon" />
      </div>

      <span
        @mousedown.stop
        v-if="info.tag"
        class="card-tag"
        contenteditable="true"
        :style="info.tag.style"
        ref="tag"
        @click.stop="setEditable(info.tag.type, 'tag')"
        @input="changeTxt('tag')"
        >{{ info.tag.txt }}</span
      >
      <h2
        @mousedown.stop
        class="card-heading"
        v-if="info.heading"
        :style="info.heading.style"
        contenteditable="true"
        ref="heading"
        @click.stop="setEditable(info.heading.type, 'heading')"
        @input="changeTxt('heading')"
      >
        {{ info.heading.txt }}
      </h2>
      <p
        @mousedown.stop
        class="card-price"
        v-if="info.price"
        :style="info.price.style"
      >
        $
        <span
          @mousedown.stop
          contenteditable="true"
          ref="price"
          @click.stop="setEditable(info.price.type, 'price')"
          @input="changeTxt('price')"
          >{{ info.price.txt }}</span
        >
      </p>
      <h3
        @mousedown.stop
        class="card-subheading"
        v-if="info.subHeading"
        contenteditable="true"
        :style="info.subHeading.style"
        ref="subHeading"
        @click.stop="setEditable(info.subHeading.type, 'subHeading')"
        @input="changeTxt('subHeading')"
      >
        {{ info.subHeading.txt }}
      </h3>
      <ul class="card-list clean-list" v-if="info.list">
        <li v-for="(line, idx) in info.list" :key="line" :style="line.style">
          <img :src="line.icon" srcset="" />

          <span
            @mousedown.stop
            contenteditable="true"
            :ref="'line' + idx"
            @click.stop="setEditable(info.list[idx].type, 'list', idx)"
            @input="changeTxt('list', idx, 'line' + idx)"
            >{{ line.txt }}</span
          >
        </li>
      </ul>

      <a
        @mousedown.stop
        v-if="info.btn"
        :style="info.btn.style"
        contenteditable="true"
        class="card-btn"
        ref="btn"
        @click.stop="setEditable(info.btn.type, 'btn')"
        @input="changeTxt('btn')"
      >
        {{ info.btn.txt }}</a
      >
      <p v-if="info.paragraph" :style="info.paragraph.style">
        {{ info.paragraph.txt }}
      </p>
    </div>
  </section>
</template>
<script>
import { eventBus } from '../../services/event-bus.service'

export default {
  name: 'wap-card-edit',
  props: {
    cmp: Object,
  },
  data() {
    return {
      cmpToEdit: null,
      isSelected: false,
    }
  },
  created() {
    this.cmpToEdit = JSON.parse(JSON.stringify(this.cmp))
  },
  methods: {
    changeTxt(ref, idx = null, itemRef) {
      const cmpToEdit = this.$store.getters.cmpToEdit || this.cmpToEdit
      const newCmp = JSON.parse(JSON.stringify(cmpToEdit))

      if (idx === null) {
        newCmp.info[ref].txt = this.$refs[ref].innerText
      } else {
        newCmp.info[ref][idx].txt = this.$refs[itemRef][0].innerText
      }
      this.$emit('changedTxt', newCmp)
      // this.$store.commit({ type: 'setCmpToEdit', cmp: newCmp })
      // this.$store.commit({ type: 'updateCmp', newCmp })
    },
    setEditable(type, key, idx = null) {
      if (type === 'cmp') this.isSelected = true
      const el = { type, key, idx }
      const cmp = JSON.parse(JSON.stringify(this.cmp))

      this.$emit('picked', { cmp, el })

      // this.$store.commit({ type: 'setElToEdit', el })
      // this.$store.commit({ type: 'setCmpToEdit', cmp })

      // emit to open side-editor => txt-editor => style => cmp[key].style || cmp[key][idx].style = style
    },
    unselect() {
      this.isSelected = false
    },
  },
  computed: {
    info() {
      return this.cmp.info
    },
    selected() {
      return { selected: this.isSelected }
    },
  },
}
</script>
