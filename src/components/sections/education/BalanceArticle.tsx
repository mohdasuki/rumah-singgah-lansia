
import {
  ArrowLeft,
  Accessibility,
  CheckCircle2,
  ShieldCheck,
  Clock,
  ExternalLink,
  HeartPulse,
  Footprints,
} from "lucide-react"

type BalanceArticleProps = {
  onBack: () => void
}

const exercises = [
  {
    title: "Berjalan Menyamping",
    steps: [
      "Berdiri tegak dengan kedua kaki rapat dan lutut sedikit rileks.",
      "Langkahkan satu kaki ke samping secara perlahan.",
      "Pindahkan kaki lainnya untuk menyatukannya kembali.",
      "Ulangi ke arah sebaliknya jika mampu.",
    ],
    purpose: "Melatih koordinasi dan kontrol gerakan ke arah samping.",
  },
  {
    title: "Pohon Anggur Sederhana",
    steps: [
      "Berdiri di dekat pegangan yang kokoh.",
      "Silangkan satu kaki di depan kaki lainnya sesuai kemampuan.",
      "Bawa kaki yang lain untuk menyatukannya kembali.",
      "Lakukan secara perlahan dengan tetap menjaga keseimbangan.",
    ],
    purpose: "Melatih koordinasi langkah dan kontrol posisi tubuh.",
  },
  {
    title: "Berjalan dari Tumit ke Ujung Kaki",
    steps: [
      "Berdiri tegak di dekat dinding atau pegangan yang stabil.",
      "Letakkan tumit satu kaki tepat di depan ujung kaki lainnya.",
      "Pindahkan berat badan secara perlahan.",
      "Ulangi dengan kaki yang berlawanan.",
    ],
    purpose: "Melatih keseimbangan saat berjalan dalam garis lurus.",
  },
  {
    title: "Berdiri dengan Satu Kaki",
    steps: [
      "Berdiri menghadap meja atau pegangan yang kokoh.",
      "Pegang penyangga untuk menjaga stabilitas.",
      "Angkat satu kaki sedikit dari lantai.",
      "Pertahankan posisi selama masih nyaman, lalu turunkan perlahan.",
      "Ulangi menggunakan kaki lainnya.",
    ],
    purpose: "Melatih kemampuan mempertahankan keseimbangan dalam posisi berdiri.",
  },
  {
    title: "Langkah ke Atas",
    steps: [
      "Gunakan pijakan rendah yang kokoh dan tidak bergeser, dengan pegangan di dekatnya.",
      "Naikkan satu kaki ke pijakan secara perlahan.",
      "Ikuti dengan kaki lainnya jika mampu.",
      "Turun kembali satu per satu dengan hati-hati.",
    ],
    purpose: "Melatih koordinasi, kekuatan tungkai, dan kemampuan berpindah posisi.",
  },
]

export default function BalanceArticle({
  onBack,
}: BalanceArticleProps) {
  return (
    <article className="mx-auto max-w-5xl">

      <button
        type="button"
        onClick={onBack}
        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary"
      >
        <ArrowLeft size={18} />
        Kembali ke Pusat Edukasi
      </button>

      <header className="rounded-3xl bg-primary p-7 text-white md:p-12">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
          <Accessibility size={30} />
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider">
            Keseimbangan Tubuh
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider">
            Materi 03
          </span>
        </div>

        <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
          Latihan Fisik untuk Keseimbangan Lansia
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
          Mengenal latihan sederhana untuk membantu menjaga
          stabilitas tubuh, koordinasi, dan kemampuan bergerak
          dengan lebih aman.
        </p>

        <div className="mt-7 flex items-center gap-5 text-xs text-white/70">
          <span className="flex items-center gap-2">
            <Footprints size={15} />
            Aktivitas fisik
          </span>
          <span className="flex items-center gap-2">
            <Clock size={15} />
            5–7 menit membaca
          </span>
        </div>
      </header>

      <div className="grid gap-10 py-10 md:grid-cols-[1fr_260px] md:py-14">

        <div className="min-w-0">

          <section id="pengertian-keseimbangan">
            <h2 className="text-2xl font-bold text-primary">
              A. Apa Itu Keseimbangan Tubuh?
            </h2>

            <p className="mt-4 text-sm leading-8 text-muted">
              Keseimbangan merupakan kemampuan tubuh untuk
              mempertahankan posisi dan mengendalikan gerakan
              ketika berdiri, berjalan, maupun berpindah posisi.
              Kemampuan ini melibatkan kerja sama otot, sendi,
              penglihatan, dan sistem saraf.
            </p>

            <p className="mt-4 text-sm leading-8 text-muted">
              Dalam kehidupan sehari-hari, keseimbangan diperlukan
              ketika seseorang bangkit dari kursi, berjalan,
              berbelok, mengambil benda, atau menaiki anak tangga.
            </p>
          </section>

          <section id="pentingnya-keseimbangan" className="mt-12">
            <h2 className="text-2xl font-bold text-primary">
              B. Mengapa Latihan Keseimbangan Penting?
            </h2>

            <p className="mt-4 text-sm leading-8 text-muted">
              Kemampuan keseimbangan dapat berubah seiring
              pertambahan usia dan kondisi kesehatan. Gangguan
              penglihatan, kelemahan otot, gangguan saraf,
              penggunaan obat tertentu, serta kondisi lingkungan
              dapat meningkatkan risiko terjatuh.
            </p>

            <div className="mt-6 rounded-2xl border border-border p-5">
              <h3 className="font-bold text-primary">
                Manfaat latihan keseimbangan
              </h3>

              <ul className="mt-4 space-y-3">
                {[
                  "Mendukung stabilitas tubuh saat berdiri.",
                  "Melatih koordinasi gerakan.",
                  "Mendukung kemampuan berjalan dan berpindah posisi.",
                  "Membantu meningkatkan kemampuan fungsional.",
                  "Membantu mengurangi risiko jatuh apabila dilakukan sebagai bagian dari program latihan yang sesuai.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 size={17} className="mt-1 shrink-0 text-secondary" />
                    <span className="text-sm leading-6 text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-5 text-sm leading-8 text-muted">
              WHO merekomendasikan aktivitas fisik multikomponen
              yang menekankan latihan keseimbangan fungsional
              dan kekuatan otot bagi lansia untuk meningkatkan
              kemampuan fungsional serta membantu mencegah jatuh.
            </p>
          </section>

          <section id="faktor-jatuh" className="mt-12">
            <h2 className="text-2xl font-bold text-primary">
              C. Faktor yang Meningkatkan Risiko Jatuh
            </h2>

            <p className="mt-4 text-sm leading-8 text-muted">
              Jatuh pada lansia dapat dipengaruhi oleh berbagai
              faktor yang saling berkaitan.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["Kekuatan otot", "Kelemahan otot tungkai dapat menyulitkan saat berdiri dan berjalan."],
                ["Gangguan keseimbangan", "Kesulitan mengendalikan posisi tubuh ketika bergerak."],
                ["Gangguan penglihatan", "Kesulitan melihat rintangan atau perubahan permukaan lantai."],
                ["Lingkungan", "Lantai licin, pencahayaan buruk, dan benda berserakan."],
                ["Kondisi kesehatan", "Penyakit tertentu atau efek samping obat dapat memengaruhi kestabilan."],
                ["Alat bantu", "Penggunaan alat bantu jalan yang tidak sesuai dapat menambah risiko."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl bg-cream p-5">
                  <h3 className="font-bold text-primary">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-muted">{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="latihan-keseimbangan" className="mt-12">
            <h2 className="text-2xl font-bold text-primary">
              D. Lima Latihan Keseimbangan Lansia
            </h2>

            <p className="mt-4 text-sm leading-8 text-muted">
              Berikut lima jenis latihan berdasarkan poster
              edukasi yang Anda berikan. Seluruh gerakan harus
              dilakukan dengan penyangga yang stabil dan
              pendampingan sesuai kondisi lansia.
            </p>

            <div className="mt-6 space-y-5">
              {exercises.map((exercise, index) => (
                <div
                  key={exercise.title}
                  className="rounded-2xl border border-border p-5 md:p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-soft-green text-sm font-bold text-primary">
                      {index + 1}
                    </span>

                    <h3 className="font-bold text-primary">
                      {exercise.title}
                    </h3>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs font-bold text-primary">
                      Langkah pelaksanaan
                    </p>

                    <ol className="mt-3 space-y-3">
                      {exercise.steps.map((step, stepIndex) => (
                        <li
                          key={stepIndex}
                          className="flex gap-3"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cream text-[10px] font-bold text-primary">
                            {stepIndex + 1}
                          </span>

                          <p className="text-sm leading-6 text-muted">
                            {step}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="mt-5 rounded-xl bg-cream p-4">
                    <p className="text-xs leading-6 text-primary">
                      <strong>Tujuan:</strong> {exercise.purpose}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="persiapan-keseimbangan" className="mt-12">
            <h2 className="text-2xl font-bold text-primary">
              E. Persiapan Sebelum Latihan
            </h2>

            <div className="mt-6 space-y-5">
              {[
                ["Pilih lokasi aman", "Pastikan lantai tidak licin, pencahayaan cukup, dan tidak terdapat benda yang menghalangi."],
                ["Gunakan penyangga", "Siapkan meja atau pegangan yang kokoh. Jangan menggunakan kursi beroda sebagai penyangga."],
                ["Gunakan alas kaki", "Pilih alas kaki yang sesuai dan tidak mudah tergelincir."],
                ["Mulai secara bertahap", "Awali dengan gerakan sederhana sesuai kemampuan. Jangan mengejar jumlah pengulangan tertentu."],
                ["Dampingi lansia", "Keluarga atau pendamping perlu berada dekat lansia, terutama ketika latihan berdiri dan melangkah."],
              ].map(([title, description], index) => (
                <div key={title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="font-bold text-primary">{title}</h3>
                    <p className="mt-1 text-sm leading-7 text-muted">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="keamanan-keseimbangan" className="mt-12">
            <h2 className="text-2xl font-bold text-primary">
              F. Hal yang Perlu Diperhatikan
            </h2>

            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex items-center gap-2 text-amber-900">
                <ShieldCheck size={21} />
                <h3 className="font-bold">Utamakan keselamatan</h3>
              </div>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-amber-900">
                <li>• Jangan melakukan latihan berdiri tanpa pegangan jika keseimbangan belum baik.</li>
                <li>• Hindari melakukan latihan di permukaan licin atau tidak rata.</li>
                <li>• Jangan menggunakan pijakan yang tinggi atau mudah bergeser.</li>
                <li>• Hindari memaksakan gerakan ketika merasa tidak stabil.</li>
                <li>• Gunakan bantuan orang lain atau alat bantu sesuai kebutuhan.</li>
              </ul>

              <p className="mt-4 text-xs leading-6 text-amber-900">
                Hentikan latihan jika muncul pusing, nyeri,
                sesak napas, atau rasa hampir jatuh. Lansia yang
                pernah jatuh, mengalami gangguan berjalan, atau
                memiliki keterbatasan berat perlu mendapat
                penilaian tenaga kesehatan sebelum melakukan
                latihan ini.
              </p>
            </div>
          </section>

          <section id="kesimpulan-keseimbangan" className="mt-12">
            <h2 className="text-2xl font-bold text-primary">
              G. Kesimpulan
            </h2>

            <p className="mt-4 text-sm leading-8 text-muted">
              Latihan keseimbangan merupakan bagian penting
              dari aktivitas fisik lansia. Gerakan menyamping,
              langkah tumit ke ujung kaki, berdiri satu kaki,
              dan melangkah ke atas dapat menjadi pilihan
              latihan apabila sesuai dengan kemampuan dan
              kondisi kesehatan lansia.
            </p>

            <div className="mt-6 rounded-2xl bg-primary p-6 text-white">
              <HeartPulse size={24} />

              <h3 className="mt-4 text-lg font-bold">
                Bergerak Aman, Tetap Mandiri
              </h3>

              <p className="mt-2 text-sm leading-7 text-white/75">
                Latihan bukan tentang seberapa sulit gerakan
                yang dilakukan, tetapi bagaimana lansia dapat
                beraktivitas secara aman, bertahap, dan sesuai
                kemampuan.
              </p>
            </div>
          </section>

          <section className="mt-12 border-t border-border pt-8">
            <h2 className="text-xl font-bold text-primary">
              Referensi Bacaan
            </h2>

            <div className="mt-5 space-y-4">
              <a
                href="https://www.who.int/publications/i/item/9789240015128"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-3 rounded-xl bg-cream p-4 text-sm leading-6 text-primary hover:bg-soft-green"
              >
                <span>WHO. Guidelines on Physical Activity and Sedentary Behaviour.</span>
                <ExternalLink size={16} className="shrink-0 text-secondary"/>
              </a>

              <a
                href="https://www.cdc.gov/physical-activity-basics/guidelines/older-adults.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-3 rounded-xl bg-cream p-4 text-sm leading-6 text-primary hover:bg-soft-green"
              >
                <span>CDC. Older Adult Activity: An Overview.</span>
                <ExternalLink size={16} className="shrink-0 text-secondary"/>
              </a>

              <a
                href="https://www.niddk.nih.gov/health-information/weight-management/healthy-eating-physical-activity-for-life/health-tips-for-older-adults"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-3 rounded-xl bg-cream p-4 text-sm leading-6 text-primary hover:bg-soft-green"
              >
                <span>NIDDK. Health Tips for Older Adults.</span>
                <ExternalLink size={16} className="shrink-0 text-secondary"/>
              </a>
            </div>
          </section>

        </div>

        <aside className="hidden md:block">
          <div className="sticky top-28 rounded-2xl border border-border bg-white p-5">
            <h3 className="font-bold text-primary">Daftar Isi</h3>

            <nav className="mt-5 flex flex-col gap-4 text-sm">
              {[
                ["pengertian-keseimbangan", "Pengertian"],
                ["pentingnya-keseimbangan", "Pentingnya Latihan"],
                ["faktor-jatuh", "Faktor Risiko Jatuh"],
                ["latihan-keseimbangan", "Lima Latihan"],
                ["persiapan-keseimbangan", "Persiapan"],
                ["keamanan-keseimbangan", "Keamanan"],
                ["kesimpulan-keseimbangan", "Kesimpulan"],
              ].map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="text-muted hover:text-secondary"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </div>

      <div className="border-t border-border py-8">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-secondary"
        >
          <ArrowLeft size={17} />
          Kembali ke Pusat Edukasi
        </button>
      </div>

    </article>
  )
}
