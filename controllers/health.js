const Router = require('@koa/router');
const router = new Router()
var newrelic = require('newrelic');

router
.get('/health', (ctx, next) => {
    ctx.body = {status: 'ok'}
})
.get('/error', (ctx, next) => {
    try {
        throw new Error("My custom error message")
    } catch (e) {
        console.log(e)
        newrelic.noticeError(e)
    }
    ctx.body = {status: 'error'}
})

module.exports = router