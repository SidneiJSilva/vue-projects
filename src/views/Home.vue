<template>
  <div class="home">
    <!-- <img class="show-tech" src="./../assets/back_tech.png" alt="tech"> -->
    <!-- <p>Scroll Up and Down this page to see the parallax scrolling effect.</p> -->

    <div class="parallax"></div>

    <div class="block">
      <div class="container">
        <img class="calc-img" src="https://firebasestorage.googleapis.com/v0/b/vue-projects-66740.appspot.com/o/home%2Fcalc.png?alt=media&token=fd3304d7-9dc0-4cf9-a2c5-d39ea6590048"
          alt="calculadora">
        <div class="">
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

    <div class="block-btc">
      <div class="container">
        <div class="">
          <div class="title-home-left">Chegou a hora de investir!</div>
          <div class="my-text-left">O mercado de criptomoedas não para de crescer. Quem surfa nessa onda desde o início está milionário agora.<br><br>Quer ser o próximo milionário? Comece hoje mesmo a investir em criptos e mude seu futuro!</div>
          <div>&nbsp;</div>
          <div class="container-home">
            <div class="container-info">
              <div class="indicator-text">Acompanhe aqui</div>
              <currency-btc-vue :size="60" class="calculator-icon" @click="$router.push('/btc')" />
            </div>
          </div>
        </div>
        <img class="btc-img" src="https://firebasestorage.googleapis.com/v0/b/vue-projects-66740.appspot.com/o/home%2Fbtc.jpg?alt=media&token=3f2df807-73ee-4adf-a6cd-84fb56f20245"
          alt="calculadora">
      </div>
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
import CurrencyBtcVue from 'vue-material-design-icons/CurrencyBtc.vue';
// @ is an alias to /src
export default {
  computed: {
    ...mapState(['user', 'logged'])
  },
  components: {
    Calculator, CurrencyBtcVue
  }
}
</script>

<style scoped>
@import './../styles/Home.css';
</style>