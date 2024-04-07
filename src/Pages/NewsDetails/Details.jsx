import { Link } from "react-router-dom";
import Head from "../Shared/Head/Head";
import RightSidevar from "../Shared/RightSidevar/RightSidevar";

export default function Details() {
  return (
    
   <div>
    <Head></Head>
    <h1 className="text-xl font-semibold mt-10" >Dragon News</h1>
     <div className="grid grid-cols-3 mt-10 gap-8">
        
     
        <div className="col-span-2  bg-base-100 shadow-xl border-2 p-4">
    <figure><img className="rounded-xl" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-start">
       <Link to="/"> <button className="btn btn-primary">All news in this category</button></Link>
      </div>
    </div>
  </div>
  <div className="">
         <RightSidevar></RightSidevar>
         </div>
      </div>
   </div>
  )
}
