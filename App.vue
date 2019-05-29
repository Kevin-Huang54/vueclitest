<template>
  <div id="app">
    <h1>热菜</h1>
    <Hot></Hot>
    <h1>凉菜</h1>
    <Cold></Cold>
  </div>
</template>
<script>
import Hot from './components/Dishes/Hot'
import Cold from './components/Dishes/Cold'
export default {
  components: {
    Hot,
    Cold
  }
}
</script>
<style>
  /*body{*/
  /*  background: #434343;*/
  /*}*/
</style>
