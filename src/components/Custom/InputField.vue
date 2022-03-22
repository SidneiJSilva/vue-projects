<template>
  <input class="input"
    :placeholder="placeholder"
    @input="val => $emit('input', val.target.value)"
    :value="value"
    :type="type"
    >
</template>

<script>
export default {
  props: {
    value: {},
    placeholder: {},
    type: { type: String, default: 'text' }
  }
}
</script>

<style scoped>
.input {
  padding: .5rem;
  font-size: 1.2rem;
}
</style>
