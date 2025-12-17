import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TeachersPage from './pages/teachers/TeachersPage';
import StudentsPage from './pages/students/StudentsPage';
import StatusesPage from './pages/status/StatusesPage';
import SchoolsPage from './pages/schools/SchoolsPage';
import ContactPage from './pages/contacts/ContactPage';
import Layout from './pages/components/Layout';
import SingleStudentpage from './pages/single-student/SingleStudentpage';
import SingleTeacherpage from './pages/single-teacher/SingleTeacherpage';
import LoginPage from './pages/login/LoginPage';

const App = () => {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<LoginPage/>} />
    <Route element={<Layout />}>
      <Route path="/teachers" element={<TeachersPage />} />
      <Route path="/students" element={<StudentsPage />} />
      <Route path="/students/:id" element={<SingleStudentpage />} />
      <Route path="/status" element={<StatusesPage />} />
      <Route path="/schools" element={<SchoolsPage />} />
      <Route path="/contacts" element={<ContactPage />} />
      <Route path="/teachers/:id" element={<SingleTeacherpage />} />
    </Route>
  </Routes>
</BrowserRouter>
  )
}

export default App
