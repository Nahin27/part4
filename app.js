const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

const mongoUrl = config.MONGO_URL

logger.info(`connecting to mongo db`)

mongoose.connect(mongoUrl).then(() => {
    logger.info(`Connected to db`)
}).catch((error) => {
    logger.error(`couldnt connect: ${error.message}`)
})

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogsRouter)

module.exports = app