import {Link} from "react-router-dom";

function NavBar() {
    return (
        <div className="flex flex-1">
             
               <Link className = "text-xl text-cyan-600 font-semibold" to = "./Home"><h3>Home</h3></Link>
               <Link className = "pl-5 text-xl text-cyan-600 font-semibold" to = "./Categories"><h3>Categories</h3></Link>
               <Link className = "pl-5 text-xl text-cyan-600 font-semibold" to = "./About"><h3>About</h3></Link>
        </div>
    )
}

export default NavBar; 
                        