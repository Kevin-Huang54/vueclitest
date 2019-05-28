<template>
  <ul>
    <router-link v-for="item in types" tag='li' :to="'/dishes/'+item.path">{{item.name}}</router-link>
    <router-view></router-view>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      types: ''
    }
  },
  // 从后端获取分类列表，绑定到types
  created () {
    this.$axios.get('http://127.0.0.1:8085/selecttype')
      .then(res => {
        if (res.data !== 'success') {
          this.types = res.data
        }
      })
      .catch(
        err => {
          console.log(err)
        }
      )
  }
}
</script>
