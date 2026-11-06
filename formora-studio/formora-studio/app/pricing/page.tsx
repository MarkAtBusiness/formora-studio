'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Landing',
    price: '249 000',
    desc: 'Egyoldalas, konverzióorientált oldal',
    features: ['Egyedi design', 'Reszponzív', 'Kapcsolati űrlap', 'SEO alapok', '2 hét átfutás'],
    popular: false,
  },
  {
    name: 'Business',
    price: '449 000',
    desc: 'Többoldalas professzionális weboldal',
    features: ['Egyedi design', '5-8 oldal', 'Admin felület', 'SEO optimalizálás', 'Animációk', '3-4 hét'],
    popular: true,
  },
  {
    name: 'Premium',
    price: 'Egyedi',
    desc: 'Komplex megoldások, webshop, SaaS',
    features: ['Teljes egyedi fejlesztés', 'Integrációk', 'Speciális funkciók', 'Prioritás support', 'Folyamatos fejlesztés'],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-ice text-sm font-medium tracking-widest uppercase mb-3">Árak</p>
          <h1 className="text-4xl md:text-5xl font-semibold">Átlátható árazás</h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Fix árak, nincsenek rejtett költségek. Minden csomag tartalmazza a teljes fejlesztést és a betanítást.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-2xl border ${
                plan.popular
                  ? 'bg-deep border-ice shadow-lg shadow-ice/10'
                  : 'bg-deep/50 border-white/10'
              }`}
            >
              {plan.popular && (
                <span className="inline-block px-3 py-1 text-xs font-medium bg-ice text-black rounded-full mb-4">
                  Legnépszerűbb
                </span>
              )}
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="text-white/60 text-sm mt-1">{plan.desc}</p>
              <div className="mt-6 mb-8">
                <span className="text-4xl font-semibold">{plan.price}</span>
                {plan.price !== 'Egyedi' && <span className="text-white/60"> Ft</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <Check size={16} className="text-ice flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`block text-center py-3 rounded-full font-medium transition-colors ${
                  plan.popular
                    ? 'bg-ice text-black hover:bg-iceLight'
                    : 'border border-white/20 hover:bg-white/5'
                }`}
              >
                Ajánlatkérés
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
