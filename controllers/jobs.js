const Job = require('../models/Job')
const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')

const {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} = require('../errors')

const createJob = async (req, res) => {
  // AUTHENTICATION moved to middleware
  // const authHeader = req.headers.authorization
  // if (!authHeader || !authHeader.startsWith('Bearer ')) {
  //   throw new UnauthenticatedError('Authentication Invalid')
  // }
  // const token = authHeader.split(' ')[1]
  // const payload = jwt.verify(token, process.env.JWT_SECRET)
  //  req.user = { userId: payload.userId, name: payload.name }

  req.body.createdBy = req.user.userId

  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({ job })
}

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt')

  res.status(StatusCodes.OK).json({ count: jobs.length, jobs })
}

const getJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req

  const job = await Job.findOne({ _id: jobId, createdBy: userId })

  if (!job) throw new NotFoundError(`No job found with id ${jobId}`)

  res.status(StatusCodes.OK).json({ job })
}

const updateJob = async (req, res) => {
  const {
    body: { company, position },
    user: { userId },
    params: { id: jobId },
  } = req

  if (company === '' || position === '') {
    throw new BadRequestError('Company or position fields are required')
  }

  const job = await Job.findByIdAndUpdate(
    { _id: jobId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  )

  if (!job) throw new NotFoundError(`No job found with id ${jobId}`)

  res.status(StatusCodes.OK).json({ job })
}

const deleteJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req

  const job = await Job.findByIdAndRemove({ _id: jobId, createdBy: userId })

  if (!job) throw new NotFoundError(`No job found with id ${jobId}`)

  res.status(StatusCodes.OK).json(' Job deleted ')
}

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
}
