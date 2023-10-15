import React from 'react'
import AsideBar from './dashboard/AsideBar'
import DashboardRightBar from './dashboard/DashboardRightBar'

export default function Home() {
  return (
    <div className='dahboardWrapper dflex '>
      <AsideBar />
      <DashboardRightBar />
    </div>
  )
}
