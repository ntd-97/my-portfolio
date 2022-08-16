import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
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
      <ProjectsList />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
