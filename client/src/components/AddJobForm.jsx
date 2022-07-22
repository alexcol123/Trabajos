import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import {
  handleChange,
  clearValues,
  createJob,
} from '../features/job/jobSlice.js'

const AddJobForm = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobTypeOptions,
    jobType,
    statusOptions,
    status,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job)

  console.log(position, company, jobLocation)

  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!jobLocation || !position || !company) {
      toast.error('Please include Job Location, Position and Company')
    }

    dispatch(createJob({ position, company, jobType, jobLocation, status }))
  }

  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value

    dispatch(handleChange({ name, value }))
  }

  return (
    <div className='max-w-7xl mx-auto  '>
      {/* Form  */}
      <div className='bg-white w-full py-12 px-10  border shadow-md'>
        <h2 className='text-2xl'>Add Job </h2>

        <form
          onSubmit={handleSubmit}
          className='mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3
      '
        >
          <div className=''>
            <label
              className='block text-gray-500 text-md font-bold mb-2'
              htmlFor='position'
            >
              Position
            </label>
            <input
              className='shadow appearance-none border w-full py-2 px-3 text-gray-500  bg-primary50 leading-tight  focus:shadow-outline '
              id='position'
              type='text'
              name='position'
              placeholder='position'
              value={position}
              onChange={handleJobInput}
            />
          </div>

          <div className=''>
            <label
              className='block text-gray-500 text-md font-bold mb-2'
              htmlFor='company'
            >
              Company
            </label>
            <input
              className='shadow appearance-none border w-full py-2 px-3 text-gray-500  bg-primary50 leading-tight  focus:shadow-outline '
              id='company'
              type='text'
              name='company'
              placeholder='company'
              value={company}
              onChange={handleJobInput}
            />
          </div>

          <div className=''>
            <label
              className='block text-gray-500 text-md font-bold mb-2'
              htmlFor='jobLocation'
            >
              Job Location
            </label>
            <input
              className='shadow appearance-none border w-full py-2 px-3 text-gray-500  bg-primary50 leading-tight  focus:shadow-outline '
              id='jobLocation'
              type='text'
              name='jobLocation'
              placeholder='Job location'
              value={jobLocation}
              onChange={handleJobInput}
            />
          </div>

          <div className=''>
            <label
              className='block text-gray-500 text-md font-bold mb-2'
              htmlFor='status'
            >
              Status
            </label>

            <select
              id='status'
              name='status'
              className='shadow  border w-full py-2 px-3 text-gray-500  bg-primary50 leading-tight  focus:shadow-outline'
              value={status}
              onChange={handleJobInput}
            >
              {statusOptions.map((itemValue, index) => {
                return (
                  <option key={index} value={itemValue}>
                    {itemValue}
                  </option>
                )
              })}
            </select>
          </div>

          <div className=''>
            <label
              className='block text-gray-500 text-md font-bold mb-2'
              htmlFor='type'
            >
              Job Type
            </label>

            <select
              id='jobType'
              name='jobType'
              className='shadow  border w-full py-2 px-3 text-gray-500  bg-primary50 leading-tight  focus:shadow-outline'
              value={jobType}
              onChange={handleJobInput}
            >
              {jobTypeOptions.map((itemValue, index) => {
                return (
                  <option key={index} value={itemValue}>
                    {itemValue}
                  </option>
                )
              })}
            </select>
          </div>

          <div type='button' className='flex self-end  gap-4'>
            <button className='btnFull bg-gray-500 text-white  py-1 hover:bg-black hover:text-white hover:opacity-100 duration-500 '>
              Clear
            </button>

            <button
              type='submit'
              className='btnFull bg-primary text-white  py-1 hover:bg-primary800 hover:text-white  hover:opacity-100 duration-500 '
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddJobForm
