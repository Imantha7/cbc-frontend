import { useState } from 'react'
import './App.css'
//import ProductCard from './components/productCard'
//import Testing from './components/testing'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import UserData from './components/UserData'
import AdminHomePage from './pages/adminHomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div className='h-[100vh]'>
      <BrowserRouter>
      <Toaster position="top-right"/>
      <Routes path="/*">
      <Route path="/*" element={<HomePage/>}/>   
        <Route path="/login" element={<LoginPage/>}/>

        <Route path='/signup' element={<UserData/>}/>

        <Route path="/admin/*" element={<AdminHomePage/>}/>
      </Routes>

      </BrowserRouter>
    </div> 
  )
}

export default App

