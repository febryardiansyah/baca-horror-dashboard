import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import SideBar from '../../components/sidebar/SideBar'

const DashboardPage = () => {
  const navigate = useNavigate()
  const user = useSelector(state => state.base.user)

  useEffect(() => {
    if (user) {
      navigate('/dashboard/story')
    }else{
      navigate('/login')
    }
  }, [])

  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  )
}

export default DashboardPage