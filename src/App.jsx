import Nav from './Nav';
import {Home, About, ColourPage, ColourItem} from './pages';
import './App.css';
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<Home />} />
          <Route path='about' element={<Home />} />
          <Route path='colours'>
            <Route index element={<ColourPage />} />
              <Route path=':id' element={<ColourItem />} />
          </Route>
          <Route path='*' element={<h1>404: Not Found</h1>}/>
        </Route>
      </Routes>
    </div>
  )
}
