import { useState } from 'react'
import './App.css'
//import ProductCard from './components/productCard'
//import Testing from './components/testing'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes path="/*">
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/*" element={<h1>404 error</h1>}/>
      </Routes>
      </BrowserRouter>
    </> 
  )
}

export default App

