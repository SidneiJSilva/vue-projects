<template>
  <div class="page">
    <div class="body">
      <div class="container_table_header">
        <div class="item">Moeda</div>
        <div class="item_value">Compra</div>
        <div class="item_value">Venda</div>
        <div class="item_value">Última</div>
      </div>
      <div v-for="(item, index) in data" :key="index"
        class="container"
        :style="data.length === 1 ? 'padding-top: .5rem; padding-bottom: .5rem; border-radius: 0px 0px 10px 10px;' :
        index === data.length - 1 ? 'border-radius: 0px 0px 10px 10px; padding-bottom: .5rem;' :
        index === 0 ? 'padding-top: .5rem;' : ''">
        <div class="item">{{ item.pair }}</div>
        <div class="item_value">{{ setValue(item.buy) }}</div>
        <div class="item_value">{{ setValue(item.sell) }}</div>
        <div class="item_value"
          :style="`color: ${calculate(index)}`">{{ setValue(item.last) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// import Btc from 'vue-material-design-icons/CurrencyBtc.vue';
// import Cloud from 'vue-material-design-icons/Cloud.vue';
export default {
  data () {
    return {
      symbols: 'BTC-BRL',
      url: 'https://api.mercadobitcoin.net/api/v4',
      show_status: false,
      data: [],
      interval: undefined
    }
  },
  components: {
    // Btc,
    // Cloud
  },
  methods: {
    pageTo () {
      const self = this
      self.$router.push('/vuex')
    },
    calculate (index) {
      const self = this
      if (index === self.data.length - 1) return 'grey'
      if (self.data.length === 1) return 'grey'
      if (self.data[index].last * 1 > self.data[index + 1].last * 1) {
        return 'green'
      } else if (self.data[index].last * 1 === self.data[index + 1].last * 1) {
        return 'grey'
      } else {
        return 'red'
      }
    },
    setValue (value) {
      let v = value * 1
      return v.toFixed(4)
    },
    // setStatus (status) {
    //   const self = this
    //   let el = document.getElementById('cloud')
    //   if (status) {
    //     el.style.setProperty('--color', '#20c997')
    //   } else {
    //     el.style.setProperty('--color', 'orange')
    //   }
    //   self.show_status = true
    // },
    getData () {
      const self = this
      let params = new URLSearchParams()
      params.append('symbols', self.symbols)
      self.$axios({
        url: `${self.url}/tickers`,
        params: params
      })
        .then(res => {
          if (res.status === 200) {
            // self.setStatus(true)
            self.data.unshift(res.data[0])
            if (self.data.length > 15) self.data.splice(15, 1)
          } else {
            // self.setStatus(false)
          }
        })
        .catch(() => {
          // self.setStatus(false)
        })
    }
  },
  mounted () {
    const self = this
    self.getData()
    self.interval = setInterval(() => {
      self.getData()
    }, 5000)
  },
  beforeDestroy () {
    const self = this
    clearInterval(self.interval)
  }
}
</script>

<style>
@import './../styles/Btc.css';
</style>
