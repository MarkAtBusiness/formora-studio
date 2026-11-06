'use client'

import { motion } from 'framer-motion'

const projects = [
  { name: 'Étterem weboldal', category: 'Vendéglátás', result: '+42% foglalás' },
  { name: 'Coach landing', category: 'Oktatás', result: '3.8x lead' },
  { name: 'E-commerce shop', category: 'Kiskereskedelem', result: '+67% bevétel' },
  { name: 'Szolgáltató oldal', category: 'B2B', result: '2.1x konverzió' },
  { name: 'Portfólió', category: 'Kreatív', result: 'Új ügyfelek' },
  { name: 'SaaS landing', category: 'Tech', result: 'Magas minőségű lead' },
]

export default function References() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-ice text-sm font-medium tracking-widest uppercase mb-3">Referenciák</p>
          <h1 className="text-4xl md:text-5xl font-semibold">Munkáink</h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Valódi eredmények. Nem csak szép oldalak — mérhető üzleti hatással.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden bg-deep border border-white/10 hover:border-ice/40 transition-all"
            >
              <div className="aspect-video bg-gradient-to-br from-deep to-black/80 flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-xs text-ice uppercase tracking-widest">{p.category}</p>
                  <h3 className="text-xl font-semibold mt-2">{p.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-ice font-medium">{p.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
