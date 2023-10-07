import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'


const Register = () => {

    const {createUser} = useContext(AuthContext)
    const [success,setSuccess]=useState("")
    const [validPass,setValidPass]=useState("")

    const handleRegister = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name,email,password)

        setValidPass("")

        if(password.length<6){
            setValidPass("Password should be at least 6 characters or longer")
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setValidPass("Password should contain at least one uppercase letter")
            return;
        }
        else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)){
            setValidPass("Password should contain at least one special  character")
            return;
        }

        createUser(email,password)
        .then(res=>{
            const user = res.user
            
            console.log(user)
            setSuccess(Swal.fire(
                'Congratulations!',
                'User Created Successfully!',
                'success'
              ))
        })
        .catch(err=>{
            setValidPass(err.message)
            console.log(err)
        })

        
    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
        </div>
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
         
        </div>
        <div>
        {
            validPass && <p className='text-red-500 font-bold'>{validPass}</p>
        }
    </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p className='text-center font-bold'>Already have an account? <Link to='/login' className='text-blue-700'>Login</Link></p>
      </form>
    </div>
    
  </div>
</div>
    );
};

export default Register;