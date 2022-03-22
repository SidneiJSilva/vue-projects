<template>
  <div class="page_calc">
    <div class="container_geral">
      <div class="container_calc">
        <div class="space"></div>
        <div class="screen">{{ screen }}</div>
        <div class="space"></div>
      </div>
      <div class="container_calc">
        <div v-for="btn in btns" :key="btn"
          class="btn"
          :style="btn === '=' || btn === '<= DELETE' ? 'width: 40%' : ''"
          @click="calc(btn)">
          {{ btn }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      btns: [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0, '.', 'C', '/', '=', '<= DELETE'],
      screen: '',
      values: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'],
      operators: ['+', '-', '*', '/']
    }
  },
  methods: {
    calc (value) {
      const self = this
      if (value === 'C') {
        self.screen = ''
      } else if (value === '<= DELETE') {
        let newValue = ''
        for (let key in self.screen) {
          let char = self.screen[key]
          if (key * 1 === self.screen.length - 1) break
          newValue += char
        }
        self.screen = newValue
      } else if (value === '=') {
        if (self.screen) {
          self.calculate()
        }
      } else {
        self.screen += value
      }
    },
    calculate () {
      const self = this
      let helper = []
      let conc = ''
      for (let key in self.screen) {
        let char = self.screen[key]
        console.log(key)
        if (self.values.indexOf(char) !== -1) {
          conc += char
          if ((key * 1) === self.screen.length - 1) helper.push(conc)
        } else {
          helper.push(conc)
          helper.push(char)
          conc = ''
        }
      }
      let res = 0
      let has_res = false
      for (let h in helper) {
        let el = helper[h]
        if (self.operators.indexOf(el) !== -1 ) {
          switch (el) {
            case '+':
              if (has_res) {
                res += (helper[(h * 1) + 1] * 1)
              } else {
                res = (helper[(h * 1) - 1] * 1) + (helper[(h * 1) + 1] * 1)
                has_res = true
              }
              break
            case '-':
              if (has_res) {
                res -= (helper[(h * 1) + 1] * 1)
              } else {
                res = (helper[(h * 1) - 1] * 1) - (helper[(h * 1) + 1] * 1)
                has_res = true
              }
              break
            case '*':
              if (has_res) {
                res = res * (helper[(h * 1) + 1] * 1)
              } else {
                res = (helper[(h * 1) - 1] * 1) * (helper[(h * 1) + 1] * 1)
                has_res = true
              }
              break
            case '/':
              if (has_res) {
                res = res / (helper[(h * 1) + 1] * 1)
              } else {
                res = (helper[(h * 1) - 1] * 1) / (helper[(h * 1) + 1] * 1)
                has_res = true
              }
              break
          
            default:
              break
          }
        }
      }
      self.screen = res
    }
  },
  mounted () {
  },
  created () {
  }
}
</script>

<style>
@import './../styles/Calc.css';
</style>