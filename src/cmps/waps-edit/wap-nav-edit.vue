<template>
  <section class="wap-nav">
    <div class="screen full" @click="toggleMenu" v-if="isMenuOpen"></div>
    <MenuOutlined class="hamburger" @click="toggleMenu" />
    <ul class="nav-bar clean-list flex items-center" :class="isShown">
      <li v-for="link in cmp.info.links" class="nav-link">
        <a :href="link.href">{{ link.txt }}</a>
      </li>
    </ul>
  </section>
</template>
<script>
import { MenuOutlined } from '@ant-design/icons-vue'
export default {
  name: 'wap-nav',
  props: {
    cmp: Object,
  },
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
  computed: {
    isShown() {
      return { open: this.isMenuOpen }
    }
  },
  components: {
    MenuOutlined,
  }
}
</script>
