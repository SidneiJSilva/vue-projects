<template>
  <div id="app">
    <div class="header">
      <div class="row">
        <img class="img" alt="Vue logo" src="./assets/logo.png">
        <div class="title">ue Projects</div>
      </div>

      <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/btc">BTC</router-link>
        <router-link to="/calc">Calculadora</router-link>
        <router-link v-if="logged" to="/hash">Hash Game</router-link>
        <router-link to="/about">Sobre</router-link>
        <account class="account" :size="40" @click="open_login_modal = true" />
      </div>
    </div>
    
    <router-view/>

    <modal
      v-show="open_login_modal"
      @close="open_login_modal = false"
    >
      <template v-slot:header>
        This is a new modal header.
      </template>

      <template v-slot:body>
        This is a new modal body.
      </template>

      <template v-slot:footer>
        This is a new modal footer.
      </template>
    </modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Account from 'vue-material-design-icons/Account.vue';
export default {
  data () {
    return {
      open_login_modal: false
    }
  },
  computed: {
    ...mapState(['user', 'logged'])
  },
  components: {
    Account,
    modal: () => import('@/components/LoginModal.vue')
  },
  methods: {
    ...mapActions(['login', 'checkUser', 'logout', 'checkData']),
  },
  mounted () {
    const self = this
    // self.login({ email: 'tjsidnei@gmail.com', passwd: '1q2w3e' })
    // self.logout()
    self.checkUser()
    self.checkData()
  }
}
</script>

<style>
@import './styles/App.css';
</style>
