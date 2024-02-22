import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Signup></Signup>} ></Route>
          <Route path='/home' element={<Home></Home>} ></Route>
          <Route path='/login' element={<Login></Login>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
