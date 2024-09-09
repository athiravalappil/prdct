import './App.css'
import { Route, Routes } from 'react-router-dom'
import Add from './Components/Add'
import Home from './Components/Home'
import Navbar from './Components/Navbar'


function App() {
  
  

  return (
    <>
      
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<Add />}/>

          
        </Routes>
        
        
      
      
      
    </>
  )
}

export default App