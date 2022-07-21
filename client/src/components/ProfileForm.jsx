import React from 'react'

const ProfileForm = () => {
  return (
    <div className='max-w-7xl  mx-auto '>
      {/* Form  */}
      <div className='bg-white w-full py-12 px-10  border shadow-md'>
        <h2 className='text-2xl'>Profile </h2>

        <div
          className='mt-6 grid gap-6 sm:grid-cols-2 
      '
        >
          <div className=''>
            <label
              className='block text-gray-500 text-md font-bold mb-2'
              htmlFor='firstName'
            >
              First Name
            </label>
            <input
              className='shadow appearance-none border w-full py-2 px-3 text-gray-500  bg-primary50 leading-tight  focus:shadow-outline '
              id='firstName'
              type='firstName'
              placeholder='firstName'
            />
          </div>

          <div className=''>
            <label
              className='block text-gray-500 text-md font-bold mb-2'
              htmlFor='lastName'
            >
              Last Name
            </label>
            <input
              className='shadow appearance-none border w-full py-2 px-3 text-gray-500  bg-primary50 leading-tight  focus:shadow-outline '
              id='lastName'
              type='lastName'
              placeholder='lastName'
            />
          </div>

          <div className=''>
            <label
              className='block text-gray-500 text-md font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='shadow appearance-none border w-full py-2 px-3 text-gray-500  bg-primary50 leading-tight  focus:shadow-outline '
              id='email'
              type='email'
              placeholder='email'
            />
          </div>

          <div className=''>
            <label
              className='block text-gray-500 text-md font-bold mb-2'
              htmlFor='location'
            >
              Location
            </label>
            <input
              className='shadow appearance-none border w-full py-2 px-3 text-gray-500  bg-primary50 leading-tight  focus:shadow-outline '
              id='location'
              type='location'
              placeholder='location'
            />
          </div>

          <div className='flex self-end  gap-4'>
            <button className='btnFull bg-gray-500 text-white  py-1 hover:bg-black hover:text-white hover:opacity-100 duration-500 '>
              Clear
            </button>

            <button className='btnFull bg-primary text-white  py-1 hover:bg-primary800 hover:text-white  hover:opacity-100 duration-500 '>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileForm
