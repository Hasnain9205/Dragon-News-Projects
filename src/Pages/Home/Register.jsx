import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import { CgCheckO } from "react-icons/cg";



export default function Register() {
  const {createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');


       
        //create user 

       createUser(email,password)
        .then(result=>{
          console.log(result.user)
        })
        .catch(error=>{
          console.error(error)
        })
    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-10">
        <h1 className="text-center text-4xl font-semibold border-b-2 pb-8">Register your account</h1>
    <div className="mt-12">
        <form onSubmit={handleRegister} className="flex flex-col items-center justify-center space-y-8">
       <div>
        <h1 className="text-xl font-semibold mb-2">Your Name</h1>
        <input className="px-44 py-3 mb-4 bg-[#F3F3F3]" required type="text" name="name" placeholder="Enter your name" />   
        <h1 className="text-xl font-semibold mb-2">Photo URL</h1>
        <input className="px-44 py-3 mb-4 bg-[#F3F3F3]" required type="text" name="photo" placeholder="Enter your photo URL" />   
        <h1 className="text-xl font-semibold mb-2">Email address</h1>
        <input className="px-44 py-3 mb-4 bg-[#F3F3F3]" required type="Email" name="email" placeholder="Enter your email address" />   
        <h1 className="text-xl font-semibold mb-2">Password</h1>   
        <input className="px-44 py-3 bg-[#F3F3F3]" required type="password" name="password" placeholder="Enter your password" />

        <div className="flex gap-2 mt-2">
        <CgCheckO />
        <h1 className="text-sm font-semibold">Accept Term & Conditions</h1>
        </div>

       <div>
       <button className="btn w-full mt-4 bg-[#403F3F] text-white text-xl font-semibold">Register</button>
       </div>
   </div>
    </form>
        </div>
      </div>
    </div>
  )
}
