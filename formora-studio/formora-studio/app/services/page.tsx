'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Egyedi weboldalak',
    desc: 'Teljesen egyedi design és fejlesztés. Nem sablon, hanem a vállalkozásodhoz szabott prémium megoldás.',
    features: ['Reszponzív design', 'SEO optimalizálás', 'Gyors betöltés', 'Admin felület'],
  },
  {
    title: 'Webshop fejlesztés',
    desc: 'Konverzióorientált online áruházak, amelyek valóban értékesítenek. Modern UX és biztonságos fizetés.',
    features: ['Termékkatalógus', 'Fizetési integráció', 'Raktárkezelés', 'Mobil optimalizálás'],
  },
  {
    title: 'Landing page-ek',
    desc: 'Célzott kampányoldalak, amelyek maximalizálják a konverziót. Rövid, hatásos, eredményes.',
    features: ['A/B tesztelésre kész', 'Gyors betöltés', 'Lead generálás', 'Analytics'],
  },
  {
    title: 'Weboldal újratervezés',
    desc: 'Meglévő oldalad modernizálása. Friss design, jobb teljesítmény, magasabb konverzió.',
    features: ['Audit', 'Új design', 'Migráció', 'Optimalizálás'],
  },
]

export default function Services() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-ice text-sm font-medium tracking-widest uppercase mb-3">Szolgáltatások</p>
          <h1 className="text-4xl md:text-5xl font-semibold">Amit csinálunk</h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Teljes körű webfejlesztés prémium minőségben. Minden projekt egyedi, minden megoldás eredményorientált.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-deep border border-white/10 hover:border-ice/30 transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="text-white/70 mb-6">{s.desc}</p>
              <ul className="space-y-2">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-ice" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
