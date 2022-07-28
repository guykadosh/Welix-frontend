<template>
  <section class="signup">
    <app-header />

    <section class="signup-wrapper main-layout">
      <div class="signup-wrapper__inner">

        <form @submit.prevent="signup" class="signup__form">
          <h2>Sign up</h2>
          <input v-model="credentials.fullname" placeholder="Fullname " autofocus />
          <input v-model="credentials.username" placeholder="Username " required />
          <input v-model="credentials.email" type="email" placeholder="Email" />
          <input v-model="credentials.password" type="password" placeholder="Password" />

          <!-- <p @click="this.$router.push('/login')">Have an account?</p> -->
          <button class="signup__btn">
            <span>Signup</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </form>
      </div>
    </section>
  </section>
</template>

<script>
import appHeader from '../cmps/app/app-header.vue'
import { notification } from 'ant-design-vue'
export default {
  name: 'signup',
  data() {
    return {
      credentials: {
        fullname: '',
        username: '',
        email: '',
        password: '',
      },
    }
  },
  created() { },
  methods: {
    async signup() {
      try {
        const credentials = JSON.parse(JSON.stringify(this.credentials))
        await this.$store.dispatch({ type: 'signup', credentials })
        this.$router.push('/')
        notification['success']({
          message: `Welcome ${credentials.fullname}`,
        })
      } catch (err) {
        notification['warning']({
          message: `Oops, something went wrong`,
        })
      }
    },
  },
  components: {
    appHeader,
  },
}
</script>
