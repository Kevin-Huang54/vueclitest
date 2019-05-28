<template>
  <div id="app">
    <SideBar></SideBar>
    <router-view></router-view>
  </div>
</template>
<script>
import SideBar from './components/SideBar'
export default {
  components: {
    SideBar
  }
}
</script>
<style>
  /*body{*/
  /*  background: #434343;*/
  /*}*/
</style>
