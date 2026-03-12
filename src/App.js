import "./app.scss";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <NavBar />
        <Home />
        <About />
        <Tools />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
