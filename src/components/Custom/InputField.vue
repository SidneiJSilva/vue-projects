<template>
  <input class="input"
    :placeholder="placeholder"
    @input="val => $emit('input', val.target.value)"
    :value="value"
    >
</template>

<script>
export default {
  props: {
    value: {},
    placeholder: {}
  }
}
</script>

<style scoped>
.input {
  padding: .5rem;
  font-size: 1.2rem;
}
</style>
