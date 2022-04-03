<template>
  <div class="container-hash">
    <div class="hash">
      <div v-for="(box, key) in myBoxes" :key="key">
        <div id="key"
          class="box-hash"
          @click="disabled ? '' : update(key)">
          {{ box.email ? box.email.substr(0, 2).toUpperCase() : '' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['boxes', 'user']),
    myBoxes () {
      const self = this
      let helper = {}
      for (let key in self.boxes) {
        if (key === 'last_move') continue
        if (!helper[key]) {
          helper[key] = self.boxes[key]
        }
      }
      return helper
    },
    disabled () {
      const self = this
      if (self.boxes.last_move === self.user.uid) return true
      return false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['updateBox']),
    update (key) {
      const self = this
      self.updateBox({
        key: key,
        value: {
          email: self.user.email,
          uuid: self.user.uid
        }
      })
    }
  },
}
</script>

<style scoped>
@import './../styles/Hash.css';
</style>