import { FunctionComponent } from "react";
import Contact from "./parts/Contact";
import Education from "./parts/Education";
import Home from "./parts/Home";
import Projects from "./parts/Projects";


const App: FunctionComponent = () => {
    return (
        <div className="App">
            <Home />
            <Education />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
