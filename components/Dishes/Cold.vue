<template>
  <!--typeId是DishList组件的props，通过这种方法传递参数-->
  <DishList :typeId="typeId"></DishList>
</template>
<script>
import DishList from './DishList'
export default {
  components: {
    DishList
  },
  data () {
    return {
      typeId: 1 // 1在数据库里就对应了热菜
    }
  }
}
</script>
