import React from 'react'
import { Route, Routes } from 'react-router'
import { Login } from './Login'
import { Notice } from './Notice'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/notices" element={<Notice />}></Route>
    </Routes>
  )
}
