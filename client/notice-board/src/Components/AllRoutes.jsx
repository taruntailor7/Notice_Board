import React from 'react'
import { Route, Routes } from 'react-router'
import { Notice } from './Notice'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/notices" element={<Notice />}></Route>
    </Routes>
  )
}
