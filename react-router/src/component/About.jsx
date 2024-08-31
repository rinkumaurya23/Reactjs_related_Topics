import React from 'react'
import { Link } from 'react-router-dom'


function About() {
  return (
    <div>
      <h1>About  Page components</h1>
      <p>I am Rinku MAurya Frontend Developer </p>
    <p>And here we are learning about Router</p>
    <Link to="/">Go to About Page</Link>
    <li> <Link to = '/user/rinku'>rinku</Link></li>
    <li> <Link to = '/user/shashi'>shashi</Link></li>

    </div>
  )
  
}

export default About
