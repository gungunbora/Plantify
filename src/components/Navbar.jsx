import {Link} from "react-router-dom";
import logo from "../assets/images/leaficon.ico"; 


const Navbar = () =>{
  return(
    <nav className="w-full bg-green-50 px-10 py-4 flex items-center justify-between"> 

    {/* LEFT */}
    <div className="flex items-center gap-2">
      <img src={logo} alt="Plantify logo" className="w-7 h-7"/>
      <span className="text-green-700 font-bold text-xl">
        PLANTIFY
      </span>
    </div>

    {/* RIGHT */}
    <ul className="flex items-center gap-6 text-sm font-medium">
      <li>
        <Link to="/home"className="hover:text-green-700">
        Home</Link>
      </li>
      <li>
        <Link to="/shop"className="hover:text-green-700">
        Shop</Link>
      </li>
      <li>
        <Link to="about"className="hover:text-green-700">
        About Plants </Link>
      </li>
      <li><Link to="/login" className="hover:text-green-700">
       Login</Link>
      </li>
      <li><Link to="/signup" className="hover:text-green-700">
      Sign Up</Link>
      </li>

    </ul>
    </nav>

  );
};
export default Navbar;