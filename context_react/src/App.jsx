
// import UserContextProvider from './context/UserContextProvider'
// import './App.css'

// import Profile from './components/Profile'
// import Login from './components/login'


// function App() {

  


//   return (
//     <UserContextProvider >
     
//       <h1>Context api Using react js </h1>
//       <Login/>
//       <Profile/>
   
//     </UserContextProvider>
//   )
// }

// export default App

import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import React from 'react'
import './App.css'
function App() {
  return (
    <UserContextProvider>
    <h1>App Component & Use Context api Using React js </h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
