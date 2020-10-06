const Router = require('@koa/router');
const router = new Router()

router
.get('/posts', async (ctx, next) => {
    console.log("Trying to get all blog posts")
    ctx.body = await ctx.db.models.Post.findAll()
})
.get('/posts/:id', async (ctx, next) => {
    console.log("Trying to get post with id " + ctx.params.id)
    ctx.body = await ctx.db.models.Post.findAll({ where: { id: ctx.params.id } })
})
.post('/posts', async (ctx, next) => {
    let body = ctx.request.body
    console.log("Trying to create post with body " + JSON.stringify())
    ctx.body = await ctx.db.models.Post.create({ title: body.title, content: body.content })
})
.put('/posts/:id', async (ctx, next) => {
    let post = await ctx.db.models.Post.findByPk(ctx.params.id)
    if(post !== null) {
        console.log("Trying to update post with body " + ctx.params.id)
        let body = ctx.request.body
        post.update({
            title: body.title,
            content: body.content
        });
    }

    ctx.status = 200

})
.del('/posts/:id', async (ctx, next) => {
    let post = await ctx.db.models.Post.findByPk(ctx.params.id)
    console.log("Trying to delete post with id " + ctx.params.id)
    if(post !== null) {
        post.destroy()
    }
    ctx.status = 200
});

module.exports = router