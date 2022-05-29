import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import ChartLayout from './pages/Charts'

import Home from './pages/Home'
import Main from './pages/Main'
export default function MainRoutes() {
  return (
    <div className="main-routes p-[10px]">
      <Routes>
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="dashboard" element={<Home />} />
        <Route path="main" element={<Main />} />
        <Route path="charts" element={<ChartLayout />} />
      </Routes>
    </div>
  )
}
