<template>
  <div class="home">
    <!-- <img class="show-tech" src="./../assets/back_tech.png" alt="tech"> -->
    <p>Scroll Up and Down this page to see the parallax scrolling effect.</p>

    <div class="parallax"></div>

    <div style="height:1000px;background-color:red;font-size:36px">
      Scroll Up and Down this page to see the parallax scrolling effect.
      This div is just here to enable scrolling.
      Tip: Try to remove the background-attachment property to remove the scrolling effect.
    </div>
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

<style scoped>
@import './../styles/Home.css';
</style>