import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getAllTeachers() {
      try {
        const res = await axios.get(
          "https://69414c33686bc3ca81667193.mockapi.io/teachers"
        )
        setTeachers(res.data)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    getAllTeachers()
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <h1 className="text-lg font-semibold text-gray-600">Loading...</h1>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-4 gap-4 p-5 container mx-auto'>
      {teachers.map((el) => (
        <div
          key={el.id}
          className='max-w-[300px] p-5 rounded text-white bg-gray-800 w-full'>
          
          <Link to={`/teachers/${el.id}`}>
            <img src={el.avatar} alt={el.name} />
          </Link>

          <h1>{el.name}</h1>
          <p>{el.id}</p>
        </div>
      ))}
    </div>
  )
}

export default TeachersPage
