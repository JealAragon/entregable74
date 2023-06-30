import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {


  return (
    <main className='bg-black'>
      <Header/>
      <Hero/>
      <Skills/>
      <Projects/>



    </main>
  )
}

export default App
