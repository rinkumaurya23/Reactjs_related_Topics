import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  const navToPage=()=>{
  navigate('/filter')

  }
  return (
    <div>
    <h1>Home Page Components</h1>
    <p>I am Rinku MAurya Frontend Developer </p>
    <p>And here we are learning about Router</p>
    <Link to="/about">Go to About Page</Link>
    <br/>
    <br/>
    <button onClick={()=>navToPage()}>go to about page </button>
      <br/>
    <button onClick={()=>navToPage()}>go to filter page</button>
      
    </div>
  )
}

export default Home;

