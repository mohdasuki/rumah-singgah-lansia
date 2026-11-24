import {
  MessageCircle,
  Video,
  HeartPulse,
  ArrowUpRight,
  ShieldCheck,
  Stethoscope,
  CalendarCheck,
} from "lucide-react"

import SectionTitle from "../ui/SectionTitle"
import { siteConfig } from "../../config/site"

const consultationSteps = [
  {
    icon: MessageCircle,
    title: "Hubungi Petugas",
    description:
      "Lansia atau keluarga menghubungi petugas melalui WhatsApp.",
  },
  {
    icon: CalendarCheck,
    title: "Koordinasi Konsultasi",
    description:
      "Petugas membantu mengatur komunikasi dengan tenaga kesehatan.",
  },
  {
    icon: Stethoscope,
    title: "Konsultasi Kesehatan",
    description:
      "Konsultasi dilakukan sesuai kebutuhan dan kompetensi tenaga kesehatan.",
  },
]

export default function TelenursingSection() {
  const whatsappLink = siteConfig.links.whatsapp

  return (
    <section
      id="telenursing"
      className="overflow-hidden bg-cream px-5 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <div className="order-2 lg:order-1">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-soft-green px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Telenursing
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl lg:text-5xl">
              Konsultasi Kesehatan,
              <span className="block text-secondary">
                Lebih Mudah dan Dekat.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted">
              Rumah Singgah Ramah Lansia menyediakan
              layanan komunikasi dan konsultasi kesehatan
              secara daring untuk membantu lansia dan
              keluarga memperoleh informasi serta
              pendampingan dari tenaga kesehatan yang kompeten.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {whatsappLink ? (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#208B61] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#176F4C]"
                >
                  <MessageCircle size={19} />
                  Konsultasi via WhatsApp
                  <ArrowUpRight size={16} />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-gray-300 px-6 py-3.5 text-sm font-semibold text-gray-500"
                >
                  <MessageCircle size={19} />
                  WhatsApp Belum Dikonfigurasi
                </button>
              )}
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-white p-4">
              <ShieldCheck
                size={21}
                className="mt-0.5 shrink-0 text-secondary"
              />

              <p className="text-xs leading-6 text-muted">
                Konsultasi dilakukan dengan memperhatikan
                privasi dan kerahasiaan informasi kesehatan.
                Layanan daring tidak menggantikan pemeriksaan
                langsung oleh tenaga kesehatan.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-xl">

              <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-soft-green blur-2xl" />

              <div className="relative aspect-[4/4.3] overflow-hidden rounded-[32px] bg-soft-green shadow-xl shadow-primary/10 md:rounded-[40px]">
                <img
                  src="/images/about/telenursing.jpg"
                  alt="Tenaga kesehatan sedang berkonsultasi dengan lansia"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-5 -left-4 rounded-2xl border border-border bg-white p-4 shadow-xl sm:-left-7 sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-soft-green">
                    <HeartPulse
                      size={22}
                      className="text-primary"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-primary">
                      Peduli Kesehatan
                    </p>

                    <p className="mt-1 text-xs text-muted">
                      Pendampingan lansia
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-3 top-8 hidden rounded-2xl bg-white p-4 shadow-lg sm:block">
                <div className="flex items-center gap-2">
                  <Video
                    size={20}
                    className="text-secondary"
                  />

                  <span className="text-xs font-bold text-primary">
                    Layanan Digital
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-24">
          <SectionTitle
            label="Alur Konsultasi"
            title="Bagaimana Layanan Ini Bekerja?"
            description="Proses komunikasi dirancang sederhana agar lansia dan keluarga dapat memperoleh akses konsultasi dengan lebih mudah."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {consultationSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <div
                  key={step.title}
                  className="relative rounded-3xl border border-border bg-white p-6 md:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-soft-green">
                      <Icon
                        size={23}
                        className="text-primary"
                      />
                    </div>

                    <span className="text-2xl font-bold text-secondary/30">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-primary">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
