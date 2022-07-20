import React from 'react'

import MainNav from './MainNav'
import SecondaryNav from './SecondaryNav'

const NavContainer = ({ showNav, toggleNav }) => {
  return (
    <div className='fixed top-0 w-full bg-white  '>
      {/* Main Nav */}
      <MainNav toggleNav={toggleNav} showNav={showNav} />

      {/* Secondary Nav  */}
      {showNav && <SecondaryNav />}
    </div>
  )
}

export default NavContainer
