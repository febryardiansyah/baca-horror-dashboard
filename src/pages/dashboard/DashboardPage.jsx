import React from 'react'
import { Navigate, Outlet, Route, Routes,} from 'react-router-dom'
import SideBar from '../../components/sidebar/SideBar'

const DashboardPage = () => {
  return (
    <div>
      <SideBar />
      <Outlet />
      <Routes>
        <Route path='/' element={<Navigate to='/dashboard/story' replace />} />
      </Routes>
    </div>
  )
}

export default DashboardPage