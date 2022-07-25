<template lang="">
  <section>
    <form @submit.prevent="login" class="login__form">
      <h2>Log in</h2>
      <input v-model="credentials.username" placeholder="Username" autofocus />
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
  </section>
</template>
<script>
export default {}
</script>
<style lang=""></style>
