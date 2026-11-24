import {
  BookOpen,
  HeartPulse,
  Users,
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react"

import SectionTitle from "../ui/SectionTitle"

const services = [
  {
    number: "01",
    icon: BookOpen,
    title: "Edukasi Kesehatan",
    description:
      "Meningkatkan pemahaman lansia dan keluarga mengenai kesehatan, pencegahan penyakit, serta pola hidup sehat.",
    features: [
      "Penyuluhan kesehatan",
      "Informasi pencegahan penyakit",
      "Edukasi pola hidup sehat",
    ],
  },
  {
    number: "02",
    icon: HeartPulse,
    title: "Pemeriksaan dan Monitoring",
    description:
      "Mendukung pemantauan kondisi kesehatan lansia melalui pemeriksaan dan pencatatan kesehatan secara berkala.",
    features: [
      "Pemeriksaan kesehatan",
      "Pencatatan hasil pemeriksaan",
      "Pemantauan kondisi lansia",
    ],
  },
  {
    number: "03",
    icon: Users,
    title: "Pendampingan Kader",
    description:
      "Meningkatkan keterlibatan kader dan keluarga dalam memberikan perhatian serta pendampingan kepada lansia.",
    features: [
      "Pemberdayaan kader",
      "Pendampingan lansia",
      "Keterlibatan keluarga",
    ],
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Konsultasi Kesehatan",
    description:
      "Memfasilitasi komunikasi dan konsultasi kesehatan secara digital untuk mendukung akses informasi kesehatan.",
    features: [
      "Konsultasi melalui WhatsApp",
      "Komunikasi dengan tenaga kesehatan",
      "Akses informasi kesehatan",
    ],
  },
]

export default function ServicesSection() {
  return (
    <section
      id="layanan"
      className="overflow-hidden bg-cream px-5 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            label="Layanan Kami"
            title="Kepedulian untuk Setiap Langkah Usia."
            description="Berbagai bentuk pelayanan dan pendampingan untuk mendukung lansia agar tetap sehat, aktif, mandiri, dan bermakna."
            align="left"
          />

          <div className="hidden shrink-0 pb-2 md:block">
            <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-3">
              <HeartPulse
                size={19}
                className="text-secondary"
              />
              <span className="text-xs font-semibold text-primary">
                Sehat dan Berdaya
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.number}
                className="group relative flex flex-col rounded-3xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-secondary/30 hover:shadow-xl hover:shadow-primary/5 md:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-soft-green transition-colors duration-300 group-hover:bg-primary">
                    <Icon
                      size={26}
                      strokeWidth={1.7}
                      className="text-primary transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  <span className="text-sm font-bold tracking-widest text-secondary/50">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-bold leading-snug text-primary">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {service.description}
                </p>

                <div className="my-6 border-t border-border" />

                <div className="flex flex-1 flex-col gap-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-secondary"
                      />

                      <span className="text-xs leading-5 text-muted">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-2 text-xs font-bold text-primary transition-colors group-hover:text-secondary">
                  Layanan Ramah Lansia
                  <ArrowUpRight size={15} />
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl bg-primary p-7 text-center sm:flex-row sm:text-left md:p-10">
          <div>
            <h3 className="text-xl font-bold text-white md:text-2xl">
              Bersama menciptakan lansia yang lebih berdaya.
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
              Mari menjadi bagian dari lingkungan yang peduli,
              mendukung, dan menghargai setiap tahap kehidupan.
            </p>
          </div>

          <a
            href="#kontak"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-soft-green"
          >
            Hubungi Kami
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  )
}
