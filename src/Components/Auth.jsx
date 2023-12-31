import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { registerAPI } from '../Services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Auth({register}) {
  const navigate = useNavigate()
  const [userData,setUserData] = useState({
    usename:"",
    email:"",
    password:""
  })
  const isRegisterForm = register?true:false
  const handleRegister = async (e)=>{
    e.preventDefault()
    const {usename,email,password} = userData
    if(!usename || !email || !password){
      toast.info("Please fill the form completely!!!")
    }else{
      const result = await registerAPI(userData)
      
      if(result.status===200){
        toast.success(`${result.data.usename} has registered successfully!!!`)
        setUserData({
          usename:"",
          email:"",
          password:""
        })
        navigate('/login')
      }else{
        toast.warning( result.response.data)
        console.log(result);
      }

    }
  }
  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
       <div className='w-75 container'>
            <Link to={'/'} style={{textDecoration:'none',color:'orange'}}><i class="fa-solid fa-arrow-left me-1"></i>Back to Home</Link>
            <div  className="card shadow p-5 bg-success">
            <div className='row align-items-center'>
                <div className='col-lg-6'>
                    <img src="http://www.tropiqana.com/fundsmanager/app-assets/img/gallery/login.png" className='rounded-start w-100' alt="Auth Image" />
                </div>
                <div className='col-lg-6'>
                   <div className='d-flex  align-items-center flex-column'>
                   <h1 className='fw-bolder text-light mt-2'><i class="fa-brands fa-stack-overflow fa-bounce"></i>Project Fair</h1>
                     <h5 className='fw-bolder mt-4 pb-3 text-light'>
                        {
                            isRegisterForm ? 'Sign Up to your Account' : 'Sign In to your Account'
                        }
                     </h5>
                     <Form className='text-light w-100'>
                        {
                            isRegisterForm && 
                            <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control type="text" placeholder="username" value={userData.usename} onChange={e=>setUserData({...userData,usename:e.target.value})}/>
                          </Form.Group>  
                        }
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter Email ID" value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})}/>
                          </Form.Group>  
                          <Form.Group className="mb-3" controlId="formBasicPasswd">
                            <Form.Control type="password" placeholder="Enter Password" value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} />
                          </Form.Group>  
                          {
                            isRegisterForm?
                            <div>
                              <button onClick={handleRegister} className='btn btn-light mb-2'>Register</button>
                              <p>Already have account? click here to <Link style={{color:'black'}} to={'/login'}>Login</Link></p>
                            </div>:
                             <div>
                             <button className='btn btn-light mb-2'>Login</button>
                             <p>Already have account? click here to <Link style={{color:'black'}} to={'/register'}>Register</Link></p>
                           </div>
                          }
                     </Form>
                   </div>
                </div>

            </div>
            </div>
    
       </div>
       <ToastContainer position='top-right' autoClose={2000} theme='colored' />
    </div>
  )
}

export default Auth