<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <BounceLoader
          v-if="loading"
          class="spinner"
          color="#99f2c8"
          size="100" />

        <header
          class="modal-header"
          id="modalTitle"
        >
          <div v-if="logged">DADOS DO UTILIZADOR</div>
          <div v-else>LOGIN</div>
          <div class="btn-close" @click="myClose()">X</div>
        </header>

        <div class="modal-body">
          <template v-if="logged">
            <div class="info">Logado como</div>
            <div class="info-span"><span>{{ user.email }}</span></div>
          </template>
          <template v-else>
            <input-field
              class="input"
              v-model="input_user.email"
              placeholder="Email"  
            />
            <input-field 
              class="input"
              v-model="input_user.passwd"
              placeholder="Senha"
              type="password"
            />
          </template>
        </div>

        <footer class="modal-footer">
          <div
            v-if="logged"
            class="btn-logout"
            @click="logout">LOGOUT</div>
          <div
            v-else
            class="btn-login"
            @click="myLogin">ACESSAR</div>
        </footer>
        
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      input_user: {
        email: '',
        passwd: ''
      }
    }
  },
  computed: {
    ...mapState(['logged', 'user', 'loading'])
  },
  methods: {
    ...mapActions(['logout', 'login']),
    myClose () {
      const self = this
      self.input_user.email = ''
      self.input_user.passwd = ''
      self.$emit('close')
    },
    myLogin () {
      const self = this
      self.login(self.input_user)
      self.input_user.email = ''
      self.input_user.passwd = ''
    },
    close() {
      this.$emit('close')
    }
  },
  components: {
    'input-field': () => import('@/components/Custom/InputField.vue')
  },
  watch: {
    logged (value) {
      if (value) {
        const self = this
        self.myClose()
      }
    }
  }
}
</script>

<style scoped>
@import './../styles/LoginModal.css';
</style>
