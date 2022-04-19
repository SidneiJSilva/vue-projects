<template>
  <div>
    <!-- <div>
      <input type="text" v-model="number">
      <button @click="convert">CONVERT</button>
      REUSULT {{ result }}
    </div> -->
    <div class="container">
      <div>
        <div v-for="roman in romans" :key="roman" >{{ `${roman} => ${convert2(roman)}` }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        romans: ['III', 'IV', 'XLII', 'MDI', 'CMXLIX'],
        result: 0,
        number: '',
        ignore_next: false,
        values: {
          I: 1,
          IV: 4,
          V: 5,
          IX: 9,
          X: 10,
          XL: 50,
          L: 50,
          XC: 90,
          C: 100,
          CD: 400,
          D: 500,
          CM: 900,
          M: 1000
        }
      }
    },
    methods: {
      // convert () {
      //   const self = this
      //   if (!self.number) return
      //   self.result = 0
      //   for (let key in self.number) {
      //     if (self.ignore_next) {
      //       self.ignore_next = false
      //       continue
      //     }
      //     let char = self.number[key].toUpperCase()
      //     if (key < self.number.length - 1) {
      //       let nextChar = self.number[(key * 1) + 1].toUpperCase()
      //       if (self.values[char] >= self.values[nextChar]) {
      //         self.result += self.values[char]
      //       } else {
      //         self.result += (self.values[nextChar] - self.values[char])
      //         self.ignore_next = true
      //       }
      //     } else {
      //       self.result += self.values[char]
      //     }
      //   }
      // },
      convert2 (number) {
        const self = this
        if (!number) return
        let result = 0
        let ignoreNext = false
        for (let key in number) {
          if (ignoreNext) {
            ignoreNext = false
            continue
          }
          let char = number[key].toUpperCase()
          if (key < number.length - 1) {
            let nextChar = number[(key * 1) + 1].toUpperCase()
            if (self.values[char] >= self.values[nextChar]) {
              result += self.values[char]
            } else {
              result += (self.values[nextChar] - self.values[char])
              ignoreNext = true
            }
          } else {
            result += self.values[char]
          }
        }
        return result
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>