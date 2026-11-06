import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-deep border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-xl font-semibold">FORMORA <span className="text-ice">STUDIO</span></p>
            <p className="text-sm text-white/60 mt-1">Weboldalak, amik dolgoznak helyetted.</p>
          </div>
          <div className="flex gap-6 text-sm text-white/70">
            <Link href="/services" className="hover:text-ice">Szolgáltatások</Link>
            <Link href="/pricing" className="hover:text-ice">Árak</Link>
            <Link href="/contact" className="hover:text-ice">Kapcsolat</Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/50">
          © {new Date().getFullYear()} FORMORA STUDIO. Minden jog fenntartva.
        </div>
      </div>
    </footer>
  )
}
