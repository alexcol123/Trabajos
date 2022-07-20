import React, { useState, useEffect } from 'react'
import Logo from '../components/Logo'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, registerUser } from '../features/user/userSlice'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}



const Register = () => {
  const { user, isLoading } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const [values, setValues] = useState(initialState)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values

    if (!email || !password || (!isMember && !name)) {
      toast.error('Please fill out all fields.')
      return
    }

    if (isMember) {
      dispatch(loginUser({ email, password }))
      return
    }

    dispatch(registerUser({ name, email, password }))
  }

  const toggleIsMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }
  return (
    <div className='max-w-7xl  mx-auto flex flex-col h-screen p-10'>
      <div className='flex  flex-col  items-center justify-center bg-white w-[400px] border-t-4 border-t-primary p-8 mx-auto border shadow-lg'>
        <Logo />
        <form onSubmit={handleSubmit} className='flex flex-col    w-full'>
          <h1 className='py-6 text-4xl font-semibold  text-gray-500 text-center '>
            {values.isMember ? 'Login' : 'Register'}
          </h1>

          {!values.isMember && (
            <div className='mb-8'>
              <label
                className='block text-gray-500 text-sm font-bold mb-2'
                htmlFor='name'
              >
                Name
              </label>
              <input
                className='shadow appearance-none border w-full py-2 px-3 text-gray-500  bg-primary50 leading-tight  focus:shadow-outline '
                id='name'
                value={values.name}
                onChange={handleChange}
                name='name'
                type='text'
                placeholder='Name'
                autoComplete='true'
              />
            </div>
          )}

          <div className='mb-8'>
            <label
              className='block text-gray-500 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='shadow appearance-none border w-full py-2 px-3 text-gray-500  bg-primary50 leading-tight  focus:shadow-outline '
              id='email'
              value={values.email}
              onChange={handleChange}
              name='email'
              type='email'
              placeholder='Email'
              autoComplete='true'
            />
          </div>

          <div className='mb-8'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='shadow appearance-none border w-full py-2 px-3 text-gray-700  bg-primary50 leading-tight  focus:shadow-outline '
              id='password'
              value={values.password}
              onChange={handleChange}
              name='password'
              type='password'
              placeholder='Password'
              autoComplete='true'
            />
          </div>

          <div className='mb-4 '>
            <button type='submit' className='btnFull bg-primary text-white'>
              Submit
            </button>
          </div>

          <div className='mb-8'>
            <button
              type='button'
              className='btnFull bg-primary300 text-primary700'
            >
              Demo App
            </button>
          </div>

          <div className='text-center flex justify-center items-center'>
            {values.isMember ? (
              <p>Not a member yet? </p>
            ) : (
              <p>Already a member </p>
            )}
            <button
              type='button'
              onClick={toggleIsMember}
              className='text-primary font-semibold ml-2'
            >
              {!values.isMember ? 'Login' : 'Register'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
