import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

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
        <button className="btn   px-14 text-xl font-semibold">National News</button>
        {
            categories.map(category=><Link className="block text-xl font-medium text-[#9F9F9F] text-start" 
                key={categories.id}>{category.name}</Link>)
        }
      </div>
    </div>
  )
}
