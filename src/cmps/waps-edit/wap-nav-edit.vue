<template>
  <section class="wap-nav" :style="cmp.style">
    <div class="screen full" @click="toggleMenu" v-if="isMenuOpen"></div>
    <MenuOutlined class="hamburger" @click="toggleMenu" />
    <ul class="nav-bar clean-list flex items-center" :class="isShown">
      <li v-for="(link, idx) in cmp.info.links" ref="links" class="nav-link">
        <a
          contenteditable="true"
          @click="setEditable(link.type, 'links', idx)"
          @input="changeTxt('links', idx, 'link' + idx)"
          :ref="'link' + idx"
          href="link.href"
          >{{ link.txt }}
        </a>
      </li>
    </ul>
  </section>
</template>
<script>
import { MenuOutlined } from '@ant-design/icons-vue'
import { eventBus } from '../../services/event-bus.service'

export default {
  name: 'wap-nav',
  props: {
    cmp: Object,
  },
  data() {
    return {
      isMenuOpen: false,
      cmpToEdit: null,
    }
  },
  created() {
    this.cmpToEdit = JSON.parse(JSON.stringify(this.cmp))
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    changeTxt(ref, idx = null, itemRef) {
      if (idx === null) {
        this.cmpToEdit.info[ref].txt = this.$refs[ref].innerText
      } else {
        this.cmpToEdit.info[ref][idx].txt = this.$refs[itemRef][0].innerText
      }

      const newCmp = JSON.parse(JSON.stringify(this.cmpToEdit))
      this.$store.commit({ type: 'updateCmp', newCmp })
    },
    setEditable(type, key, idx = null) {
      eventBus.emit('open-edit')
      const el = { type, key, idx }
      const cmp = JSON.parse(JSON.stringify(this.cmp))

      this.$store.commit({ type: 'setElToEdit', el })
      this.$store.commit({ type: 'setCmpToEdit', cmp })
    },
  },
  computed: {
    isShown() {
      return { open: this.isMenuOpen }
    },
  },
  components: {
    MenuOutlined,
  },
}
</script>
