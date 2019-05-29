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
  props: ['typeId'],
  created () {
  // 从后端获取分类列表，绑定到dishes
    this.$axios.get('http://127.0.0.1:8085/selectdishes',
      { params: { typeId: this.typeId } }) // 这里的typeId是子组件传来的参数
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
