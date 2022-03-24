<template>
  <div class="home">
    <!-- <img class="show-tech" src="./../assets/back_tech.png" alt="tech"> -->
    <!-- <p>Scroll Up and Down this page to see the parallax scrolling effect.</p> -->

    <div class="parallax"></div>

    <div class="block">
      <div class="container">
        <img class="calc-img" src="./../assets/calc.png" alt="calculadora">
        <div class="info">
          <div class="title-home">Eu também sofria com esse problema, e agora?</div>
          <div class="my-text">Se você também é daqueles que tem imensa dificuldade de fazer contas de cabeça, seus problemas acabaram. Esta calculadora feita em Vue faz as contas para você.<br><br>Escreva as operações sequencialmente em uma única fila que ela te dá o resultado. Não deixe de experimentar.<br><br>Sua vida será facilitada como nunca imaginaste antes.</div>
          <div class="container-home">
            <div>&nbsp;</div>
            <div class="container-info">
              <div class="indicator-text">Acesse aqui</div>
              <calculator :size="60" class="calculator-icon" @click="$router.push('/calc')" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="parallax"></div>

    <div class="block">
      Scroll Up and Down this page to see the parallax scrolling effect.
      This div is just here to enable scrolling.
      Tip: Try to remove the background-attachment property to remove the scrolling effect.
    </div>

    <div class="parallax"></div>

    <div class="block">
      Scroll Up and Down this page to see the parallax scrolling effect.
      This div is just here to enable scrolling.
      Tip: Try to remove the background-attachment property to remove the scrolling effect.
    </div>
  </div>
</template>

<script>
import Calculator from 'vue-material-design-icons/Calculator.vue';
import { mapState } from 'vuex'
// @ is an alias to /src
export default {
  computed: {
    ...mapState(['user', 'logged'])
  },
  components: {
    Calculator
  }
}
</script>

<style scoped>
@import './../styles/Home.css';
</style>