import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import { Container } from "react-bootstrap";


function App() {
  return (
    <Container fluid className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <ProjectsList />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
