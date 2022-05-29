import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import sidebarItems from '../../routes/index.js'

import { GiHamburgerMenu } from 'react-icons/gi'

export default function SideBar() {
  const location = useLocation()
  

  return (
    <div className="sidebar py-[10px] pl-[10px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="logo.png" alt="Ảnh" className="w-[50px] h-[50px]" />
          <p>UIT</p>
        </div>
        <div className="flex items-center">
          <GiHamburgerMenu className="w-[40px] h-[40px] fill-blue-400" />
        </div>
      </div>

      <div className="flex flex-col">
        {sidebarItems.map((item) => {
          return (
            <>
              <Link
                key={item.text}
                to={item.to}
                className={
                  location.pathname.includes(item.to)
                    ? 'sidebar_active flex'
                    : 'flex'
                }
              >
                {item.component}
                <p className="ml-2">{item.name}</p>
              </Link>
            </>
          )
        })}
      </div>
    </div>
  )
}
