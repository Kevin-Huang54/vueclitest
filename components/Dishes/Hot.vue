<template>
  <ul>
    <li v-for="(item, index) in dishes" :key="index">{{item.name}} {{item.price}}元/份</li>
  </ul>
</template>
<script>
export default {
  props: ['dishes']
}
</script>
