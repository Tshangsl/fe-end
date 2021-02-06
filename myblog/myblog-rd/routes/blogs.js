// const router = require('koa-router')()
// const blog = require('../controllors/blog')
// const { verifyToken } = require('../auth')

// router.prefix('/blog')

// // 该函数有很多参数
// router.get('/list',verifyToken, blog.listBlog);

// router.get('/detail',verifyToken,async (ctx, next) => {
//     let blog = {
//       blog_id: ctx.query.blogId,
//       title: '标题一',
//       content: '内容一',
//       post_time: new Date()
//     }
//     ctx.body = {
//       state: 'success',
//       blog
//     }
//   })

// router.post('/post', blog.postBlog)

// module.exports = router
const router = require("koa-router")();
const blog = require('../controllers/blog')
const { verifyToken } = require("../auth");

router.prefix("/blog");

router.get("/list", verifyToken, blog.listBlog);

// router.get('/delete',verifyToken,blog.delete)

router.get("/detail", verifyToken, async (ctx, next) => {
  
  let blog = {
    blog_id: ctx.query.blogId,
    title: '标题11',
    content: '内容111',
    post_time: new Date()
  };
  
  ctx.body = {
    state: "success",
    blog,
  };
});

router.post('/post', blog.postBlog);

module.exports = router;

