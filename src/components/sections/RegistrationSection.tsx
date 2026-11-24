import {
  UserRoundPlus,
  HeartPulse,
  ClipboardCheck,
  ArrowUpRight,
  ClipboardList,
  ShieldCheck,
  ExternalLink,
} from "lucide-react"

import SectionTitle from "../ui/SectionTitle"
import { siteConfig } from "../../config/site"

const registrationForms = [
  {
    number: "01",
    icon: UserRoundPlus,
    title: "Registrasi Lansia",
    description:
      "Formulir pendataan identitas dan informasi dasar lansia yang menjadi sasaran program Rumah Singgah.",
    label: "Formulir Registrasi",
    link: siteConfig.links.registration,
  },
  {
    number: "02",
    icon: HeartPulse,
    title: "Pemeriksaan Kesehatan",
    description:
      "Formulir pencatatan hasil pemeriksaan kesehatan untuk mendukung pemantauan kondisi lansia.",
    label: "Formulir Pemeriksaan",
    link: siteConfig.links.healthService,
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Skrining Kesehatan",
    description:
      "Formulir identifikasi kondisi dan faktor risiko kesehatan sebagai dasar tindak lanjut pelayanan.",
    label: "Formulir Skrining",
    link: siteConfig.links.healthScreening,
  },
]

export default function RegistrationSection() {
  return (
    <section
      id="pendataan"
      className="bg-white px-5 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid items-end gap-8 lg:grid-cols-2">
          <SectionTitle
            label="Pendataan Digital"
            title="Data yang Terarah, Pelayanan yang Lebih Baik."
            description="Pendataan digital membantu kader dan petugas dalam mengelola informasi lansia serta mendukung pelaksanaan pelayanan kesehatan secara terstruktur."
            align="left"
          />

          <div className="flex items-start gap-3 rounded-2xl bg-soft-green p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white">
              <ClipboardList
                size={22}
                className="text-primary"
              />
            </div>

            <div>
              <p className="text-sm font-bold text-primary">
                Pendataan Terstruktur
              </p>

              <p className="mt-1 text-xs leading-6 text-muted">
                Pengisian formulir dilakukan melalui Google Forms
                dan hasilnya dikelola menggunakan Google Sheets.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {registrationForms.map((form) => {
            const Icon = form.icon
            const isAvailable = Boolean(form.link)

            return (
              <article
                key={form.number}
                className="group flex flex-col rounded-3xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-xl hover:shadow-primary/5 md:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-soft-green transition-colors group-hover:bg-primary">
                    <Icon
                      size={26}
                      className="text-primary transition-colors group-hover:text-white"
                    />
                  </div>

                  <span className="text-sm font-bold tracking-widest text-secondary/50">
                    {form.number}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-bold text-primary">
                  {form.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                  {form.description}
                </p>

                {isAvailable ? (
                  <a
                    href={form.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-secondary"
                  >
                    {form.label}
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="mt-7 inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full bg-gray-100 px-5 py-3.5 text-sm font-semibold text-gray-400"
                  >
                    Tautan Belum Tersedia
                    <ArrowUpRight size={16} />
                  </button>
                )}
              </article>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-border bg-cream p-6 sm:flex-row sm:items-start md:p-8">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-soft-green">
            <ShieldCheck
              size={24}
              className="text-primary"
            />
          </div>

          <div>
            <h3 className="text-sm font-bold text-primary">
              Perlindungan Data Lansia
            </h3>

            <p className="mt-2 text-sm leading-7 text-muted">
              Data identitas dan informasi kesehatan lansia
              dikelola oleh kader dan petugas yang berwenang.
              Informasi pribadi tidak ditampilkan secara
              terbuka pada website.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
