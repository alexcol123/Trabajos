require('dotenv').config()
require('express-async-errors')

// Extra security packages
const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')

const express = require('express')
const app = express()

// ConnectDB
const connectDB = require('./db/connect')
const authenticateUser = require('./middleware/authentication')

// Routers
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')

// Error Handler
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// Extra security
// code bellow is to be used when i use rate limiter , before i push to heroky
// app.set('trust proxy', 1)
// app.use(
//   rateLimiter({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 500,
//   })
// )
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(xss())

// routes
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/job', authenticateUser, jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log('error')
  }
}

start()
