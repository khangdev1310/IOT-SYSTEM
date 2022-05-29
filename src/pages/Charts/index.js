import React from 'react'
import LineChart from './LineChart'

export default function ChartLayout() {
  return (
    <div className="w-[600px] h-[600px] bg-blue-900 text-white absolute left-[1%] top-[6%]">
      <LineChart  />
    </div>
  )
}
