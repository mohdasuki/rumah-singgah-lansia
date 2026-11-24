
import {
  HeartHandshake,
  MapPin,
  MessageCircle,
  Camera,
  ArrowUpRight,
  Heart,
} from "lucide-react"

import { siteConfig } from "../../config/site"

const footerNavigation = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Pendataan", href: "#pendataan" },
  { label: "Telenursing", href: "#telenursing" },
  { label: "Pusat Edukasi", href: "#edukasi" },
  { label: "Galeri", href: "#galeri" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="kontak"
      className="bg-primary text-white"
    >
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 md:pt-20">

        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-2 lg:grid-cols-4">

          <div className="lg:col-span-2">
            <a
              href="#beranda"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <HeartHandshake size={27} />
              </div>

              <div>
                <p className="text-base font-bold">
                  Ramah Lansia
                </p>

                <p className="mt-1 text-[10px] text-white/60">
                  {siteConfig.location}
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
              {siteConfig.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {siteConfig.links.whatsapp && (
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <MessageCircle size={19} />
                </a>
              )}

              {siteConfig.links.instagram && (
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <Camera size={19} />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold">
              Navigasi
            </h3>

            <ul className="mt-6 flex flex-col gap-4">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {item.label}

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold">
              Informasi Kontak
            </h3>

            <div className="mt-6 flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-0.5 shrink-0 text-white/70"
                />

                <p className="text-sm leading-6 text-white/70">
                  {siteConfig.location}
                </p>
              </div>

              {siteConfig.links.whatsapp && (
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <MessageCircle size={19} />
                  Hubungi melalui WhatsApp
                </a>
              )}

              {siteConfig.links.maps && (
                <a
                  href={siteConfig.links.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <MapPin size={19} />
                  Lihat Lokasi
                </a>
              )}
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-white/55">
            © {currentYear} {siteConfig.name}. Seluruh hak cipta dilindungi.
          </p>

          <div className="flex items-center gap-2 text-xs text-white/65">
            Dikembangkan dengan
            <Heart
              size={13}
              className="fill-white text-white"
            />
            untuk masyarakat.
          </div>
        </div>

        <div className="mt-5 border-t border-white/10 pt-5 text-center">
          <p className="text-[11px] leading-6 text-white/45">
            {siteConfig.institution}
          </p>
        </div>

      </div>
    </footer>
  )
}
