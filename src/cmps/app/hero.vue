<template >
  <section class="main-hero main-layout full">

    <div class="hero__inner">

      <div class="text-box">
        <h1 class="hero-heading">Create a website you are proud of</h1>
        <h2 class="hero-subheading">
          A website should be the easy part of building a business.
        </h2>
        <router-link class="hero-btn" to="/template">Get started</router-link>
        <!-- <a class="learn-more">Learn more</a> -->
      </div>
      <div class="hero-img">
        <img src="https://res.cloudinary.com/duvwxwtot/image/upload/v1659104964/sprint%204/hero3_vjlfr7.svg"
          alt="">
      </div>

    </div>
  </section>
</template>

<script>
export default {
  props: {
    x: Number,
    y: Number
  },
}
</script>
<style >
</style>
