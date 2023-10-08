import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'

const Login = () => {
    const [success,setSuccess]=useState("")
    const [errorIn,setErrorIn]=useState("")

    const {logInUser,googleLogin} = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password)

        logInUser(email,password)
        .then(res=>{
            const user = res.user
            setSuccess(Swal.fire(
                'Congratulations!',
                'You logged in Successfully!',
                'success'
              ))

              // navigate after login

            navigate(location?.state ? location.state : '/')
            console.log(user)
        })
        .catch(err=>{
            setErrorIn(err.message)
            console.log(err)
        })

        
    }

    // if(errorIn){
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Oops...',
    //         text: 'Something went wrong!',
    //         footer: '<a href="">Why do I have this issue?</a>'
    //       })
    // }



    const handleGoogle = ()=>{
        googleLogin()
        .then(result=>{
            const user = result.user
            setSuccess(Swal.fire(
              'Congratulations!',
              'You logged in Successfully!',
              'success'
            ))

            // navigate after login

            navigate(location?.state ? location.state : '/')
            console.log(user)
            console.log(user)
            
        })
        .catch(error=>{
            
            console.log(error)
        })
    }



    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      
       <hr />
       
        <div className='text-center'>
        <button onClick={handleGoogle} className='btn btn-outline'>Google Login</button>
      </div>
        <p className='text-center font-bold'>Do not have an account? <Link className='text-blue-700' to='/register'>Register</Link></p>
      </form>
      
    </div>
    <div>
        
    </div>
  </div>
</div>
    );
};

export default Login;