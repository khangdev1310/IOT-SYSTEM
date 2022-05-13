import React from 'react'
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'

export default function Home() {
  const date = new Date()
  return (
    <div className='flex gap-4'>
      <div className="home-page w-[300px] h-[100px] bg-white rounded-lg">
        <div className="device-items flex items-center justify-around">
          <div className="device-items__content">
            <p className="font-bold text-gray-500">WEMOS D1</p>
            <span className="flex items-center text-green-500 font-bold">
              <RiCheckboxBlankCircleFill className="fill-green-500" />
              {date.toLocaleDateString('vi-VN')}
            </span>
          </div>
          <div className="device-items__img w-[100px] h-[100px]">
            <img src="wemos.png" alt="ImageWemos" />
          </div>
        </div>
      </div>

      <div className="home-page w-[300px] h-[100px] bg-white rounded-lg">
        <div className="device-items flex items-center justify-around">
          <div className="device-items__content">
            <p className="font-bold text-gray-500">RASPBERRY PI</p>
            <span className="flex items-center text-red-500 font-bold">
              <RiCheckboxBlankCircleFill className="fill-red-500 " />
              {date.toLocaleDateString('vi-VN')}
            </span>
          </div>
          <div className="device-items__img w-[100px] h-[100px]">
            <img src="rasperry.png" alt="ImageWemos"  className='max-h-full'/>
          </div>
        </div>
      </div>
    </div>
  )
}
