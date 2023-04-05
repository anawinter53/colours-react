import React, {useState} from 'react';
import Nav from './layout/Nav';
import {Home, About, ColourPage, ColourItem} from './pages';
import './App.css';
import data from './config/data.json';
import { Routes, Route } from 'react-router-dom'

export default function App() {
  const [colourData, setColourData] = useState(data)


  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='colours'>
            <Route index element={<ColourPage colourData={colourData} />}/>
            <Route path=':id' element={<ColourItem colourData={colourData}/>}/>
          </Route>
          <Route path='*' element={<h1>404: Not Found</h1>}/>
        </Route>
      </Routes>
    </div>
  )
}
