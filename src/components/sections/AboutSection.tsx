
import {
  Target,
  Users,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Tujuan",
    description:
      "Meningkatkan kualitas hidup lansia agar tetap sehat, mandiri, dan bermakna.",
  },
  {
    icon: Users,
    title: "Sasaran",
    description:
      "Lansia di Desa Jubung dan masyarakat di sekitarnya.",
  },
  {
    icon: HeartHandshake,
    title: "Komitmen",
    description:
      "Pelayanan yang ramah, humanis, dan berkelanjutan.",
  },
]

export default function AboutSection() {
  return (
    <section
      id="tentang"
      className="bg-white px-5 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-soft-green" />

          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-soft-green shadow-xl shadow-primary/5 md:rounded-[36px]">
            <img
              src="/images/about/about-lansia.jpg"
              alt="Kegiatan pendampingan lansia bersama kader"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 right-4 rounded-2xl border border-border bg-white px-5 py-4 shadow-lg md:-right-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-soft-green">
                <HeartHandshake
                  size={23}
                  className="text-primary"
                />
              </div>

              <div>
                <p className="text-sm font-bold text-primary">
                  Berbasis Komunitas
                </p>
                <p className="mt-1 text-xs text-muted">
                  Dari, oleh, dan untuk masyarakat
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5 lg:pt-0">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-soft-green px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Tentang Kami
            </span>
          </div>

          <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl lg:text-5xl">
            Mengenal Rumah Singgah
            <span className="block text-secondary">
              Ramah Lansia
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-muted">
            Rumah Singgah Ramah Lansia Desa Jubung
            merupakan program pemberdayaan masyarakat
            yang menghadirkan ruang pelayanan,
            pendampingan, edukasi, dan aktivitas sosial
            bagi lansia.
          </p>

          <p className="mt-4 text-base leading-8 text-muted">
            Melalui Gerakan Lansia Sehat dan Mandiri,
            program ini mendorong keterlibatan lansia,
            keluarga, kader, dan tenaga kesehatan untuk
            menciptakan lingkungan yang mendukung
            kehidupan lansia agar tetap sehat, aktif,
            mandiri, dan bermakna.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-cream/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-soft-green">
                    <Icon
                      size={21}
                      className="text-primary"
                    />
                  </div>

                  <h3 className="text-sm font-bold text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-muted">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>

          <a
            href="#layanan"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-secondary"
          >
            Kenali layanan kami
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  )
}
