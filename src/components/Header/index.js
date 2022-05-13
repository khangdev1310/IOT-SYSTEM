import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  return (
    <div
      className={`p-5 uppercase text-white foont-bold text-[20px] h-[380px] bg-blue-500 relative ${
        location.pathname === '/dashboard' ? 'h-[380px]' : 'h-[250px]'
      }`}
    >
      <div className="header-dashboard font-bold">{location.pathname.split('/')}</div>
      {location.pathname === '/dashboard' ? (
        <div className="content-dashboard">
          <p className="my-5">
            Chào mừng bạn đến với bài thực hành của nhóm PHATPT chúng tôi
          </p>

          <div>
            <p>Tên nhóm: Nhóm PHPT</p>
            <p>Thành viên 1: ABCXYZ</p>
            <p>Thành viên 2: ABCXYZ</p>
            <p>Thành viên 3: ABCXYZ</p>
            <p>Bài thực hành số 5</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
