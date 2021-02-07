const blogModel = require("../models/blogModel");

module.exports = {
  postBlog: async function (ctx, next) {
    let { title, content, userId } = ctx.request.body;
    let results = await blogModel.saveBlog(title, content, userId);
    if (results.insertId > 0) {
      ctx.body = {
        state: "success",
      };
    } else {
      ctx.body = {
        state: "fail",
      };
    }
  },
  listBlog: async (ctx, next) => {
    try {
      let results = await blogModel.getBlogs();
      if (results.length > 0) {
        ctx.body = {
          state: "success",
          blogs: results,
        };
      } else {
        ctx.body = {
          state: "fail",
        };
      }
    } catch (err) {
      ctx.status = 500;
      console.log(err);
    }
  },
  getBlogDetail: async (ctx) => {
    try {
      // 接收数据
      let { blog_id } = ctx.query;
      // 连接数据库
      let results = await blogModel.getBlogById(blog_id);
      // 根据数据库操作的结果返回相应的信息
      if (results.length > 0) {
        let { blog_id, title, content, post_time } = results[0];
        let blogInfo = {
          blog_id,
          title,
          content,
          post_time,
        };
        blogInfo.comments = [];
        for (let i = 0; i < results.length; i++) {
          let obj = results[i];
          blogInfo.comments.push({
            comm_id: obj.comm_id,
            comm_content: obj.comm_content,
            comm_post_time: obj.comm_post_time,
            username: obj.username
          });
        }
        console.log(blogInfo);
        ctx.body = {
          state: 'success',
          blog: blogInfo
        }
      } else {
        ctx.body={
          state:'fail',
          blog:'the blog is not exist!!!'
        }
      }
    } catch (err) {
      ctx.status = 500;
      console.log(err);
    }
  },
  changeBlog:async (ctx,next)=>{
    try{
      // 接收数据
      let { blog_id } = ctx.query;
      // 连接数据库
      let results = await blogModel.deleteBlog(blog_id);
      // 根据数据库操作的结果返回相关信息
      if(results.affectedRows){
        ctx.body = {
          state: 'success',
          blog: results
        }
      }else{
        ctx.body={
          state:'fail',
        }
      }
    }catch(err){
      ctx.status = 500;
      console.log(err);
    }
  }
};
