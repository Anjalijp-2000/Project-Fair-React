import React from 'react'
import { Row,Col } from 'react-bootstrap';
import titleImage from '../Assests/design.jpg'
import ProjectCard from '../Components/ProjectCard';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
{/* landing page */}
   <div style={{width:'100%',height:'100vh',backgroundColor:'#AED6F1'}} className='container-fluid rounded'>
    <Row className='align-item-center p-5'>
      <Col sm={12} md={6}>
      <h2 style={{marginTop:'50px',fontSize:'50px'}} className='fw-bolder text-dark  '><i class="fa-brands fa-stack-overflow fa-bounce"></i>Project Fair</h2>
      <p className='text-dark' style={{fontSize:'28px'}}>One stop destination for all softare development projects.Where user can add and manage their projects.As well as access all projects available in our websites....what are you waiting for!!!!</p>
      <Link to={'/login'} className='btn btn-dark'>Start to Explore <i class="fa-solid fa-right-ling fa-beat ms-2"></i></Link>
      </Col>
      <Col sm={12} md={6}>
        <img style={{marginTop:'50px'}} className='w-75' src={titleImage} alt="" />
      </Col>
    </Row>
   </div>

   {/* all projects */}

   <div  className="all-projects mt-5">
    <h1 className='text-center mb-5'> Explore Our Projects</h1>
    <marquee scrollAmount={15}>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='ms-5' style={{width:'500px'}}>
          <ProjectCard/>
        </div>
  
        {/* <div className='ms-5' style={{width:'500px'}}>
          <ProjectCard/>
        </div> */}
  
        {/* <div className='ms-5' style={{width:'500px'}}>
          <ProjectCard/>
        </div> */}
      </div>
    </marquee>
    <div className="text-center" ><Link to ={'/projects'}>View More Projects</Link></div>

   </div>
    </>
  )
}

export default Home