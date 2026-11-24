
import {
  ArrowUpRight,
  Images,
} from "lucide-react"

import SectionTitle from "../ui/SectionTitle"
import { gallery } from "../../data/gallery"

export default function GallerySection() {
  return (
    <section
      id="galeri"
      className="bg-white px-5 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            label="Galeri Kegiatan"
            title="Setiap Momen, Penuh Makna."
            description="Dokumentasi kegiatan dan kebersamaan dalam mendukung lansia agar tetap sehat, aktif, dan berdaya."
            align="left"
          />

          <div className="flex items-center gap-2 rounded-full border border-border bg-cream px-4 py-3">
            <Images size={19} className="text-secondary" />
            <span className="text-xs font-semibold text-primary">
              Cerita Kegiatan Kami
            </span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {gallery.map((item) => (
            <a
              key={item.id}
              href={item.image}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl bg-soft-green md:rounded-3xl ${
                item.size === "large"
                  ? "col-span-2 row-span-2"
                  : "col-span-1"
              }`}
            >
              <div
                className={`relative ${
                  item.size === "large"
                    ? "aspect-[4/3] h-full min-h-[260px] md:aspect-auto"
                    : "aspect-square"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white/75">
                    {item.category}
                  </span>

                  <h3 className="mt-2 text-sm font-bold leading-snug text-white md:text-lg">
                    {item.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-xs font-medium text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Lihat Foto
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-cream p-6 text-center md:p-8">
          <p className="text-sm leading-7 text-muted">
            Setiap kegiatan merupakan bagian dari upaya
            membangun lingkungan yang peduli, mendukung,
            dan menghargai kehidupan lansia.
          </p>
        </div>

      </div>
    </section>
  )
}
