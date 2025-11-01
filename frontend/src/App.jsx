
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
export default function App(){ return (
  <div className="min-h-screen bg-black text-white antialiased">
    <Header />
    <main className="max-w-6xl mx-auto px-6 py-12">
      <Hero />
      <Tech />
      <Education />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
) }
