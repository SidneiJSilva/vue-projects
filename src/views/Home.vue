<template>
  <div class="home" style="font-size: 1rem; color: white;">
    <pre>USER {{ user }}</pre>
    <pre>LOGGED {{ logged }}</pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// @ is an alias to /src
export default {
  computed: {
    ...mapState(['user', 'logged'])
  }
}
</script>
