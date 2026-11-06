'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react'

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep/40 to-black" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-ice text-sm font-medium tracking-widest uppercase mb-4">FORMORA STUDIO</p>
            <h1 className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight">
              Weboldalak, amik<br />
              <span className="text-ice">dolgoznak helyetted.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Prémium, konverzióorientált weboldalak modern vállalkozásoknak. Nem csak szép — eredményt hoz.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-ice text-black font-medium rounded-full hover:bg-iceLight transition-all flex items-center justify-center gap-2"
              >
                Ingyenes konzultáció <ArrowRight size={18} />
              </Link>
              <Link
                href="/references"
                className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all"
              >
                Referenciák megtekintése
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: 'Prémium design', desc: 'Minimalista, egyedi és időtálló megjelenés, ami kiemel a versenytársak közül.' },
              { icon: Zap, title: 'Gyors és hatékony', desc: 'Optimalizált teljesítmény, hogy a látogatóid ne várjanak — és konvertáljanak.' },
              { icon: Shield, title: 'Eredményorientált', desc: 'Nem csak szép oldal. Stratégiailag megtervezett felület, ami ügyfeleket hoz.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-deep border border-white/10"
              >
                <item.icon className="text-ice mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
