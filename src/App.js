import 'assets/css/bootstrap.min.css';
// import 'assets/scss/bootstrap.scss';

import NavBar from 'components/NavBar';
import Jumbotron from 'components/Jumbotron';
import About from 'components/About';
import Skills from 'components/Skills';
import Projects from 'components/Projects';
import Certifications from 'components/Certifications';
import Footer from 'components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;
