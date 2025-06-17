import React from 'react'
import Hero from '../layouts/Hero'
import About from '../layouts/About'
import Projects from '../layouts/Projects'
import Contact from '../layouts/Contact'

const Landing = () => {
  return (
    <div className="container mx-auto bg-base-200">
          <Hero />
          <About/>
          <Projects/>
          <Contact/>
    </div>
  )
}

export default Landing