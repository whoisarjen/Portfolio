import { FunctionComponent } from "react";
import { Link } from 'react-scroll'

const Navbar: FunctionComponent = () => {
    return (
        <nav className="Navbar">
            <ul>
                <li><Link to="Education">Education</Link></li>
                <li><Link to="Projects">Projects</Link></li>
                <li><Link to="Contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;