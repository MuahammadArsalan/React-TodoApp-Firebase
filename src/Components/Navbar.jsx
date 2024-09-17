import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
<>

<div style={{
    display:"flex",
    justifyContent:"flex-end",
    gap:"2rem",
    marginRight:"2rem"
}}>

<Link to="">Login</Link>
<Link to="register">Register</Link>



</div>





</>
)
}

export default Navbar