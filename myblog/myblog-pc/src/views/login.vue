<template>
  <!-- 前后端分离的请求 全都是ajax异步请求 不会有render之类的 -->
  <div class="container">
    <div class="login-form">
      <h3>用户登录</h3>
      <p>用户名：<input type="text" name="username" v-model="username" /></p>
      <p>密码：<input type="password" name="password" v-model="password" /></p>
      <p>
        <button @click="doLogin" class="btn">登录</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    doLogin() {
      this.$http
        .post("/user/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          // 存在state中 浏览器不关闭 始终有
          let { state, token ,user} = res.data;
          if (state == "success") {
            // 登录成功
            // 存储用户信息
            // this.$store.dispatch('storeLoginUser',user)
            this.$store.commit('storeLoginUser',user)

            //调用mutations中的方法是commit方法 
            // 存储token
            // 1.vuex中(state) 2.cookie中 3.localStorage|session中
            // 本项目中操作把token存储到localStorage和vuex中

            // 调用action中的方法是dispatch
            this.$store.dispatch("setToken", token);
            this.$router.push("/");
          } else {
            alert("用户名或密码不正确");
          }
        });
    },
  },
};
</script>

<style scoped>
.login-form {
  width: 650px;
  background: #cccccc;
  margin: 40px auto;
  padding: 20px 0;
  text-align: center;
}
.login-form p {
  padding: 20px 0;
}

.btn {
  width: 70px;
}
</style>