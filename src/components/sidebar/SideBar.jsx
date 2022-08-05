import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import { SideBarData } from './SideBarData'

const SideBar = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const changeActiveIndex = (index) => {
        setActiveIndex(index)
    }
    return (
        <div>
            <div id="mySidebar" className="sidebar fixed-top">
                <h2 className='text-white' id='title'>Baca Horror</h2>
                <hr className='text-white' />
                {
                    SideBarData.map((item, index) => (
                        <li className={activeIndex === index ? 'item-active' : ''} key={index}>
                            <Link to={item.path} onClick={() => changeActiveIndex(index)}>
                                {item.title}
                            </Link>
                        </li>
                    ))
                }
            </div>
        </div>
    )

}

export default SideBar