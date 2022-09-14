import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <header className="navHeader">
            <nav className="navbar">
                <Link to="/" className="site-title">BALLUPBRIAN</Link>
                <ul className="innerNav">
                    <li className="links">
                        <Link to="/Favorites">
                            Favorites
                        </Link>
                        <Link to="/Events" >
                            Events
                        </Link>
                        <Link to="/Portfolio">
                            Porfolio
                        </Link>
                        <Link to="/Contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;