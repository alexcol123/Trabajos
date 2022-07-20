import React from 'react'

const StatsCard = ({
  borderCol,
  textContent,
  textCol,
  numberToShow,
  iconBackCol,

  icon,
}) => {
  return (
    <div
      className={`bg-white   px-1 py-4 md:py-8 md:px-8  border-b-4 ${borderCol} hover:shadow-lg  `}
    >
      <div className='flex flex-col  md:flex-row justify-between items-center'>
        <div className={`${iconBackCol}  p-2  md:p-3 `}>
          <div className={`${textCol}   text-3xl md:text-4xl`}> {icon}</div>
        </div>
        <p
          className={`${textCol}   text-2xl md:text-5xl lg:text-6xl font-semibold`}
        >
          {numberToShow}
        </p>
      </div>
      <div className='md:mt-4 '>
        <p className=' text-center md:text-left text-md sm:text-lg lg:text-xl  font-semibold text-gray-500'>
          {textContent}
        </p>
      </div>
    </div>
  )
}

export default StatsCard
