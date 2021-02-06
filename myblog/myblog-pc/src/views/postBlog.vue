<template>
  <div class="container">
    <div class="art-related">
      <div class="art-title">
        <el-input
          v-model="title"
          placeholder="请输入标题"
          style="width: 200px"
        ></el-input>
      </div>
      <div class="art-content">
        <el-input
          type="textarea"
          :rows="10"
          placeholder="请输入内容"
          v-model="content"
          style="width: 636px"
        >
        </el-input>
      </div>
      <el-row>
        <el-button @click="postBlog" plain>发表文章</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  created() {},
  methods: {
    postBlog() {
      let loginUser = this.$store.state.loginUser;
      if (loginUser) {
        this.$http
          .post("/blog/post", {
            title: this.title,
            content: this.content,
            userId: loginUser.user_id,
          })
          .then((res) => {
            let { state } = res.data;
            if (state == "success") {
              this.$router.push("/");
            } else {
              alert("发表文章失败!");
            }
          });
      } else {
        alert("请登陆后再进行操作!!");
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  .art-related {
    margin: 20px auto;
    width: 800px;
    height: 400px;
    border-radius: 10px;
    background-color: #32c1fb;
    overflow: hidden;
    .art-title {
      margin: 30px auto;
    }
    .art-content {
      margin: 20px auto;
    }
  }
}
</style>