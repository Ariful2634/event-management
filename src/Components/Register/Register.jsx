import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const {createUser,updateUserProfile} = useContext(AuthContext)
    const [success,setSuccess]=useState("")
    const [validPass,setValidPass]=useState("")
    const [show,setShow]=useState(false)

    const handleRegister = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        

        setValidPass("")

        if(password.length<6){
            
            e.target.reset()
            return setValidPass("Password should be at least 6 characters or longer")
        }
        else if(!/[A-Z]/.test(password)){
           
            e.target.reset()
            return setValidPass("Password should contain at least one uppercase letter")
        }
        else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)){
            
            e.target.reset()
            return setValidPass("Password should contain at least one special  character")
        }

        createUser(email,password)
        .then(res=>{
            const user = res.user
            updateProfile(user,{
              displayName:name,
              photoURL:photo
            })
            e.target.reset()
           
            
            console.log(user)
            setSuccess(Swal.fire(
                'Congratulations!',
                'User Created Successfully!',
                'success'
              ))
        })
        .catch(err=>{
            setValidPass(err.message)
            e.target.reset()
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
          <input type="text" name='name' placeholder="Name" className="input input-bordered w-[320px]" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered " required />
        
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
          <input type={show ? "text" : "password"} name='password' placeholder="Password" className="input input-bordered relative" required />
          <span className='absolute top-[360px] left-[320px]' onClick={()=>{setShow(!show)}}>{show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
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