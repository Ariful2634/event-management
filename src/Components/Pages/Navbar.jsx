import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../Pages../../../assets/flogo1.jpg'
import icon from '../Pages../../../assets/user.png'
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {

  const {user,logOut}=useContext(AuthContext)

    const links = <>
         <li><NavLink to='/'>Home</NavLink></li>
         <li><NavLink to='/about'>About Us</NavLink></li>
         <li><NavLink to='/register'>Register</NavLink></li>
    </>

const handleLogout = ()=>{
  logOut()
  .then()
  .catch()
}

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
        
      </ul>
    </div>
   <img className='w-[90px] rounded' src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     
      
      {links}
      
    </ul>
  </div>
  <div className="navbar-end">
  <div>
      {
        user &&  <p>{user.displayName}</p>
      }
       </div>
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
         {
          user ?  <img src={user.photoURL} /> :
          <img src={icon} /> 
         }
         
         
         
        </div>
      
      </label>
   <div>
    {
      user ?  <button onClick={handleLogout} className='btn btn-warning font-bold'>Logout</button> :
      <Link to='/login'><button className='btn btn-warning font-bold'>Login</button></Link>
    }
   </div>
  </div>
</div>
    );
};

export default Navbar;