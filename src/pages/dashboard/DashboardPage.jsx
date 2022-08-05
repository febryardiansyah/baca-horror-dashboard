import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import SideBar from '../../components/sidebar/SideBar'

const DashboardPage = () => {
  const navigate = useNavigate()
  const user = useSelector(state => state.user);
  console.log(`USER STATE => ${user}`);
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