'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-ice text-sm font-medium tracking-widest uppercase mb-3">Rólunk</p>
          <h1 className="text-4xl md:text-5xl font-semibold">FORMORA STUDIO</h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-lg text-white/80 leading-relaxed">
            A FORMORA STUDIO egy prémium webdesign ügynökség, amely modern, eredményorientált weboldalakat készít vállalkozásoknak.
          </p>
          <p className="text-white/70 leading-relaxed mt-6">
            Hiszünk abban, hogy egy weboldalnak nem csak szépnek kell lennie — dolgoznia kell helyetted. Minden projektünk stratégiai gondolkodással indul: megértjük a céljaidat, az ügyfeleidet, és olyan felületet tervezünk, ami konvertál.
          </p>
          <p className="text-white/70 leading-relaxed mt-6">
            Minimalista design, prémium minőség, átlátható folyamat. Nem dolgozunk sablonokkal — minden oldal egyedi.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { num: '50+', label: 'Elkészült projekt' },
              { num: '98%', label: 'Elégedett ügyfél' },
              { num: '2-4', label: 'Hét átfutás' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-deep border border-white/10">
                <p className="text-3xl font-semibold text-ice">{stat.num}</p>
                <p className="text-sm text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
