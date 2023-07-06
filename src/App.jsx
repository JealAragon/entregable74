import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Main from './components/Main'

function App() {


  return (
    <main className='bg-[#1f2028] absolute'>
      <Header/>
      <Main/>
      <Hero/>
      <Skills/>
      <Projects/>



    </main>
  )
}

export default App
