import { Link } from "react-router-dom";

  export default function NewsCard({news}) {
    const {title,img,name,image_url,details,_id,rating}=news;
    return (
      <div className="border-2">
        <div>
          
        </div>
           <div>
            <img src={img} alt="" />
            <h1>{name}</h1>
           </div>
           <h1 className="text-xl font-bold">{title}</h1>
           <img src={image_url} alt="" />
           {
            details.length>200 
            ?<h1>{details.slice(0,200)}  <Link to={`/details/${_id}`} className="text-red-500 font-bold"> Read more.....</Link></h1>
            :
            <h1>{details}</h1>
           }
           
           <h1>{rating[0]}</h1>
      </div>
    )
  }
  