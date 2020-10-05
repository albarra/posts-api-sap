const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    logQueryParameters: process.env.DB_LOG,
    dialect: 'mysql'
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection success!')
  })
  .catch((err) => {
    console.error('Unable to connect to the database', err)
  })

const Post = sequelize.define('posts', { title: Sequelize.TEXT, content: Sequelize.TEXT });

sequelize.sync()

const db = {
	Sequelize: Sequelize,
	sequelize: sequelize,
	models: {
		Post
	}
}

module.exports = {
    db: db,
    Post: Post
}