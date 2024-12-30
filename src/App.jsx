import './App.css' //es6(ecma script)
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Admission from './pages/Admission/Admission'

function App() {
//JS code goes here

  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/admission" element={<Admission/>}/>
</Routes>
    </BrowserRouter>
  )
}

export default App