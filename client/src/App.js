import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Landing from './Pages/Landing'
import Register from './Pages/Register'
import SharedLayout from './Pages/SharedLayout'
import ProtectedRoute from './Pages/ProtectedRoute'

import StatsCards from './components/StatsCards'
import AddJobForm from './components/AddJobForm'
import ProfileForm from './components/ProfileForm'
import AllJobsContainer from './components/AllJobsContainer'
import Error from './components/Error'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='mt-48'>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AllJobsContainer />} />
          <Route path='add-job' element={<AddJobForm />} />
          <Route path='profile' element={<ProfileForm />} />
          {/* <Route path='all-jobs' element={<AllJobsContainer />} /> */}
          <Route path='stats' element={<StatsCards />} />
        </Route>

        <Route path='/landing' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer
        position='top-center'
        className='capitalize text-center'
      />
    </div>
  )
}

export default App
