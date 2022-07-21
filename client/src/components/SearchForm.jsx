import React from 'react'

const SearchForm = () => {
  return (
    <div className='max-w-7xl  mx-auto'>
      {/* Form  */}
      <div className='bg-white w-full py-12 px-10  border shadow-md'>
        <h2 className='text-2xl'>Search Form </h2>

        <div
          className='mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3
      '
        >
          <div className=''>
            <label
              className='block text-gray-500 text-md font-bold mb-2'
              htmlFor='search'
            >
              Search
            </label>
            <input
              className='shadow appearance-none border w-full py-2 px-3 text-gray-500  bg-primary50 leading-tight  focus:shadow-outline '
              id='search'
              type='search'
              placeholder='Search'
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
            >
              <option>All</option>
              <option>interviewed</option>
              <option>declined</option>
              <option>pending</option>
            </select>
          </div>

          <div className=''>
            <label
              className='block text-gray-500 text-md font-bold mb-2'
              htmlFor='type'
            >
              Type
            </label>

            <select
              id='type'
              name='type'
              className='shadow  border w-full py-2 px-3 text-gray-500  bg-primary50 leading-tight  focus:shadow-outline'
            >
              <option>All</option>
              <option>full-time</option>
              <option>part-time</option>
              <option>remote</option>
              <option>internship</option>
            </select>
          </div>

          <div className=''>
            <label
              className='block text-gray-500 text-md font-bold mb-2'
              htmlFor='sort'
            >
              Sort
            </label>

            <select
              id='sort'
              name='sort'
              className='shadow  border w-full py-2 px-3 text-gray-500  bg-primary50 leading-tight  focus:shadow-outline'
            >
              <option>Latest</option>
              <option>oldest</option>
              <option>a-z</option>
              <option>z-a</option>
            </select>
          </div>

          <div className='self-end md:mt-2 '>
            <button className='btnFull bg-red-100 text-red-900  py-1 hover:bg-red-900 hover:text-white duration-500 '>
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchForm
