
import React, {useState} from 'react'
import axios from 'axios'
export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [loading, setLoading] = useState(false)
  async function submit(e){
    e.preventDefault()
    if(!form.name || !form.email || !form.message){ alert('Please fill all fields'); return }
    setLoading(true)
    try{
      const res = await axios.post('/api/contact', form)
      if(res.data?.ok){
        alert('Message sent — you will receive a WhatsApp notification.')
        setForm({name:'',email:'',message:''})
      } else {
        alert('Error: ' + JSON.stringify(res.data))
      }
    }catch(err){
      alert('Request failed: ' + (err.response?.data?.error || err.message))
    }finally{ setLoading(false) }
  }
  return (
    <section id="contact" className="mt-12 mb-20">
      <h3 className="text-2xl font-semibold mb-4">✉️ Contact Me</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <form onSubmit={submit} className="p-6 rounded-xl border border-gray-800 bg-gray-900">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input name="name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full px-3 py-2 rounded bg-black border border-gray-700 mb-3"/>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input name="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full px-3 py-2 rounded bg-black border border-gray-700 mb-3"/>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea name="message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={5} className="w-full px-3 py-2 rounded bg-black border border-gray-700 mb-4"/>
          <button type="submit" disabled={loading} className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold">{loading? 'Sending...':'Send Message'}</button>
        </form>
        <div className="p-6 rounded-xl border border-gray-800 bg-gray-900">
          <h4 className="font-semibold mb-3">Quick contact</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>📞 WhatsApp: +254 712 345 678</li>
            <li>📧 Email: ianirungu@example.com</li>
            <li>🔗 LinkedIn: linkedin.com/in/ianirungu</li>
            <li>💻 GitHub: github.com/ianirungu</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
