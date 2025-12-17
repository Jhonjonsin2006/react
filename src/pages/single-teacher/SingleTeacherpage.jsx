import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleTeacherpage = () => {
  const { id } = useParams()
  const [teacher, setTeacher] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getTeacher() {
      try {
        let res = await axios.get(
          `https://69414c33686bc3ca81667193.mockapi.io/teachers/${id}`
        )
        setTeacher(res.data)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }

    getTeacher()
  }, [id])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <h1 className="text-lg font-semibold text-gray-600">Loading...</h1>
      </div>
    )
  }

  return (
    <div className="max-w-[300px] p-4 rounded text-white bg-gray-800 w-full">
      <img src={teacher.avatar} alt={teacher.name} />
      <h1>{teacher.name}</h1>
      <p>{teacher.id}</p>
    </div>
  )
}

export default SingleTeacherpage
