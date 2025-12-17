import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="pl-[270px] pt-[20px] w-full bg-gray-700">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
