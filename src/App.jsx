import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main_Layout from './layouts/MainLayout'
import Home from './pages/Home'
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Main_Layout />}>
        <Route  path='/' element={<Home />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
