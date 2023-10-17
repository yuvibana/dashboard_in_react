import React, { useState } from 'react'
import AsideBar from './dashboard/AsideBar'
import DashboardRightBar from './dashboard/DashboardRightBar'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggelmenu = () => {
    setIsOpen((open) => !open)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }


  return (
    <div className='dahboardWrapper dflex '>
      <AsideBar
        isOpen={isOpen}
        closeMenu={closeMenu}
      />
      <DashboardRightBar
        toggelmenu={toggelmenu}
      />
    </div>
  )
}
