
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="nav" id="nav">
            <div className="nav-first">
                <Link to='/'><a>What's new</a></Link>
                <Link to='/aboutus'><a>About us</a></Link>
                <Link to='/contactus'><a>Contact us</a></Link>
            </div>       
        </div>
    );
}
export default Navbar;