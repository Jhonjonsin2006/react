import React from 'react'

const Sidebar = () => {
  return (
    <siswbar className="fixed top-0 left-0 w-60 min-h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Admin</h2>

      <ul className="space-y-2">
        <li><a href="/teachers" className="hover:text-blue-400">Teachers</a></li>
        <li><a href="/students" className="hover:text-blue-400">Students</a></li>
        <li><a href="/status" className="hover:text-blue-400">Status</a></li>
        <li><a href="/schools" className="hover:text-blue-400">Schools</a></li>
        <li><a href="/contacts" className="hover:text-blue-400">Contacts</a></li>
      </ul>
    </siswbar>
  )
}

export default Sidebar
















{/* <main className="flex-1 p-6 bg-gray-100">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="mt-2">Welcome to admin panel</p>
        </main> */}