import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import img from '../../../assets/1.png';
import img2 from '../../../assets/2.png';
import img3 from '../../../assets/3.png';
import moment from 'moment';
import { CiCalendarDate } from "react-icons/ci";


export default function LeftSideVar() {
    const [categories,setCategories]=useState([]);

    useEffect(()=>{
        fetch('/public/categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
 
  return (
    <div>
      <div className="space-y-6">
        <h1 className="text-xl font-semibold text-start pl-4">All Caterogy</h1>
        <button className="btn   px-14 text-xl font-semibold bg-[#E7E7E7]">National News</button>
        {
            categories.map(category=><Link className="block text-xl font-medium text-[#9F9F9F] text-start" 
                key={categories.id}>{category.name}</Link>)
        }

        <img key={categories.id} src={img} alt="" />
        <h1 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
        <div className="flex justify-between">
            <h1>Sports</h1>
           <div className="flex gap-2">
           <CiCalendarDate className="text-[#b4b3b3]" />
            <p className="text-sm text-[#b4b3b3]">{moment().format("dddd, MMMM D, YYYY")}</p>

           </div>
        </div>

        <img key={categories.id} src={img2} alt="" />
        <h1 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
        <div className="flex justify-between">
            <h1>Sports</h1>
           <div className="flex gap-2">
           <CiCalendarDate className="text-[#b4b3b3]" />
            <p className="text-sm text-[#b4b3b3]">{moment().format("dddd, MMMM D, YYYY")}</p>

           </div>
        </div>

        <img key={categories.id} src={img3} alt="" />
        <h1 className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
        <div className="flex justify-between">
            <h1>Sports</h1>
           <div className="flex gap-2">
           <CiCalendarDate className="text-[#b4b3b3]" />
            <p className="text-sm text-[#b4b3b3]">{moment().format("dddd, MMMM D, YYYY")}</p>

           </div>
        </div>
      </div>
    </div>
  )
}
