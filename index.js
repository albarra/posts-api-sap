require('dotenv').config()
const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

const postsController = require('./controllers/posts')
const healthController = require('./controllers/health')

app.context.db = require('./repository/db').db

app.use(bodyParser());

app.use(postsController.routes())
app.use(postsController.allowedMethods())

app.use(healthController.routes())
app.use(healthController.allowedMethods())

app.listen(process.env.PORT);