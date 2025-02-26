
import {BrowserRouter,Routes, Route,Navigate} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Navbar from './component/Navbar'
import Filter from './component/Filter'
// import Page404 from ' ./component/Page404'
import User from './component/User'
import './App.css'

function App() {


  return (
   <>
    <div className='App'> 
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/user/:name' element={<User/>}/>
    <Route path='/filter' element={<Filter/>}/>


    <Route path='/*' element={<Navigate to='/'/>}/>


    </Routes>
  
    </BrowserRouter>
    </div>
   </>
  )
}

export default App
