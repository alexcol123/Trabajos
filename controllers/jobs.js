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
  res.send('getAllJobs ')
}

const getJob = async (req, res) => {
  res.send('getJob ')
}

const updateJob = async (req, res) => {
  res.send('updateJob ')
}

const deleteJob = async (req, res) => {
  res.send('deleteJob ')
}

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
}
