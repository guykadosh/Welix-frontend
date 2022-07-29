<template>
  <header class="editor-header flex items-center justify-between">
    <img
      @click="$router.push('/')"
      class="edit-logo"
      src="../../assets/img/logo.png"
      alt=""
    />
  </header>
</template>

<script>
export default {
  name: 'editor-header',
}
</script>

<style></style>
