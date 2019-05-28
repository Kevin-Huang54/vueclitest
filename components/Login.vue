<template>
  <div>
      <p>账号：<input type="text" v-model="username"></p>
      <p>密码：<input type="password" v-model="password"></p>
      <button @click="login">登录</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      const loginData = { userName: this.username, userPw: this.password }
      this.$axios.get('http://127.0.0.1:8085/login',
        {
          params: loginData
        })
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
