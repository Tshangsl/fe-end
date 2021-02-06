<template>
  <div class="login_container">
    <h1>SIGN TO LI'S BLOG</h1>
    <div class="login_box">
      <el-form size="mini">
        <el-form-item>
          <el-input v-model="username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="password" placeholder="密码" show-password></el-input>
        </el-form-item>
        <!-- <el-form-item>
          <el-checkbox label="记住我" class="rememberMe"></el-checkbox>
        </el-form-item> -->
        <el-form-item>
          <el-button @click="doLogin" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
      style="height:100%"
    >
    </vue-particles>

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
          let { state, token, user } = res.data;
          if (state == "success") {
            // 登录成功
            // 存储用户信息
            // this.$store.dispatch('storeLoginUser',user)
            this.$store.commit("storeLoginUser", user);

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
.login_container {
  /* background-image: linear-gradient(-180deg, #1a1454 0%, #0e81a5 100%); */
  /* background-image: url("../assets/login.jpg"); */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  width: 100%;
  height: 100%;
  background-color: #99ccff;
  font-size: 13px;
  font-weight: 100;
  /* height: 100%; */
}
.login_box {
  width: 308px;
  height: 228px;
  /* background-color: #fff; */
  background-color: #F2F6FC;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.el-form {
  padding: 32px;
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
}
.el-button {
  width: 100%;
}
.code {
  width: 45%;
}
img {
  /* style="width: 100px; height: 30px; margin-left:5px;vertical-align: middle;" */
  display: line-inline;
  width: 45%;
  height: 28px;
  margin-left: 10px;
  vertical-align: middle;
  border-radius: 3px;
}
.rememberMe {
  color: #fff;
}
</style>