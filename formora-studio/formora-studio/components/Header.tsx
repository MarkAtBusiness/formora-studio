'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/', label: 'Főoldal' },
    { href: '/services', label: 'Szolgáltatások' },
    { href: '/references', label: 'Referenciák' },
    { href: '/pricing', label: 'Árak' },
    { href: '/about', label: 'Rólunk' },
    { href: '/contact', label: 'Kapcsolat' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold tracking-tight">
          FORMORA <span className="text-ice">STUDIO</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 hover:text-ice transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 px-5 py-2.5 bg-ice text-black text-sm font-medium rounded-full hover:bg-iceLight transition-colors"
          >
            Ajánlatkérés
          </Link>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-deep border-t border-white/10 px-6 py-6 flex flex-col gap-4"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/90 hover:text-ice"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  )
}
