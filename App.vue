<template>
  <div id="app">
    <h1>热菜</h1>
    <Hot :dishes="dishes"></Hot>
    <h1>凉菜</h1>
    <Cold :dishes="dishes"></Cold>
  </div>
</template>
<script>
import Hot from './components/Dishes/Hot'
import Cold from './components/Dishes/Cold'
export default {
  components: {
    Hot,
    Cold
  },
  data () {
    return {
      dishes: [
        { name: '可乐鸡翅', price: 34 },
        { name: '大鸡腿', price: 10 }
      ]
    }
  }
}
</script>
<style>
  /*body{*/
  /*  background: #434343;*/
  /*}*/
</style>
