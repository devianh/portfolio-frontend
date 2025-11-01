
import React from 'react'
const projects = [
  { id:1, title: 'Real-time Chat App', desc: 'Full stack chat with WebSockets and auth', live:'#', repo:'#', img:'/src/assets/project1.svg' },
  { id:2, title: 'E-commerce Platform', desc: 'Payments, admin, and scalable backend', live:'#', repo:'#', img:'/src/assets/project2.svg' }
]
export default function Projects(){
  return (
    <section id="projects" className="mt-12">
      <h3 className="text-2xl font-semibold mb-6">📁 Projects</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p=> (
          <div key={p.id} className="rounded-xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900/40 p-0">
            <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold text-lg mb-1">{p.title}</h4>
              <p className="text-sm text-gray-400 mb-3">{p.desc}</p>
              <div className="flex space-x-3">
                <a href={p.live} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md border border-gray-700 hover:border-cyan-400">🔗 Live Demo</a>
                <a href={p.repo} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md bg-purple-600 text-black font-semibold">💻 View on GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
