import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header({insideDashboard}) {
  return (
    <Navbar style={{backgroundColor:'#AED6F9' }} className="position-fixed top-0 w-100">
        <Container>
          <Navbar.Brand href="#home">
         <Link to={'/'} style={{textDecoration:'none',color:'white'}} className='text-dark fw-bolder'><i class="fa-brands fa-stack-overflow fa-bounce"></i>Project Fair</Link>

          </Navbar.Brand>
{
 insideDashboard && <div className="btn btn-link ms-auto text-primary fw-bolder fs-5 text-dark">Logout
<i class="fa-solid fa-arrow-right-from-bracket fa-beat-fade"></i>

</div>
}       
 </Container>
      </Navbar>
  )
}

export default Header