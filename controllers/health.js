const Router = require('@koa/router');
const router = new Router()

router
.get('/health', (ctx, next) => {
    ctx.body = {status: 'ok'}
})

module.exports = router