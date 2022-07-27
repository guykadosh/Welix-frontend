<template lang="">
  <!-- <div class="screen"></div> -->
  <section class="compose-email">
    <div class="compose-title flex justify-between">
      <h3>New Message</h3>
      <div>
        <!-- <button class="compose-title-btn" @click="minimize"> -->
        <!-- <i class="fa-solid fa-window-minimize" v-if="!isMinimize"></i> -->
        <!-- <i class="fa-solid fa-plus" v-else></i> -->
        <!-- </button> -->
        <!-- <button class="compose-title-btn" @click="expand">
          <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
        </button> -->
        <!-- <button class="compose-title-btn" @click="saveDraft">
          <i class="fa-solid fa-xmark"></i>
        </button> -->
      </div>
    </div>
    <section class="compose-form flex flex-column">
      <input type="email" placeholder="Recipient" />
      <input type="text" placeholder="Subject" />
      <textarea></textarea>
      <button class="send" @click.prevent="send">Send</button>
    </section>
  </section>
</template>
<script>
export default {}
</script>

<style>
.compose-email {
  background-color: #fff;
  position: fixed;
  /* bottom: -50%; */
  /* right: -50%; */
  bottom: 0;
  right: 0;
  transform: translate(-50%, -50%);
  width: 28rem;
  height: 28rem;
  /* width: 100%; */
  /* height: 100%; */
  border: 1px solid #000;
  border-radius: 8px;
  z-index: 1000;
  outline: 1px solid #f8f9fa79;
}

.compose-email.expanded {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 120;
  width: 40rem;
  height: 30rem;
  border-radius: 0.6rem;
}

.compose-email > * {
  font-family: Roboto-regular;
}

.compose-email .compose-title {
  background-color: var(--gray3);
  font-size: 0.8rem;
  padding: 0.6rem 0.8rem;
}

.compose-email .compose-title div > :last-child {
  font-size: 1rem;
}

.compose-email .compose-title div > * {
  margin-inline-start: 0.5rem;
}

.compose-title h3 {
  color: var(--gray5);
}

.compose-title-btn > * {
  color: var(--gray5);
  margin-inline-start: 0.4rem;
}

.compose-title-btn:nth-of-type(1) {
  display: none;
}

.compose-title-btn:nth-of-type(2) {
  display: none;
}

.compose-title-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.compose-email .compose-form {
  padding: 0 0.8rem 1rem 0.8rem;
}

.compose-email .compose-form input,
textarea {
  border: none;
  box-shadow: none;
  outline: none;
  border-bottom: 0.05rem solid #555;
  /* background-color: var(--gray2); */
  /* color: var(--gray5); */
  padding: 0.5rem 0 0.5rem 0;
}

.compose-email .compose-form input::placeholder {
  color: var(--gray4);
}

.compose-email .compose-form textarea {
  resize: none;
  border: none;
  font-family: Roboto-regular;
}

.compose-email .send {
  font-family: Roboto-regular;

  width: 7rem;
  padding: 0.7rem;
  border-radius: 0.4rem;
  border: none;
  color: whitesmoke;
  background-color: #be123c;
  cursor: pointer;
  position: fixed;
  bottom: 5%;
  right: 5%;
}
</style>
