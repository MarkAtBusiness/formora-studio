'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Formspree vagy más szolgáltatás ide kerül később
    setSent(true)
  }

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-ice text-sm font-medium tracking-widest uppercase mb-3">Kapcsolat</p>
          <h1 className="text-4xl md:text-5xl font-semibold">Beszéljünk a projektedről</h1>
          <p className="mt-4 text-white/70">
            Írj nekünk, és 24 órán belül válaszolunk. Ingyenes konzultáció, kötelezettség nélkül.
          </p>
        </div>

        {sent ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center p-12 rounded-2xl bg-deep border border-ice/30"
          >
            <p className="text-xl font-medium text-ice">Köszönjük az üzeneted!</p>
            <p className="text-white/70 mt-2">Hamarosan felvesszük veled a kapcsolatot.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Név"
                required
                className="w-full px-5 py-4 bg-deep border border-white/10 rounded-xl focus:border-ice outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="E-mail"
                required
                className="w-full px-5 py-4 bg-deep border border-white/10 rounded-xl focus:border-ice outline-none transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Vállalkozás / Projekt típusa"
              className="w-full px-5 py-4 bg-deep border border-white/10 rounded-xl focus:border-ice outline-none transition-colors"
            />
            <textarea
              placeholder="Mesélj a projektedről..."
              rows={5}
              required
              className="w-full px-5 py-4 bg-deep border border-white/10 rounded-xl focus:border-ice outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-4 bg-ice text-black font-medium rounded-xl hover:bg-iceLight transition-colors flex items-center justify-center gap-2"
            >
              Üzenet küldése <Send size={18} />
            </button>
          </motion.form>
        )}

        <div className="mt-12 text-center text-sm text-white/50">
          <p>hello@formora.studio</p>
        </div>
      </div>
    </div>
  )
}
