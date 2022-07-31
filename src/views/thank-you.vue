<template>
  <div class="thank-you">
    <div class="svg-container">
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
        <path
          d="M0,100 C150,180 350,0 500,120 L500,00 L0,0 Z"
          style="stroke: none; fill: #fff5f5"
        ></path>
      </svg>
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
        <path
          d="M0,100 C150,180 350,0 500,100 L500,00 L0,0 Z"
          style="stroke: none; fill: #ffc9c9"
        ></path>
      </svg>
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
        <path
          d="M0,100 C150,220 350,0 500,100 L500,00 L0,0 Z"
          style="stroke: none; fill: #ffdeeb"
        ></path>
      </svg>
    </div>
    <div class="thank-you-inner">
      <font-awesome-icon class="icon" icon="fa-light fa-badge-check" />
      <h2>Thank you!</h2>
      <h3>You're now a member of our list of awesome people,</h3>
      <h3>We will message you back soon!</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: 'thank-you',
}
</script>
