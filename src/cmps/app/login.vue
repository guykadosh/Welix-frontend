<template lang="">
  <a-tabs>
    <a-tab-pane key="1" tab="Login">
      <form @submit.prevent="login" class="">
        <h3 class="login-form-title">Login</h3>
        <label for="" class="login-form-label">Username</label>
        <input
          v-model="credentials.username"
          placeholder="Username"
          autofocus
          class="login-form-input"
        />
        <label for="" class="login-form-label">Password</label>
        <input
          v-model="credentials.password"
          type="password"
          placeholder="Password"
          show-password
          class="login-form-input"
        />
        <button class="login-form-btn">
          <span>Login</span>
        </button>
      </form>
    </a-tab-pane>
    <a-tab-pane key="2" tab="Signup">
      <form @submit.prevent="signup" class="signup__form">
        <h2>Sign up</h2>
        <input
          v-model="credentials.fullname"
          placeholder="Fullname"
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
          required
        />

        <button class="signup__btn">
          <span>Signup</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </form>
    </a-tab-pane>
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
      console.log('Hi')
      this.$emit('login', this.credentials)
    },
    signup() {
      this.$emit('signup', this.credentials)
    },
  },
}
</script>
<style lang=""></style>
