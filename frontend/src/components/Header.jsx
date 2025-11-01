
import React from 'react'
export default function Header(){
  return (
    <header className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Ian Irungu</h1>
      <nav className="space-x-4 text-sm">
        <a href="#projects" className="hover:text-purple-400">Projects</a>
        <a href="#tech" className="hover:text-purple-400">Tech</a>
        <a href="#contact" className="hover:text-purple-400">Contact</a>
      </nav>
    </header>
  )
}
