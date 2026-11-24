
import {
  ArrowLeft,
  Brain,
  BookOpen,
  Heart,
  CheckCircle2,
  ShieldCheck,
  Clock,
  ExternalLink,
} from "lucide-react"

type CognitiveArticleProps = {
  onBack: () => void
}

const activities = [
  {
    number: "01",
    title: "Mewarnai",
    description:
      "Ajak lansia mewarnai gambar sederhana dengan warna yang disukai. Aktivitas ini melibatkan perhatian, kreativitas, dan koordinasi mata serta tangan.",
    icon: "palette",
  },
  {
    number: "02",
    title: "Membuat Kerajinan",
    description:
      "Ajak lansia membuat kerajinan sederhana seperti melipat kertas atau merangkai bahan. Kegiatan ini melibatkan kreativitas dan perencanaan.",
    icon: "scissors",
  },
  {
    number: "03",
    title: "Memainkan Alat Musik",
    description:
      "Ajak lansia bermain alat musik atau bernyanyi bersama. Kegiatan ini dapat menjadi sarana ekspresi, mengingat lagu, dan berinteraksi.",
    icon: "music",
  },
  {
    number: "04",
    title: "Bermain Halma",
    description:
      "Ajak lansia bermain halma secara bergantian. Permainan ini melibatkan pengamatan, konsentrasi, dan strategi sederhana.",
    icon: "puzzle",
  },
]

export default function CognitiveArticle({
  onBack,
}: CognitiveArticleProps) {
  return (
    <article className="mx-auto max-w-5xl">

      <button
        type="button"
        onClick={onBack}
        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary"
      >
        <ArrowLeft size={18} />
        Kembali ke Pusat Edukasi
      </button>

      <header className="overflow-hidden rounded-3xl bg-primary p-7 text-white md:p-12">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
          <Brain size={30} />
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider">
            Stimulasi Kognitif
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider">
            Materi 01
          </span>
        </div>

        <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
          Menjaga Otak Tetap Aktif melalui Stimulasi Kognitif
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
          Mengenal fungsi kognitif dan berbagai kegiatan sederhana
          yang dapat dilakukan lansia bersama keluarga maupun
          pendamping.
        </p>

        <div className="mt-7 flex items-center gap-5 text-xs text-white/70">
          <span className="flex items-center gap-2">
            <BookOpen size={15} />
            Materi edukasi
          </span>
          <span className="flex items-center gap-2">
            <Clock size={15} />
            5–7 menit membaca
          </span>
        </div>
      </header>

      <div className="grid gap-10 py-10 md:grid-cols-[1fr_260px] md:py-14">

        <div className="min-w-0">

          <section id="pengertian" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary">
              A. Apa Itu Fungsi Kognitif?
            </h2>

            <p className="mt-4 text-sm leading-8 text-muted">
              Fungsi kognitif adalah kemampuan otak untuk menerima,
              mengolah, menyimpan, dan menggunakan informasi.
              Kemampuan ini diperlukan dalam berbagai aktivitas
              sehari-hari, seperti mengingat sesuatu, memahami
              percakapan, berkonsentrasi, dan mengambil keputusan.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ["Daya Ingat", "Kemampuan mengingat informasi dan pengalaman."],
                ["Perhatian", "Kemampuan memusatkan perhatian pada aktivitas."],
                ["Konsentrasi", "Kemampuan mempertahankan fokus."],
                ["Kemampuan Berpikir", "Kemampuan memahami masalah dan mengambil keputusan."],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-2xl bg-cream p-5"
                >
                  <h3 className="font-bold text-primary">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-muted">
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-8 text-muted">
              Beberapa perubahan kemampuan berpikir dapat terjadi
              seiring bertambahnya usia. Misalnya, seseorang
              membutuhkan waktu lebih lama untuk mengingat nama.
              Namun, perubahan tersebut tidak selalu menunjukkan
              adanya demensia.
            </p>
          </section>

          <section id="pentingnya" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary">
              B. Mengapa Stimulasi Kognitif Penting?
            </h2>

            <p className="mt-4 text-sm leading-8 text-muted">
              Stimulasi kognitif merupakan kegiatan yang melibatkan
              kemampuan berpikir, mengingat, memperhatikan, dan
              berkomunikasi. Kegiatan dapat dilakukan secara individu
              maupun kelompok.
            </p>

            <p className="mt-4 text-sm leading-8 text-muted">
              Aktivitas tersebut memberikan kesempatan kepada lansia
              untuk tetap terlibat dalam kegiatan yang bermakna,
              belajar, berinteraksi, dan mengembangkan kreativitas.
            </p>

            <div className="mt-6 rounded-2xl border border-border p-5">
              <div className="flex items-center gap-2">
                <Heart size={19} className="text-secondary" />
                <h3 className="font-bold text-primary">
                  Manfaat kegiatan
                </h3>
              </div>

              <ul className="mt-4 space-y-3">
                {[
                  "Mendukung pemeliharaan fungsi kognitif.",
                  "Memberikan kesempatan melatih konsentrasi.",
                  "Mendorong kreativitas dan ekspresi diri.",
                  "Meningkatkan kesempatan berinteraksi sosial.",
                  "Mendukung kualitas hidup lansia.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-secondary"
                    />
                    <span className="text-sm leading-6 text-muted">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="aktivitas" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary">
              C. Jenis Kegiatan Stimulasi Kognitif
            </h2>

            <p className="mt-4 text-sm leading-8 text-muted">
              Berikut beberapa aktivitas sederhana yang dapat
              dilakukan oleh lansia berdasarkan materi edukasi
              yang disusun oleh kelompok pengabdian.
            </p>

            <div className="mt-6 space-y-4">
              {activities.map((item) => (
                <div
                  key={item.number}
                  className="flex gap-4 rounded-2xl border border-border p-5 transition-colors hover:bg-cream"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-soft-green text-sm font-bold text-primary">
                    {item.number}
                  </div>

                  <div>
                    <h3 className="font-bold text-primary">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="pelaksanaan" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary">
              D. Cara Melaksanakan Kegiatan
            </h2>

            <p className="mt-4 text-sm leading-8 text-muted">
              Kegiatan dapat dilaksanakan menggunakan peralatan
              sederhana. Keluarga atau pendamping dapat mengikuti
              langkah berikut.
            </p>

            <div className="mt-6 space-y-5">
              {[
                ["Persiapan", "Siapkan alat dan tempat yang nyaman serta memiliki pencahayaan cukup."],
                ["Penjelasan", "Terangkan aktivitas dengan bahasa sederhana dan demonstrasikan jika diperlukan."],
                ["Pelaksanaan", "Dampingi lansia melakukan aktivitas sesuai minat dan kemampuannya."],
                ["Interaksi", "Berikan kesempatan kepada lansia untuk bercerita dan berkomunikasi."],
                ["Penutup", "Berikan apresiasi dan tanyakan pengalaman mereka selama kegiatan."],
              ].map(([title, description], index) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-bold text-primary">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-muted">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="pendamping" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary">
              E. Tips bagi Keluarga dan Pendamping
            </h2>

            <ul className="mt-5 space-y-4">
              {[
                "Pilih aktivitas sesuai minat dan kemampuan lansia.",
                "Gunakan instruksi singkat dan mudah dipahami.",
                "Berikan waktu yang cukup untuk menyelesaikan aktivitas.",
                "Hindari menyalahkan ketika lansia melakukan kesalahan.",
                "Berikan apresiasi atas partisipasi mereka.",
                "Lakukan kegiatan secara bervariasi dan menyenangkan.",
                "Libatkan keluarga atau teman agar kegiatan lebih bermakna.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-secondary"
                  />
                  <span className="text-sm leading-7 text-muted">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section id="kesehatan" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary">
              F. Kapan Perlu Berkonsultasi?
            </h2>

            <p className="mt-4 text-sm leading-8 text-muted">
              Apabila perubahan daya ingat semakin sering terjadi
              dan mulai mengganggu aktivitas sehari-hari, keluarga
              sebaiknya berkonsultasi dengan tenaga kesehatan.
            </p>

            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex items-center gap-2 text-amber-800">
                <ShieldCheck size={20} />
                <h3 className="font-bold">
                  Perhatikan perubahan berikut
                </h3>
              </div>

              <ul className="mt-4 space-y-2 text-sm leading-6 text-amber-900">
                <li>• Sering lupa kejadian yang baru berlangsung.</li>
                <li>• Kesulitan melakukan pekerjaan sehari-hari.</li>
                <li>• Kebingungan mengenai waktu atau tempat.</li>
                <li>• Kesulitan mengikuti percakapan.</li>
                <li>• Perubahan perilaku yang signifikan.</li>
              </ul>

              <p className="mt-4 text-xs leading-6 text-amber-900">
                Tanda-tanda tersebut tidak otomatis berarti demensia.
                Pemeriksaan tenaga kesehatan diperlukan untuk
                mengetahui penyebabnya.
              </p>
            </div>
          </section>

          <section id="kesimpulan" className="mt-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-primary">
              G. Kesimpulan
            </h2>

            <p className="mt-4 text-sm leading-8 text-muted">
              Stimulasi kognitif merupakan salah satu bentuk
              aktivitas yang dapat membantu lansia tetap aktif
              secara mental dan sosial. Mewarnai, membuat kerajinan,
              bermain musik, dan bermain halma dapat menjadi pilihan
              kegiatan sederhana bersama keluarga maupun komunitas.
            </p>

            <div className="mt-6 rounded-2xl bg-primary p-6 text-white">
              <Heart size={24} />

              <h3 className="mt-4 text-lg font-bold">
                Pesan untuk Keluarga
              </h3>

              <p className="mt-2 text-sm leading-7 text-white/75">
                Dampingi lansia dengan sabar. Berikan kesempatan
                untuk tetap belajar, berkarya, berkomunikasi,
                dan menikmati setiap aktivitas.
              </p>
            </div>
          </section>

          <section className="mt-12 border-t border-border pt-8">
            <h2 className="text-xl font-bold text-primary">
              Referensi Bacaan
            </h2>

            <div className="mt-5 space-y-4">
              <a
                href="https://www.who.int/publications/i/item/9789240123557"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-3 rounded-xl bg-cream p-4 transition-colors hover:bg-soft-green"
              >
                <span className="text-sm leading-6 text-primary">
                  World Health Organization (2026). Risk Reduction
                  of Cognitive Decline and Dementia: WHO Guidelines,
                  Second Edition.
                </span>
                <ExternalLink size={16} className="shrink-0 text-secondary"/>
              </a>

              <a
                href="https://www.nia.nih.gov/health/cognitive-health-and-older-adults/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-3 rounded-xl bg-cream p-4 transition-colors hover:bg-soft-green"
              >
                <span className="text-sm leading-6 text-primary">
                  National Institute on Aging. Cognitive Health
                  and Older Adults.
                </span>
                <ExternalLink size={16} className="shrink-0 text-secondary"/>
              </a>

              <a
                href="https://www.nia.nih.gov/health/how-aging-brain-affects-thinking"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-3 rounded-xl bg-cream p-4 transition-colors hover:bg-soft-green"
              >
                <span className="text-sm leading-6 text-primary">
                  National Institute on Aging. How Aging Brain
                  Affects Thinking.
                </span>
                <ExternalLink size={16} className="shrink-0 text-secondary"/>
              </a>
            </div>
          </section>

        </div>

        <aside className="hidden md:block">
          <div className="sticky top-28 rounded-2xl border border-border bg-white p-5">
            <h3 className="font-bold text-primary">
              Daftar Isi
            </h3>

            <nav className="mt-5 flex flex-col gap-4 text-sm">
              {[
                ["pengertian", "Pengertian"],
                ["pentingnya", "Pentingnya Stimulasi"],
                ["aktivitas", "Jenis Kegiatan"],
                ["pelaksanaan", "Cara Pelaksanaan"],
                ["pendamping", "Tips Pendamping"],
                ["kesehatan", "Kapan Berkonsultasi"],
                ["kesimpulan", "Kesimpulan"],
              ].map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="text-muted transition-colors hover:text-secondary"
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
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary"
        >
          <ArrowLeft size={17}/>
          Kembali ke Pusat Edukasi
        </button>
      </div>

    </article>
  )
}
