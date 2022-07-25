<template lang="">
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="Login">
      <form @submit.prevent="" class="login__form">
        <h2>Log in</h2>
        <input
          v-model="credentials.username"
          placeholder="Username"
          autofocus
        />
        <input
          v-model="credentials.password"
          type="password"
          placeholder="Password"
          show-password
        />
        <button class="login__btn">
          <span>Login</span>
        </button>
      </form>
    </a-tab-pane>
    <a-tab-pane key="2" tab="Signup">
      <form @submit.prevent="signup" class="signup__form">
        <h2>Sign up</h2>
        <input
          v-model="credentials.fullname"
          placeholder="Fullname *"
          required
          autofocus
        />
        <input
          v-model="credentials.username"
          placeholder="Username *"
          required
        />
        <input v-model="credentials.email" type="email" placeholder="Email *" />
        <input
          v-model="credentials.password"
          type="password"
          placeholder="Password *"
        />

        <p @click="this.$router.push('/login')">Have an account?</p>
        <button class="signup__btn">
          <span>Signup</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </form>
    </a-tab-pane>
    a-tab-pane>
  </a-tabs>
</template>
<script>
export default {
  data() {
    return {
      credentials: {
        username: '',
        password: '',
        email: '',
        fullname: '',
      },
    }
  },
  methods: {
    login() {
      this.$emit('login', this.credentials)
    },
    signup() {
      this.$emit('signup', this.credentials)
    },
  },
}
</script>
<style lang=""></style>
