import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const ProfileForm = () => {
  const { isLoading, user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const [userData, setUserData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    country: user?.country || '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { firstName, email, lastName, country } = userData

    if (!firstName || !email || !lastName || !country) {
      toast.error('Plese fill out all fields!')
    }

  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setUserData({ ...userData, [name]: value })
  }

  return (
    <div className='max-w-7xl  mx-auto '>
      {/* Form  */}
      <div className='bg-white w-full py-12 px-10  border shadow-md'>
        <h2 className='text-2xl'>Profile </h2>

        <form
          onSubmit={handleSubmit}
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
              name='firstName'
              value={userData.firstName}
              onChange={handleChange}
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
              name='lastName'
              value={userData.lastName}
              onChange={handleChange}
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
              name='email'
              value={userData.email}
              onChange={handleChange}
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
              name='country'
              value={userData.country}
              onChange={handleChange}
              type='location'
              placeholder='location'
            />
          </div>

          <div className='flex self-end  gap-4'>
            <button
              type='button'
              className='btnFull bg-gray-500 text-white  py-1 hover:bg-black hover:text-white hover:opacity-100 duration-500 '
            >
              Clear
            </button>

            <button
              type='submit'
              className='btnFull bg-primary text-white  py-1 hover:bg-primary800 hover:text-white  hover:opacity-100 duration-500 '
            >
              {isLoading ? 'Please wait...' : 'Save changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfileForm
