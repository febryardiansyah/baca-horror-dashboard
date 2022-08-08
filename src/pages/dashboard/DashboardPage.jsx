import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import SideBar from '../../components/sidebar/SideBar'
import helpers from '../../helpers/helpers'

const DashboardPage = () => {
  const navigate = useNavigate()
  const user = useSelector(state => state.base.user)
  const currentIndex = useSelector(state => state.base.sideBarIndex)

  useEffect(() => {
    if (user) {
      navigate(`/dashboard/${helpers.routePathByIndex(currentIndex)}`)
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