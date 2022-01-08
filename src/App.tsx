import { FunctionComponent } from "react";
import Contact from "./parts/Contact";
import Education from "./parts/Education";
import Home from "./parts/Home";
import Projects from "./parts/Projects";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const App: FunctionComponent = () => {
    const theme = createTheme({
        typography: {
            fontFamily: "Quicksand, sans-serif",
        },
        palette: {
            mode: 'dark',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Home />
                <Education />
                <Projects />
                <Contact />
            </div>
        </ThemeProvider>
    );
}

export default App;
