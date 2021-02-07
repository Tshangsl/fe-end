<template>
  <div class="container">
    <div class="blog">
      <div class="blog-title">
        <h3 style="color: red">{{ blog && blog.blog_id }}</h3>
        <h3>{{ blog && blog.title }}</h3>
        <span>{{ blog && blog.post_time }}</span>
      </div>
      <!-- <span>'blog_id'+{{blog&&blog.blog_id}}</span> -->
      <div class="blog-content">{{ blog && blog.content }}</div>
      <div class="comments">
        <h4>评论</h4>
        <div class="comment" v-for="item in blog.comments" :key="item.blog_id">
          <div class="comment-id">{{item&& item.comm_id}}</div>
          <div class="comment-content">{{item&&item.comm_content}}</div>
          <div class="comment-info">
            <span class="userinfo">{{item&&item.username}}</span>
            <span class="post-time">{{item&&item.comm_post_time}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blog: null,
    };
  },
  created() {
    this.getBlogDetail();
  },
  methods: {
    getBlogDetail() {
      let blog_id = this.$route.params.blog_id;
      console.log(blog_id);
       this.$http
         .get("/blog/detail", {
          params: {
            blog_id: blog_id,
          },
        })
        .then((res) => {
          let { state, blog } = res.data;
          if(state == 'auth-fail'){
            alert('请求未授权!')
          }else if (state == "success") {
            this.blog = blog;
            console.log(blog);
          }
        });
    },
  },
};
</script>

<style scoped>
.blog {
  margin: 20px auto;
  padding: 20px;
  background: #32c1fb;
}
.blog-title {
  padding: 10px;
}
.blog-content {
  padding: 10px;
}
.comment {
  padding: 20px;
}
.comment-info {
  float: right;
}
</style>
