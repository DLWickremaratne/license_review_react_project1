import { Link } from "react-router-dom";



const NavBar = () => {
    return (

        
        <nav className="me-auto">
            <ul>
                <li><Link to ='/' >Content</Link></li>
                <li><Link to ='/drivers'>Drivers</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;