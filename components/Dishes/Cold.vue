<template>
  <ul>
    <li v-for="item in dishes">{{item.name}} {{item.price}}元/份</li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      dishes: ''
    }
  },
  // 从后端获取分类列表，绑定到dishes
  created () {
    this.$axios.get('http://127.0.0.1:8085/selectdishes', { params: { typeId: 1 } })
      .then(res => {
        this.dishes = res.data
      })
      .catch(
        err => {
          console.log(err)
        }
      )
  }
}
</script>
