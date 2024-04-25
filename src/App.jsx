import About from './Layouts/About/About'
import Hero from './Layouts/Hero/Hero'
import Navbar from './Layouts/Navbar/Navbar'
import Project from './Layouts/Project/Project'
import Skills from './Layouts/Skills/Skills'
import { BrowserRouter } from 'react-router-dom'



function App() {

  return (
    <>
      <BrowserRouter>
        <div className='px-20'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skills />
        <Project />
      </BrowserRouter>
    </>

  )
}

export default App
