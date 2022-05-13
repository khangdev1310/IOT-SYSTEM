import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Home from './pages/Home'
export default function MainRoutes() {
  return (
    
    <div className="main-routes p-[10px]">
      <Routes>
      <Route path="/" element={<Navigate replace to="/dashboard" />} />
      <Route path="dashboard" element={<Home />} />
    </Routes>
    </div>
  )
}
