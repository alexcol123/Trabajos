require('dotenv').config()
require('express-async-errors')

// Extra security packages
// const helmet = require('helmet')
// const cors = require('cors')
// const xss = require('xss-clean')
// const rateLimiter = require('express-rate-limit')

const express = require('express')
const app = express()

// ConnectDB
const connectDB = require('./db/connect')
//const authenticateUser = require('./middleware/authentication')

// Routers
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')

// Error Handler
const notFoundMiddleware = require('./middleware/not-found')

// Extra security

// Middleware
app.use(express.json())

// routes
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/job', jobsRouter)

app.use(notFoundMiddleware)

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
