import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Home from '../pages/home/index'
// import Properties from '../pages/properties/index'
// import NotPage from '../pages/notFound'
import { navbar } from '../utils/navbar'
import Navbar from '../components/NavBar/Navbar'



function Index() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        {navbar.map(({ path, element, id }) => {
          return <Route key={id} path={path} element={element} />
        })}
        <Route path='/' element={<Navigate to={'/home'}/>}></Route>
      </Route>
    </Routes>
  )
}

export default Index