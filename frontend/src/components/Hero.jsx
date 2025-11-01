
import React from 'react'
export default function Hero(){
  return (
    <section className="flex flex-col md:flex-row items-center gap-8">
      <div className="relative">
        <img src="/src/assets/profile.svg" alt="Profile" className="w-56 h-56 rounded-full object-cover shadow-xl" />
        <div className="absolute -inset-1 rounded-full blur-xl" style={{ boxShadow: '0 0 40px 8px rgba(124,58,237,0.55)' }}></div>
        <div className="absolute right-0 bottom-0 translate-y-6 translate-x-6 bg-gradient-to-r from-purple-600 to-indigo-500 text-black font-semibold px-3 py-1 rounded-2xl shadow-lg">💻 Full Stack Developer</div>
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-200">Building secure, scalable web apps</h2>
        <p className="mt-3 text-gray-300 max-w-xl">Full Stack Developer • Cloud Engineer • Cybersecurity Expert. I design and ship production-ready systems with a strong focus on security, observability, and developer experience.</p>
        <div className="mt-4 space-x-3">
          <a href="#projects" className="px-4 py-2 rounded-full border border-gray-700 hover:border-purple-400">View Projects</a>
          <a href="#contact" className="px-4 py-2 rounded-full bg-purple-600 text-black font-semibold">Contact Me</a>
        </div>
      </div>
    </section>
  )
}
