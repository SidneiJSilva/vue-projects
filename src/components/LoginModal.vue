<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <div v-if="logged">DADOS</div>
          <div v-else>LOGIN</div>
        </header>

        <div
          class="modal-body"
        >
          <input-field
            class="input"
            v-model="user.email"
            placeholder="Email"  
          />
          <input-field 
            class="input"
            v-model="user.passwd"
            placeholder="Senha"  
          />
          <!-- USER {{ user }} -->
        </div>

        <footer class="modal-footer">
          <slot name="footer">
            This is the default footer!
          </slot>
          <button
            type="button"
            class="btn-green"
            @click="close"
            aria-label="Close modal"
          >
            Close me!
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      user: {
        email: '',
        passwd: ''
      }
    }
  },
  computed: {
    ...mapState(['logged'])
  },
  methods: {
    close() {
      this.$emit('close')
    }
  },
  components: {
    'input-field': () => import('@/components/Custom/InputField.vue')
  }
}
</script>

<style scoped>
@import './../styles/LoginModal.css';
</style>
