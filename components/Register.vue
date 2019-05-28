<template>
  <div>
    <p>账号：<input type="text" v-model="username"></p>
    <p>密码：<input type="password" v-model="password"></p>
    <p>重复密码：<input type="password" v-model="confirmPw"></p>
    <p>手机号：<input type="phone" v-model="phone"></p>
    <button @click="register">注册</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      confirmPw: '',
      phone: ''
    }
  },
  methods: {
    register () {
      if (this.password !== this.confirmPw) {
        alert('两次密码不一致')
        return
      }
      const regData = { userName: this.username, userPw: this.password, userPhoneNumber: this.phone }
      this.$axios.post('http://127.0.0.1:8085/register', regData)
        .then(res => {
          if (res.data !== 'success') {
            alert(res.data)
            return
          }
          this.$router.push('/home')
        }).catch(
          err => {
            console.log(err)
          }
        )
    }
  }
}
</script>
