import { useState } from 'react'
import './App.css'
//import ProductCard from './components/productCard'
//import Testing from './components/testing'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import RegistrationPage from './pages/signInPage'
import AdminHomePage from './pages/adminHomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <div className='h-[100vh]'>
      <BrowserRouter>

      <Routes path="/*">
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<RegistrationPage/>}/>
        <Route path="/admin/*" element={<AdminHomePage/>}/>
        <Route path="/*" element={<HomePage/>}/>
      </Routes>

      </BrowserRouter>
    </div> 
  )
}

export default App

