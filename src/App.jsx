import { useState } from 'react'
import './App.css' 
import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import AdminHomePage from './pages/adminHomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { GoogleOAuthProvider } from '@react-oauth/google'

function App() {

  return (
    <div className='bg-primary'>
     <BrowserRouter>
      <Toaster position='top-right'/>
      <GoogleOAuthProvider clientId='710943586078-v4jf0nafevbg26093cnbn2cr849n7nlf.apps.googleusercontent.com'>
      <Routes path="/*">          
        <Route path="/*" element={<HomePage/>}/>   
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/admin/*" element={<AdminHomePage/>}/>        
      </Routes>
      </GoogleOAuthProvider>
     </BrowserRouter>
    </div>
  )
}

export default App

