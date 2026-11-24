
import { useState } from "react"
import {
  HeartHandshake,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react"
import { siteConfig } from "../../config/site"

const navigation = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Pendataan", href: "#pendataan" },
  { label: "Edukasi", href: "#edukasi" },
  { label: "Galeri", href: "#galeri" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        <a
          href="#beranda"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-soft-green">
            <HeartHandshake
              size={25}
              className="text-primary"
              strokeWidth={1.8}
            />
          </div>

          <div className="leading-tight">
            <p className="text-sm font-bold tracking-tight text-primary">
              Ramah Lansia
            </p>
            <p className="mt-1 text-[10px] font-medium text-muted">
              Desa Jubung · Jember
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-muted transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={siteConfig.links.whatsapp || "#kontak"}
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-secondary lg:inline-flex"
        >
          Hubungi Kami
          <ArrowUpRight size={15} />
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-soft-green text-primary lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-border bg-white px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-dark transition-colors hover:bg-soft-green hover:text-primary"
              >
                {item.label}
              </a>
            ))}

            <a
              href={siteConfig.links.whatsapp || "#kontak"}
              onClick={() => setIsOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-white"
            >
              Hubungi Kami
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
