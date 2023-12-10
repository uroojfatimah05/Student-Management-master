import React from 'react'
import {Routes, Route } from 'react-router-dom'
import SideBar from './component/Sidebar'

export default function Index() {
  return (
    <>
     <Routes>
        <Route path='/*' element={<SideBar />} />
     </Routes>
    </>
  )
}
