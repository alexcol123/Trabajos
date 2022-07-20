import React from 'react'
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa'
import StatsCard from './StatsCard'

const StatsCards = () => {
  const defaultStats = [
    {
      borderCol: 'border-yellow-500',
      textCol: 'text-yellow-500',
      iconBackCol: 'bg-yellow-100',
      textContent: 'Pending Applications',
      numberToShow: '68',
      icon: <FaCalendarCheck />,
    },
    {
      borderCol: 'border-indigo-500',
      textCol: 'text-indigo-500',
      iconBackCol: 'bg-indigo-100',
      textContent: 'Interviews Scheduleds',
      numberToShow: '32',
      icon: <FaSuitcaseRolling />,
    },
    {
      borderCol: 'border-red-500',
      textCol: 'text-red-500',
      iconBackCol: 'bg-red-100',
      textContent: 'Jobs Declined',
      numberToShow: '9',
      icon: <FaBug />,
    },
  ]

  return (
    <div className='max-w-7xl  mx-auto '>
      <div className='grid  grid-cols-3 gap-2 md:gap-4 lg:gap-8  px-2 md:px-4  lg:px-8'>
        {/* Card 1 */}

        {defaultStats.map((item, index) => {
          console.log(item)
          return <StatsCard key={index} {...item} />
        })}
      </div>
    </div>
  )
}

export default StatsCards
