import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { baseActions } from '../../redux/module/baseSlice'
import authService from '../../services/authService'
import './sidebar.css'
import { SideBarData } from './SideBarData'

const SideBar = () => {
    const currentIndex = useSelector(state => state.base.sideBarIndex)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const changeActiveIndex = (index) => {
        dispatch(baseActions.setSideBarIndex(index))
        localStorage.setItem('index', index)
    }

    return (
        <div>
            <div id="mySidebar" className="sidebar fixed-top d-flex flex-column">
                <h2 className='text-white' id='title' onClick={()=>{
                    navigate('/dashboard')
                }}>Baca Horror</h2>
                <hr className='text-white' />
                <ul className='nav flex-column mb-auto'>
                    {
                        SideBarData.map((item, index) => (
                            <li className={currentIndex == index ? 'item-active' : ''} key={index}>
                                <Link to={item.path} onClick={() => changeActiveIndex(index)}>
                                    {item.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <hr />
                <button className='btn btn-danger m-2' onClick={(e) => {
                    toast.loading('Loading..')
                    e.preventDefault()
                    authService.logout()
                    dispatch(baseActions.setUser(null))
                    dispatch(baseActions.setSideBarIndex(0))
                    toast.dismiss()
                    navigate('/login')
                    toast.success('Logout berhasil!')
                }}>
                    <i className="bi bi-box-arrow-left me-2"></i>
                    Keluar
                </button>
            </div>
        </div>
    )

}

export default SideBar