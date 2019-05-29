<template>
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
      typeId: 2
    }
  }
}
</script>
