
import {
  ArrowLeft,
  Activity,
  CheckCircle2,
  ShieldCheck,
  Clock,
  ExternalLink,
  HeartPulse,
  Dumbbell,
} from "lucide-react"

type JointExerciseArticleProps = {
  onBack: () => void
}

const movements = [
  {
    title: "Gerakan Leher",
    description:
      "Gerakkan kepala secara perlahan ke arah kiri dan kanan dalam rentang gerak yang nyaman.",
    purpose: "Melatih mobilitas area leher.",
  },
  {
    title: "Gerakan Bahu",
    description:
      "Angkat dan turunkan bahu secara perlahan. Hindari mengangkat bahu secara paksa.",
    purpose: "Membantu mempertahankan mobilitas bahu.",
  },
  {
    title: "Pergelangan Kaki",
    description:
      "Dalam posisi duduk, gerakkan ujung kaki ke atas dan ke bawah, kemudian putar pergelangan kaki secara perlahan.",
    purpose: "Melatih gerakan pergelangan kaki.",
  },
  {
    title: "Siku",
    description:
      "Tekuk dan luruskan siku secara perlahan sesuai kemampuan.",
    purpose: "Mempertahankan rentang gerak siku.",
  },
  {
    title: "Pergelangan Tangan",
    description:
      "Gerakkan pergelangan tangan secara perlahan, termasuk gerakan memutar dalam batas yang nyaman.",
    purpose: "Melatih mobilitas pergelangan tangan.",
  },
  {
    title: "Pinggul",
    description:
      "Dengan posisi duduk atau berdiri berpegangan, gerakkan kaki ke depan dan ke samping sesuai kemampuan.",
    purpose: "Mendukung mobilitas area pinggul.",
  },
  {
    title: "Lutut",
    description:
      "Dalam posisi duduk, luruskan salah satu lutut secara perlahan lalu turunkan kembali.",
    purpose: "Melatih gerakan menekuk dan meluruskan lutut.",
  },
]

export default function JointExerciseArticle({
  onBack,
}: JointExerciseArticleProps) {
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
          <Activity size={30} />
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider">
            Aktivitas Fisik
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider">
            Materi 02
          </span>
        </div>

        <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
          Latihan Gerak untuk Sendi yang Kuat
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
          Mengenal gerakan sederhana untuk membantu menjaga
          mobilitas, fleksibilitas, dan kemampuan bergerak
          dalam aktivitas sehari-hari.
        </p>

        <div className="mt-7 flex items-center gap-5 text-xs text-white/70">
          <span className="flex items-center gap-2">
            <Activity size={15} />
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

          <section id="pengertian-sendi">
            <h2 className="text-2xl font-bold text-primary">
              A. Apa Itu Latihan Gerak Sendi?
            </h2>

            <p className="mt-4 text-sm leading-8 text-muted">
              Sendi merupakan bagian tubuh yang menghubungkan
              dua atau lebih tulang dan memungkinkan terjadinya
              gerakan. Sendi bekerja bersama otot, tendon, dan
              jaringan lainnya untuk membantu tubuh melakukan
              berbagai aktivitas.
            </p>

            <p className="mt-4 text-sm leading-8 text-muted">
              Latihan gerak sendi merupakan aktivitas yang
              dilakukan untuk mempertahankan atau meningkatkan
              kemampuan sendi bergerak dalam rentang gerak
              yang nyaman. Contohnya adalah menekuk siku,
              menggerakkan bahu, dan meluruskan lutut.
            </p>
          </section>

          <section id="pentingnya-sendi" className="mt-12">
            <h2 className="text-2xl font-bold text-primary">
              B. Mengapa Gerak Sendi Perlu Dijaga?
            </h2>

            <p className="mt-4 text-sm leading-8 text-muted">
              Kemampuan bergerak berperan penting dalam
              aktivitas sehari-hari, seperti berjalan,
              berpakaian, mandi, mengambil benda, dan
              melakukan pekerjaan rumah.
            </p>

            <div className="mt-6 rounded-2xl border border-border p-5">
              <h3 className="font-bold text-primary">
                Tujuan latihan gerak
              </h3>

              <ul className="mt-4 space-y-3">
                {[
                  "Membantu mempertahankan rentang gerak sendi.",
                  "Mendukung fleksibilitas tubuh.",
                  "Membantu menjaga kemampuan melakukan aktivitas sehari-hari.",
                  "Mendukung mobilitas dan kemandirian lansia.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 size={17} className="mt-1 shrink-0 text-secondary" />
                    <span className="text-sm leading-6 text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="jenis-gerak" className="mt-12">
            <h2 className="text-2xl font-bold text-primary">
              C. Jenis-Jenis Latihan Gerak
            </h2>

            <p className="mt-4 text-sm leading-8 text-muted">
              Berdasarkan keterlibatan individu dalam melakukan
              gerakan, terdapat dua jenis gerakan yang diperkenalkan
              dalam materi edukasi ini.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-cream p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft-green">
                  <Dumbbell size={22} className="text-primary" />
                </div>

                <h3 className="mt-4 font-bold text-primary">
                  1. Gerak Aktif
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted">
                  Gerakan yang dilakukan sendiri oleh lansia
                  dengan menggunakan kemampuan ototnya,
                  tanpa bantuan orang lain untuk menggerakkan
                  anggota tubuh.
                </p>

                <p className="mt-3 text-xs leading-6 text-secondary">
                  Contoh: mengangkat lengan, menekuk siku,
                  dan meluruskan lutut secara mandiri.
                </p>
              </div>

              <div className="rounded-2xl bg-cream p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft-green">
                  <HeartPulse size={22} className="text-primary" />
                </div>

                <h3 className="mt-4 font-bold text-primary">
                  2. Gerak Pasif
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted">
                  Gerakan anggota tubuh yang dilakukan dengan
                  bantuan orang lain tanpa usaha aktif dari
                  otot lansia untuk menghasilkan gerakan tersebut.
                </p>

                <p className="mt-3 text-xs leading-6 text-secondary">
                  Contoh: pendamping membantu menggerakkan
                  lengan sesuai batas gerak yang aman.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold text-amber-900">
                Perhatian untuk gerak pasif
              </p>
              <p className="mt-2 text-xs leading-6 text-amber-900">
                Gerakan pasif sebaiknya dilakukan berdasarkan
                arahan tenaga kesehatan atau fisioterapis,
                terutama pada lansia yang mengalami nyeri,
                cedera, kekakuan berat, atau keterbatasan sendi.
                Jangan memaksa anggota tubuh melewati batas
                gerak yang nyaman.
              </p>
            </div>
          </section>

          <section id="contoh-gerakan" className="mt-12">
            <h2 className="text-2xl font-bold text-primary">
              D. Contoh Gerakan untuk Lansia
            </h2>

            <p className="mt-4 text-sm leading-8 text-muted">
              Berikut contoh gerakan yang dikembangkan dari
              materi poster latihan gerak sendi. Pilih gerakan
              sesuai kemampuan dan kondisi masing-masing lansia.
            </p>

            <div className="mt-6 space-y-4">
              {movements.map((movement, index) => (
                <div
                  key={movement.title}
                  className="rounded-2xl border border-border p-5"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-soft-green text-sm font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="font-bold text-primary">
                        {movement.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-muted">
                        {movement.description}
                      </p>

                      <p className="mt-3 text-xs font-medium text-secondary">
                        Tujuan: {movement.purpose}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="pelaksanaan-sendi" className="mt-12">
            <h2 className="text-2xl font-bold text-primary">
              E. Panduan Pelaksanaan
            </h2>

            <div className="mt-6 space-y-5">
              {[
                ["Persiapan", "Pilih tempat yang aman, memiliki pencahayaan cukup, dan tidak licin. Siapkan kursi yang stabil jika latihan dilakukan sambil duduk."],
                ["Posisi Tubuh", "Pastikan posisi duduk atau berdiri nyaman. Gunakan sandaran atau pegangan yang kokoh bila diperlukan."],
                ["Pelaksanaan", "Lakukan gerakan perlahan, terkendali, dan sesuai rentang gerak yang nyaman."],
                ["Pengaturan Latihan", "Mulai dengan jumlah gerakan sedikit. Tingkatkan secara bertahap jika kondisi tubuh memungkinkan."],
                ["Evaluasi", "Perhatikan respons tubuh setelah latihan. Hentikan jika muncul keluhan yang tidak biasa."],
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

          <section id="keamanan-sendi" className="mt-12">
            <h2 className="text-2xl font-bold text-primary">
              F. Hal yang Perlu Diperhatikan
            </h2>

            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <div className="flex items-center gap-2 text-amber-900">
                <ShieldCheck size={21} />
                <h3 className="font-bold">Keselamatan latihan</h3>
              </div>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-amber-900">
                <li>• Jangan memaksakan gerakan ketika terasa nyeri.</li>
                <li>• Hindari gerakan mendadak atau menghentak.</li>
                <li>• Gunakan kursi atau pegangan yang stabil.</li>
                <li>• Kenakan pakaian yang nyaman.</li>
                <li>• Minum air secukupnya.</li>
                <li>• Sesuaikan latihan dengan kondisi kesehatan.</li>
              </ul>

              <p className="mt-4 text-xs leading-6 text-amber-900">
                Hentikan latihan apabila muncul nyeri, pusing,
                atau sesak napas. Konsultasikan dengan tenaga
                kesehatan sebelum melanjutkan latihan.
              </p>
            </div>
          </section>

          <section id="kesimpulan-sendi" className="mt-12">
            <h2 className="text-2xl font-bold text-primary">
              G. Kesimpulan
            </h2>

            <p className="mt-4 text-sm leading-8 text-muted">
              Latihan gerak sendi dapat menjadi bagian dari
              aktivitas fisik lansia untuk membantu mempertahankan
              kemampuan bergerak. Gerakan sederhana pada leher,
              bahu, siku, pergelangan tangan, pinggul, lutut,
              dan pergelangan kaki dapat dilakukan sesuai
              kemampuan masing-masing individu.
            </p>

            <div className="mt-6 rounded-2xl bg-primary p-6 text-white">
              <HeartPulse size={24} />
              <h3 className="mt-4 text-lg font-bold">
                Bergerak Sesuai Kemampuan
              </h3>
              <p className="mt-2 text-sm leading-7 text-white/75">
                Mulailah dari gerakan sederhana, lakukan dengan
                nyaman, dan utamakan keselamatan. Tidak perlu
                memaksakan gerakan yang belum mampu dilakukan.
              </p>
            </div>
          </section>

          <section className="mt-12 border-t border-border pt-8">
            <h2 className="text-xl font-bold text-primary">
              Referensi Bacaan
            </h2>

            <div className="mt-5 space-y-4">
              <a
                href="https://www.nhs.uk/live-well/exercise/sitting-exercises/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-3 rounded-xl bg-cream p-4 text-sm leading-6 text-primary hover:bg-soft-green"
              >
                <span>NHS. Sitting Exercises – latihan ringan untuk mobilitas.</span>
                <ExternalLink size={16} className="shrink-0 text-secondary"/>
              </a>

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
                ["pengertian-sendi", "Pengertian"],
                ["pentingnya-sendi", "Pentingnya Gerak"],
                ["jenis-gerak", "Jenis Gerakan"],
                ["contoh-gerakan", "Contoh Gerakan"],
                ["pelaksanaan-sendi", "Panduan Pelaksanaan"],
                ["keamanan-sendi", "Keamanan"],
                ["kesimpulan-sendi", "Kesimpulan"],
              ].map(([id, label]) => (
                <a key={id} href={`#${id}`} className="text-muted hover:text-secondary">
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
