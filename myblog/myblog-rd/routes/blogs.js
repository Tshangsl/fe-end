const router = require("koa-router")();
const blog = require('../controllers/blog')
const { verifyToken } = require("../auth");

router.prefix("/blog");

router.get("/list", verifyToken, blog.listBlog);


router.get("/detail", verifyToken, blog.getBlogDetail);

router.get('/del',verifyToken,blog.changeBlog)

router.post('/post', blog.postBlog);

module.exports = router;

