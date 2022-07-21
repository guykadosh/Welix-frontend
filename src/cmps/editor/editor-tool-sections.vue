<template lang="">
  <section class="flex">
    <div class="types">
      <div>Section A</div>
      <div>Section B</div>
      <div>Section C</div>
      <div>Section D</div>
      <div>Section F</div>
    </div>

    <Container
      :get-child-payload="getChildPayload"
      group-name="1"
      @drop="onDrop($event)"
      behaviour="copy"
    >
      <Draggable v-for="item in items" :key="item.id">
        <div class="cmp-preview" @click="addWapCmp(item.id)">
          <span>{{ item.type }}</span>
        </div>
      </Draggable>
    </Container>
  </section>
</template>
<script>
import { Container, Draggable } from 'vue3-smooth-dnd'

export default {
  components: {
    Container,
    Draggable,
  },
}
</script>
<style lang=""></style>
