
import React from 'react'
export default function Education(){
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-semibold mb-4">🎓 Education & Certifications</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg border border-gray-800">
          <h4 className="font-semibold">B.Sc. Computer Science</h4>
          <p className="text-sm text-gray-400">University Name — Year</p>
        </div>
        <div className="p-4 rounded-lg border border-gray-800">
          <h4 className="font-semibold">Certifications</h4>
          <ul className="mt-2 text-sm text-gray-300 list-disc list-inside">
            <li>AWS Certified Solutions Architect</li>
            <li>CompTIA Security+</li>
            <li>Certified Kubernetes Administrator (CKA)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
