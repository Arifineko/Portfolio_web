import About from './Layouts/About/About'
import Hero from './Layouts/Hero/Hero'
import Navbar from './Layouts/Navbar/Navbar'
import Skills from './Layouts/Skills/Skills'



function App() {

  return (
    <>
      <div className='px-20'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Skills />
    </>

  )
}

export default App
