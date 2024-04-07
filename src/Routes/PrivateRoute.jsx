import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import {Navigate,useLocation} from 'react-router-dom'

export default function PrivateRoute({children}) {
    const {user,loading}=useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <div>
            <span className="loading loading-spinner text-success"></span>
<span className="loading loading-spinner text-warning"></span>
<span className="loading loading-spinner text-error"></span>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>

}
