import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { baseActions } from '../../redux/module/baseSlice'
import authService from '../../services/authService'
import './sidebar.css'
import { SideBarData } from './SideBarData'

const SideBar = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const changeActiveIndex = (index) => {
        setActiveIndex(index)
    }
    return (
        <div>
            <div id="mySidebar" className="sidebar fixed-top d-flex flex-column">
                <h2 className='text-white' id='title'>Baca Horror</h2>
                <hr className='text-white' />
                <ul className='nav flex-column mb-auto'>
                    {
                        SideBarData.map((item, index) => (
                            <li className={activeIndex === index ? 'item-active' : ''} key={index}>
                                <Link to={item.path} onClick={() => changeActiveIndex(index)}>
                                    {item.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <hr />
                <button className='btn btn-danger m-2' onClick={(e) => {
                    e.preventDefault()
                    authService.logout()
                    dispatch(baseActions.setUser(null))
                    navigate('/login')
                }}>
                    <i className="bi bi-box-arrow-left me-2"></i>
                    Keluar
                </button>
            </div>
        </div>
    )

}

export default SideBar