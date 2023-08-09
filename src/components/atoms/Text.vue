<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  },
  styleClass: {
    type: String
  }
})
</script>
<template>
    <div v-bind:class="`${styleClass?styleClass:'textStyle'}`">{{msg}}</div>
</template>
<style scoped>
.textStyle {
  font-size: 1rem;
}
</style>