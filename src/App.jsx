import { useState } from 'react'
import './App.css' 
import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import AdminHomePage from './pages/adminHomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div className='bg-primary'>
     <BrowserRouter>
      <Toaster position='top-right'/>
      <Routes path="/*">          
        <Route path="/*" element={<HomePage/>}/>   
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/admin/*" element={<AdminHomePage/>}/>        
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App

