import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Project from './components/Project'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
  {/* Background Gradient - คลุมทั้งจอ */}
  <div className="fixed inset-0 -z-10 w-full h-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
  
  <Navbar />
  
  <div className='container mx-auto px-8'>
    <Hero />
    <About /> 
    <Technologies />
    <Experience />
    <Project />
    <Contact />
    
  </div>
</div>
  )
}

export default App