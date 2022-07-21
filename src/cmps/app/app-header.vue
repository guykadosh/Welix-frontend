<template>
  <header class="main-header full main-layout">
    <div class="flex justify-between items-center ">
      <h2 class="main-header-logo">Welix</h2>
      <ul class="main-header-nav flex clean-list justify-between ">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/template">Templates</router-link>
        </li>
        <li>
          <router-link to="/wap/editor/" >Editor</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {}
</script>

