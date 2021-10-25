import { Link } from "react-router-dom";



const Navbar = ()=>{
    return(
       <div className = "container">
            <div className = "row ">
            <div className = "col md-4">
                <Link className = "btn btn-primary"  to = '/counter'>Counter</Link>
            </div>
            <div className = "col md-4">
                <Link className = "btn btn-primary" to = '/students'>Students</Link>
            </div>
         
        </div>
       </div>
    );
}

export default Navbar;