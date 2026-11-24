
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  HeartPulse,
  Users,
} from "lucide-react"

import Button from "../ui/Button"
import { siteConfig } from "../../config/site"

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="overflow-hidden bg-cream"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">

        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-soft-green px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            <span className="text-xs font-semibold tracking-wide text-primary">
              Peduli, Mendampingi, Memberdayakan
            </span>
          </div>

          <h1 className="max-w-2xl text-4xl font-bold leading-[1.15] tracking-tight text-primary sm:text-5xl lg:text-[62px]">
            Usia bertambah,
            <span className="mt-1 block text-secondary">
              makna hidup
            </span>
            tetap tumbuh.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-muted md:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button
              onClick={() =>
                document
                  .getElementById("layanan")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Jelajahi Layanan
              <ArrowUpRight size={17} />
            </Button>

            <a
              href="#pendataan"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-soft-green"
            >
              Akses Pendataan
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-border pt-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-soft-green">
                <HeartPulse size={20} className="text-primary" />
              </div>

              <div>
                <p className="text-sm font-bold text-primary">
                  Peduli Kesehatan
                </p>
                <p className="mt-1 text-xs text-muted">
                  Layanan lansia
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-soft-green">
                <Users size={20} className="text-primary" />
              </div>

              <div>
                <p className="text-sm font-bold text-primary">
                  Berbasis Komunitas
                </p>
                <p className="mt-1 text-xs text-muted">
                  Bersama masyarakat
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">

          <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-soft-green blur-3xl" />

          <div className="absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-[#E8E8D8] blur-3xl" />

          <div className="relative">
            <div className="aspect-[4/4.5] overflow-hidden rounded-[32px] bg-soft-green shadow-xl shadow-primary/10 sm:rounded-[40px]">
              <img
                src="/images/hero/hero-lansia.jpg"
                alt="Lansia yang aktif dan bahagia bersama pendamping"
                className="h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none"
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:-left-7 sm:right-auto sm:max-w-[280px] sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-soft-green">
                  <Heart size={21} className="fill-secondary text-secondary" />
                </div>

                <div>
                  <p className="text-sm font-bold text-primary">
                    Setiap Usia Berarti
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    Sehat, aktif, dan tetap terhubung dengan sesama.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 top-8 hidden rounded-2xl bg-white p-4 shadow-lg sm:block">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-soft-green">
                  <HeartPulse size={19} className="text-primary" />
                </div>

                <div>
                  <p className="text-xs font-bold text-primary">
                    Lansia Berdaya
                  </p>
                  <p className="mt-1 text-[10px] text-muted">
                    Hidup lebih bermakna
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
