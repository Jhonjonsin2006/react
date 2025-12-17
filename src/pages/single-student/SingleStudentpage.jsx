import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleStudentpage = () => {
  const { id } = useParams()
  const [students, setStudent] = useState(null)
  const[loading , setloading] = useState(true)
  

  useEffect(() => {
    async function getStudent() {
      try {
        let res = await axios.get(
          `https://69414c33686bc3ca81667193.mockapi.io/students/${id}`
        )
        setStudent(res.data)
        setloading(false)
      } catch (err) {
        console.log(err)
      }
    }

    getStudent()
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
    <div className="max-w-[300px] p-5 rounded text-white bg-gray-800 w-full">
      <img src={students.avatar} alt={students.name} />
      <h1>{students.name}</h1>
      <p>{students.id}</p>
    </div>
  )
}

export default SingleStudentpage
