<template>
  <div class="container-hash">
    <div v-if="result"
      class="winner">
      <div class="result">{{ result === 'draw' ? 'EMPATE' : 'GANHADOR' }}</div>
      <div>{{ winner }}</div>
      <img v-if="result === 'winner'" class="winner-img" src="https://firebasestorage.googleapis.com/v0/b/vue-projects-66740.appspot.com/o/hash%20game%2Fwinner-gif-1.gif?alt=media&token=1fb278f2-94d3-4b31-bd0a-ba6d623f37dc" >
      <img v-if="result === 'draw'" class="winner-img" src="https://firebasestorage.googleapis.com/v0/b/vue-projects-66740.appspot.com/o/hash%20game%2Fdraw.gif?alt=media&token=27d6cccd-1be2-4573-bd05-fd1956043438" >
      <img v-if="result === 'loser'" class="winner-img" src="https://firebasestorage.googleapis.com/v0/b/vue-projects-66740.appspot.com/o/hash%20game%2Flose.gif?alt=media&token=56e7ec33-f9ce-45d0-a137-916386a54661" >
    </div>
    <div class="hash">
      <div v-for="(box, key) in myBoxes" :key="key">
        <div :id="key"
          class="box-hash"
          :class="winnerPath.indexOf(key) !== -1 ? result === 'winner' ? 'blink' : 'blink_lose' : ''"
          @click="block || box.email ? '' : update(key)">
          {{ box.email ? box.email.substr(0, 2).toUpperCase() : '' }}
        </div>
      </div>
      <!-- winner {{ winner }} -->
      <!-- result {{ result }} -->
    </div>
    <div v-if="result"
      class="new-game" @click="myNewGame">
      NOVO JOGO
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['boxes', 'user']),
    block () {
      const self = this
      if (self.disabled || self.endGame || self.result) return true
      return false
    },
    disabled () {
      const self = this
      if (self.boxes.last_move === self.user.uid) return true
      return false
    }
  },
  data () {
    return {
      result: '',
      myBoxes: {},
      endGame: false,
      winnerPath: []
    }
  },
  methods: {
    ...mapActions(['updateBox', 'newGame', 'checkData']),
    checkWinner () {
      const self = this
      if (self.myBoxes.box1.uuid && self.myBoxes.box2.uuid && self.myBoxes.box3.uuid) {
        if (self.myBoxes.box1.uuid === self.myBoxes.box2.uuid && self.myBoxes.box2.uuid === self.myBoxes.box3.uuid) {
          if (self.myBoxes.box1.uuid === self.user.uid) {
            self.result = 'winner'
          } else {
            self.result = 'loser'
          }
          self.winnerPath = ['box1', 'box2', 'box3']
          return self.myBoxes.box1.email
        }
      }
      if (self.myBoxes.box1.uuid && self.myBoxes.box4.uuid && self.myBoxes.box7.uuid) {
        if (self.myBoxes.box1.uuid === self.myBoxes.box4.uuid && self.myBoxes.box4.uuid === self.myBoxes.box7.uuid) {
          if (self.myBoxes.box1.uuid === self.user.uid) {
            self.result = 'winner'
          } else {
            self.result = 'loser'
          }
          self.winnerPath = ['box1', 'box4', 'box7']
          return self.myBoxes.box1.email
        }
      }
      if (self.myBoxes.box1.uuid && self.myBoxes.box5.uuid && self.myBoxes.box9.uuid) {
        if (self.myBoxes.box1.uuid === self.myBoxes.box5.uuid && self.myBoxes.box5.uuid === self.myBoxes.box9.uuid) {
          if (self.myBoxes.box1.uuid === self.user.uid) {
            self.result = 'winner'
          } else {
            self.result = 'loser'
          }
          self.winnerPath = ['box1', 'box5', 'box9']
          return self.myBoxes.box1.email
        }
      }
      if (self.myBoxes.box2.uuid && self.myBoxes.box5.uuid && self.myBoxes.box8.uuid) {
        if (self.myBoxes.box2.uuid === self.myBoxes.box5.uuid && self.myBoxes.box5.uuid === self.myBoxes.box8.uuid) {
          if (self.myBoxes.box2.uuid === self.user.uid) {
            self.result = 'winner'
          } else {
            self.result = 'loser'
          }
          self.winnerPath = ['box2', 'box5', 'box8']
          return self.myBoxes.box2.email
        }
      }
      if (self.myBoxes.box3.uuid && self.myBoxes.box5.uuid && self.myBoxes.box7.uuid) {
        if (self.myBoxes.box3.uuid === self.myBoxes.box5.uuid && self.myBoxes.box5.uuid === self.myBoxes.box7.uuid) {
          if (self.myBoxes.box3.uuid === self.user.uid) {
            self.result = 'winner'
          } else {
            self.result = 'loser'
          }
          self.winnerPath = ['box3', 'box5', 'box7']
          return self.myBoxes.box3.email
        }
      }
      if (self.myBoxes.box3.uuid && self.myBoxes.box6.uuid && self.myBoxes.box9.uuid) {
        if (self.myBoxes.box3.uuid === self.myBoxes.box6.uuid && self.myBoxes.box6.uuid === self.myBoxes.box9.uuid) {
          if (self.myBoxes.box3.uuid === self.user.uid) {
            self.result = 'winner'
          } else {
            self.result = 'loser'
          }
          self.winnerPath = ['box3', 'box6', 'box9']
          return self.myBoxes.box3.email
        }
      }
      if (self.myBoxes.box4.uuid && self.myBoxes.box5.uuid && self.myBoxes.box6.uuid) {
        if (self.myBoxes.box4.uuid === self.myBoxes.box5.uuid && self.myBoxes.box5.uuid === self.myBoxes.box6.uuid) {
          if (self.myBoxes.box4.uuid === self.user.uid) {
            self.result = 'winner'
          } else {
            self.result = 'loser'
          }
          self.winnerPath = ['box4', 'box5', 'box6']
          return self.myBoxes.box4.email
        }
      }
      if (self.myBoxes.box7.uuid && self.myBoxes.box8.uuid && self.myBoxes.box9.uuid) {
        if (self.myBoxes.box7.uuid === self.myBoxes.box8.uuid && self.myBoxes.box8.uuid === self.myBoxes.box9.uuid) {
          if (self.myBoxes.box7.uuid === self.user.uid) {
            self.result = 'winner'
          } else {
            self.result = 'loser'
          }
          self.winnerPath = ['box7', 'box8', 'box9']
          return self.myBoxes.box7.email
        }
      }
      return ''
    },
    checkEndGame (value) {
      const self = this
      let index = 0
      if (!Object.keys(value).length) return false
      for (let key in value) {
        let item = value[key]
        if (item.email) index++
      }
      if (index === 9) {
        self.result = 'draw'
        return true
      }
      if (index === 0) {
        self.result = ''
        self.winnerPath = []
      }
      return false
    },
    update (key) {
      const self = this
      self.updateBox({
        key: key,
        value: {
          email: self.user.email,
          uuid: self.user.uid
        }
      })
    },
    myNewGame () {
      const self = this
      self.result = ''
      self.winnerPath = []
      self.newGame()
    },
    fillBoxes (value) {
      let helper = {}
      for (let key in value) {
        if (key === 'last_move') continue
        if (!helper[key]) {
          helper[key] = value[key]
        }
      }
      return helper
    }
  },
  mounted () {
    const self = this
    self.checkData()
  },
  watch: {
    boxes: {
      deep: true,
      handler (value) {
        const self = this
        self.myBoxes = self.fillBoxes(value)
        self.endGame = self.checkEndGame(value)
        self.winner = self.checkWinner(value)
      }
    }
  }
}
</script>

<style scoped>
@import './../styles/Hash.css';
</style>