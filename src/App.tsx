import { FunctionComponent } from "react";
import Contact from "./parts/Contact";
import Education from "./parts/Education";
import Home from "./parts/Home";
import Projects from "./parts/Projects";
import { Link } from 'react-scroll'


const App: FunctionComponent = () => {
    return (
        <div className="App">
            <Home>
                <nav className="Navbar">
                    <ul>
                        <li><Link to="Education">Education</Link></li>
                        <li><Link to="Projects">Projects</Link></li>
                        <li><Link to="Contact">Contact</Link></li>
                    </ul>
                </nav>
            </Home>
            <Education />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
