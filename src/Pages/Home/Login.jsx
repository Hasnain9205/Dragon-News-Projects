import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import {useLocation,useNavigate} from 'react-router-dom';

export default function Login() {
  const {createUser} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate()
  console.log(location)
    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        console.log(email,password)
    


    createUser(email,password)
    .then(result=>{
      console.log(result.user);

      navigate(location?.state?location.state : '/')
    })
    .catch(error=>{
      console.error(error)
    })
}
  return (
    <div>
        <Navbar></Navbar>
  
     

  <div className=" mt-10 mb-8 bg-[#F3F3F3] p-12 space-y-8">
    <h1 className="text-center text-4xl font-semibold border-b-2 pb-8">Login your account</h1>

    <form onSubmit={handleLogin} className="flex flex-col items-center justify-center space-y-8">
   <div>
        <h1 className="text-xl font-semibold mb-2">Email address</h1>
        <input className="px-44 py-3 mb-4" type="email" required
        name="email" placeholder="Enter your email address" />   
        <h1 className="text-xl font-semibold mb-2">Password</h1>   
        <input className="px-44 py-3" type="password" required name="password" placeholder="Enter your password" />
       <div>
          <button className="btn w-full mt-4 bg-[#403F3F] text-white text-xl font-semibold">Login</button>
       </div>
       <h1 className="text-center text-lg font-semibold mt-2">Do Not Have An Account ?<Link to='/Register' className="text-red-800"> Register</Link></h1>
   </div>
    </form>

    </div>
    </div>
  )
}
