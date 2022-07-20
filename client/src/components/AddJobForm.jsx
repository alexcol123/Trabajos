import React from 'react'

const AddJobForm = () => {
  return (
    <div className='max-w-7xl mx-auto  '>
    {/* Form  */}
    <div className='bg-white w-full py-12 px-10  border shadow-md'>
      <h2 className='text-2xl'>Add Job </h2>

      <div
        className='mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3
      '
      >
        <div className=''>
          <label
            class='block text-gray-500 text-md font-bold mb-2'
            for='Position'
          >
            Position
          </label>
          <input
            className='shadow appearance-none border w-full py-2 px-3 text-gray-500  bg-primary50 leading-tight  focus:shadow-outline '
            id='Position'
            type='Position'
            placeholder='Position'
          />
        </div>

        <div className=''>
          <label
            class='block text-gray-500 text-md font-bold mb-2'
            for='company'
          >
            Company
          </label>
          <input
            className='shadow appearance-none border w-full py-2 px-3 text-gray-500  bg-primary50 leading-tight  focus:shadow-outline '
            id='company'
            type='company'
            placeholder='company'
          />
        </div>

        <div className=''>
          <label
            class='block text-gray-500 text-md font-bold mb-2'
            for='location'
          >
            Job Location
          </label>
          <input
            className='shadow appearance-none border w-full py-2 px-3 text-gray-500  bg-primary50 leading-tight  focus:shadow-outline '
            id='location'
            type='location'
            placeholder='location'
          />
        </div>

        <div className=''>
          <label
            class='block text-gray-500 text-md font-bold mb-2'
            for='status'
          >
            Status
          </label>

          <select
            id='status'
            name='status'
            className='shadow  border w-full py-2 px-3 text-gray-500  bg-primary50 leading-tight  focus:shadow-outline'
          >
            <option selected>interview</option>
            <option>decline</option>
            <option>pending</option>
          </select>
        </div>

        <div className=''>
          <label
            class='block text-gray-500 text-md font-bold mb-2'
            for='type'
          >
            Job Type
          </label>

          <select
            id='type'
            name='type'
            className='shadow  border w-full py-2 px-3 text-gray-500  bg-primary50 leading-tight  focus:shadow-outline'
          >
            <option selected>full-time</option>
            <option>part-time</option>
            <option>remote</option>
            <option>internship</option>
          </select>
        </div>

        <div className='flex self-end  gap-4'>
          <button className='btnFull bg-gray-500 text-white  py-1 hover:bg-black hover:text-white hover:opacity-100 duration-500 '>
            Clear
          </button>

          <button className='btnFull bg-primary text-white  py-1 hover:bg-primary800 hover:text-white  hover:opacity-100 duration-500 '>
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>

  )
}

export default AddJobForm