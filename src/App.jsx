import { BrowserRouter } from 'react-router-dom';
import About from './Layouts/About/About';
import Contact from './Layouts/Contact/Contact';
import Hero from './Layouts/Hero/Hero';
import Navbar from './Layouts/Navbar/Navbar';
import Project from './Layouts/Project/Project';
import Skills from './Layouts/Skills/Skills';
import Aos from './Utils/Aos';
import '../src/global.css';

function App() {
  return (
    <BrowserRouter>
      <Aos>
        <Navbar />
        <Hero />
        {/* <About /> */}
        <Skills />
        <Project />
        <Contact />
      </Aos>
    </BrowserRouter>
  );
}

export default App;
