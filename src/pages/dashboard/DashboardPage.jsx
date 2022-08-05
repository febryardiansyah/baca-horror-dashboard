import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import SideBar from '../../components/sidebar/SideBar'

const DashboardPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/dashboard/story')
  }, [])
  
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  )
}

export default DashboardPage