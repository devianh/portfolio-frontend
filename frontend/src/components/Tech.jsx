
import React from 'react'
const tools = ["HTML","CSS","JavaScript","TypeScript","React","Next.js","Tailwind CSS","Node.js","Express","Python","Django","FastAPI","MongoDB","PostgreSQL","MySQL","Firebase","Docker","Kubernetes","AWS","GCP","Azure","Git","CI/CD","Linux","Wireshark","Nmap","Burp Suite","Metasploit"]
export default function Tech(){
  return (
    <section id="tech" className="mt-12">
      <h3 className="text-2xl font-semibold mb-4">🧠 My Tech Stack</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {tools.map(t => <div key={t} className="px-3 py-2 rounded-lg border border-gray-800 bg-gradient-to-br from-white/2 to-white/1 text-sm font-medium"><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-cyan-200">{t}</span></div>)}
      </div>
    </section>
  )
}
