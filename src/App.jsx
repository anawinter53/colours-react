import React, {useState} from 'react';
import Nav from './layout/Nav';
import {Home, About, ColourPage, ColourItem, Login} from './pages';
import './App.css';
import data from './config/data.json';
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from "./routes";
import { AuthProvider } from './contexts';

export default function App() {
  const [colourData, setColourData] = useState(data)


  return (
    <div className='App'>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Nav />}>
            <Route index element={<Home />}/>
            <Route path='about' element={<About />}/>
            <Route path='colours' element={<ProtectedRoute redirectTo="/login" />}>
              <Route index element={<ColourPage colourData={colourData} />}/>
              <Route path=':id' element={<ColourItem colourData={colourData}/>}/>
            </Route>
            <Route path="login" element={<Login />}></Route>
            <Route path='*' element={<h1>404: Not Found</h1>}/>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  )
}
