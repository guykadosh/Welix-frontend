<template>
  <header class="main-header main-layout full">
    <div class="screen full" @click="toggleMenu" v-if="isMenuOpen"></div>
    <div class="header__inner flex justify-between items-center">
      <section class="logo-wrapper">
        <!-- <h2 class="main-header-logo" @click="$router.push('/')">Welix</h2> -->
        <img
          class="logo"
          src="@/assets/img/logo.png"
          alt=""
          @click="$router.push('/')"
        />
      </section>
      <MenuOutlined class="hamburger" @click="toggleMenu" />

      <section class="nav-wrapper">
        <router-link class="header-link link-mid" to="/template"
          >Templates</router-link
        >
        <router-link
          class="header-link link-dashboard"
          v-if="user"
          to="/dashboard"
          >backoffice</router-link
        >
        <router-link class="header-link link-login" v-if="!user" to="/login"
          >log in</router-link
        >
        <router-link class="header-link link-signup" v-if="!user" to="/signup"
          >sign up</router-link
        >
        <img v-if="user" class="user-img" :src="user.img" alt="" />
      </section>

      <div class="mobile-nav" :class="{ open: isMenuOpen }">
        <button class="close-menu" @click="toggleMenu">x</button>
        <router-link class="header-link link-mid" to="/template"
          >Templates</router-link
        >
        <router-link class="header-link link-mid" to="/wap/editor/"
          >Editor</router-link
        >
        <router-link
          class="header-link link-dashboard"
          v-if="user"
          to="/dashboard"
          >backoffice</router-link
        >
        <router-link class="header-link link-login" v-if="!user" to="/login"
          >log in</router-link
        >
        <router-link class="header-link link-signup" v-if="!user" to="/signup"
          >sign up</router-link
        >
      </div>
    </div>
  </header>
</template>

<script>
import { MenuOutlined } from '@ant-design/icons-vue'
import { notification } from 'ant-design-vue'
export default {
  components: {
    MenuOutlined,
  },
  data() {
    return {
      isMenuOpen: false,
    }
  },
  created() {},
  computed: {
    user() {
      return this.$store.getters.getUser
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    async logout() {
      try {
        this.$store.dispatch({ type: 'logout' })
        notification['success']({
          message: 'Logged out successfully',
        })
      } catch (err) {
        notification['warning']({
          message: `Oops, something went wrong`,
        })
      }
    },
  },
}
</script>
