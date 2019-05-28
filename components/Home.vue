<template>
  <div>
    <h2>点餐系统</h2>
    <button @click="back">回退</button>
    <button @click="startOrder">开始点菜</button>
  </div>
</template>
<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    },
    startOrder () {
      this.$router.push('/dishes')
    }
  }
}
</script>
