
import { useState } from "react"

import {
  Brain,
  Activity,
  Accessibility,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  HeartPulse,
  ChevronDown,
} from "lucide-react"

import SectionTitle from "../ui/SectionTitle"

import { educationItems } from "../../data/education"

import CognitiveArticle from "./education/CognitiveArticle"
import JointExerciseArticle from "./education/JointExerciseArticle"
import BalanceArticle from "./education/BalanceArticle"

const iconMap = {
  brain: Brain,
  activity: Activity,
  accessibility: Accessibility,
}

export default function EducationSection() {
  const [activeId, setActiveId] = useState<number | null>(null)

  const activeEducation = educationItems.find(
    (item) => item.id === activeId
  )

  const handleBack = () => {
  setActiveId(null)

  requestAnimationFrame(() => {
    document.getElementById("edukasi")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  })
}

  // Menampilkan artikel sesuai materi yang dipilih
  if (activeId === 1) {
    return (
      <section
        id="edukasi"
        className="scroll-mt-24 bg-cream px-5 py-20 md:py-28"
      >
        <CognitiveArticle onBack={handleBack} />
      </section>
    )
  }

  if (activeId === 2) {
    return (
      <section
        id="edukasi"
        className="bg-cream px-5 py-20 md:py-28"
      >
        <JointExerciseArticle onBack={handleBack} />
      </section>
    )
  }

  if (activeId === 3) {
    return (
      <section
        id="edukasi"
        className="bg-cream px-5 py-20 md:py-28"
      >
        <BalanceArticle onBack={handleBack} />
      </section>
    )
  }

  return (
    <section
      id="edukasi"
      className="bg-cream px-5 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            label="Pusat Edukasi Lansia"
            title="Belajar Sehat, Tetap Aktif dan Berdaya."
            description="Temukan informasi dan panduan sederhana untuk mendukung kesehatan, aktivitas, dan kualitas hidup lansia."
            align="left"
          />

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-4 py-3">
            <BookOpen
              size={19}
              className="text-secondary"
            />

            <span className="text-xs font-semibold text-primary">
              Materi Edukasi
            </span>
          </div>
        </div>

        {/* Education Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">

          {educationItems.map((item) => {
            const Icon =
              iconMap[item.icon as keyof typeof iconMap]

            const isActive = activeId === item.id

            return (
              <article
                key={item.id}
                className={`flex flex-col rounded-3xl border bg-white p-6 transition-all duration-300 md:p-7 ${
                  isActive
                    ? "border-secondary shadow-lg shadow-primary/5"
                    : "border-border hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                }`}
              >

                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-soft-green">
                    <Icon
                      size={27}
                      className="text-primary"
                    />
                  </div>

                  <span className="text-3xl font-bold text-secondary/25">
                    {String(item.id).padStart(2, "0")}
                  </span>
                </div>

                {/* Category */}
                <span className="mt-7 w-fit rounded-full bg-soft-green px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-xl font-bold leading-snug text-primary">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                  {item.description}
                </p>

                {/* Benefits */}
                <div className="mt-6 border-t border-border pt-5">
                  <p className="mb-4 text-xs font-bold text-primary">
                    Manfaat yang didukung
                  </p>

                  <div className="flex flex-col gap-3">
                    {item.benefits.slice(0, 3).map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-secondary"
                        />

                        <span className="text-xs leading-5 text-muted">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Read Article Button */}
                <button
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-secondary"
                >
                  Baca Materi
                  <ArrowRight size={17} />
                </button>

              </article>
            )
          })}

        </div>

        {/* Additional Information for Cards 2 and 3 */}
        {activeEducation && (
          <div
            id="detail-edukasi"
            className="mt-10 scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-white"
          >
            <div className="bg-primary p-6 text-white md:p-9">

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <BookOpen size={24} />
                </div>

                <div>
                  <p className="text-xs text-white/60">
                    Materi Edukasi
                  </p>

                  <h3 className="mt-1 text-xl font-bold md:text-2xl">
                    {activeEducation.title}
                  </h3>
                </div>
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/75">
                {activeEducation.description}
              </p>
            </div>

            <div className="grid gap-9 p-6 md:grid-cols-2 md:p-9">

              {/* Benefits */}
              <div>
                <div className="flex items-center gap-2">
                  <HeartPulse
                    size={20}
                    className="text-secondary"
                  />

                  <h4 className="font-bold text-primary">
                    Manfaat Aktivitas
                  </h4>
                </div>

                <div className="mt-5 flex flex-col gap-4">
                  {activeEducation.benefits.map(
                    (benefit, index) => (
                      <div
                        key={benefit}
                        className="flex items-start gap-3"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-soft-green text-xs font-bold text-primary">
                          {index + 1}
                        </span>

                        <p className="pt-1 text-sm leading-6 text-muted">
                          {benefit}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Activities */}
              <div>
                <div className="flex items-center gap-2">
                  <Activity
                    size={20}
                    className="text-secondary"
                  />

                  <h4 className="font-bold text-primary">
                    Aktivitas dan Panduan
                  </h4>
                </div>

                <div className="mt-5 flex flex-col gap-5">
                  {activeEducation.activities.map(
                    (activity, index) => (
                      <div
                        key={activity.title}
                        className="flex items-start gap-3"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-soft-green text-xs font-bold text-primary">
                          {index + 1}
                        </span>

                        <div>
                          <h5 className="text-sm font-bold text-primary">
                            {activity.title}
                          </h5>

                          <p className="mt-1 text-xs leading-6 text-muted">
                            {activity.description}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

            </div>

            {/* Safety Information */}
            <div className="mx-6 mb-6 flex items-start gap-3 rounded-2xl bg-cream p-5 md:mx-9 md:mb-9">
              <HeartPulse
                size={21}
                className="mt-0.5 shrink-0 text-secondary"
              />

              <div>
                <p className="text-sm font-bold text-primary">
                  Perhatikan Keamanan
                </p>

                <p className="mt-2 text-xs leading-6 text-muted">
                  {activeEducation.note}
                </p>
              </div>
            </div>

            {/* Close Detail */}
            <div className="flex justify-end border-t border-border px-6 py-4 md:px-9">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary"
              >
                Tutup Materi
                <ChevronDown
                  size={16}
                  className="rotate-180"
                />
              </button>
            </div>

          </div>
        )}

        {/* Education CTA */}
        <div className="mt-12 rounded-3xl bg-primary p-7 md:p-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-center">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">
              <HeartPulse
                size={27}
                className="text-white"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white md:text-2xl">
                Pengetahuan untuk Hidup Lebih Sehat
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">
                Mari bersama membangun kebiasaan hidup sehat
                dan lingkungan yang mendukung kemandirian lansia.
              </p>
            </div>

          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-5 text-xs leading-6 text-muted">
          Materi edukasi merupakan informasi umum dan bukan
          pengganti pemeriksaan atau rekomendasi individual
          dari tenaga kesehatan.
        </p>

      </div>
    </section>
  )
}
