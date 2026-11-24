
export type EducationItem = {
  id: number
  category: string
  title: string
  description: string
  icon: string
  benefits: string[]
  activities: {
    title: string
    description: string
  }[]
  note: string
}

export const educationItems: EducationItem[] = [
  {
    id: 1,
    category: "Stimulasi Kognitif",
    title: "Stimulasi Kognitif Lansia",
    description:
      "Latihan kognitif merupakan aktivitas yang merangsang otak agar tetap aktif, membantu menjaga daya ingat, dan mendukung fungsi kognitif lansia.",
    icon: "brain",
    benefits: [
      "Meningkatkan daya ingat",
      "Mendukung pemeliharaan fungsi kognitif",
      "Meningkatkan konsentrasi",
      "Menjaga kesehatan mental",
      "Mendukung kualitas hidup",
    ],
    activities: [
      {
        title: "Membuat Kerajinan",
        description:
          "Melakukan aktivitas kerajinan sederhana untuk melatih kreativitas dan koordinasi.",
      },
      {
        title: "Mewarnai",
        description:
          "Melakukan kegiatan mewarnai untuk melatih konsentrasi dan kreativitas.",
      },
      {
        title: "Memainkan Alat Musik",
        description:
          "Melakukan aktivitas bermusik sebagai kegiatan stimulasi dan rekreasi.",
      },
      {
        title: "Bermain Halma",
        description:
          "Bermain permainan strategi sederhana untuk melatih daya pikir dan konsentrasi.",
      },
    ],
    note:
      "Pilih aktivitas yang disukai, sesuaikan tingkat kesulitan dengan kemampuan, dan lakukan dalam suasana menyenangkan.",
  },
  {
    id: 2,
    category: "Aktivitas Fisik",
    title: "Latihan Gerak untuk Sendi yang Kuat",
    description:
      "Latihan gerak merupakan aktivitas untuk membantu menjaga fleksibilitas, mobilitas, dan kemampuan gerak tubuh lansia.",
    icon: "activity",
    benefits: [
      "Membantu menjaga fleksibilitas sendi",
      "Menjaga kekuatan otot dan sendi",
      "Mendukung kemampuan bergerak",
      "Mendukung aktivitas sehari-hari",
    ],
    activities: [
      {
        title: "Gerak Aktif",
        description:
          "Gerakan yang dilakukan sendiri tanpa bantuan alat atau orang lain.",
      },
      {
        title: "Gerak Pasif",
        description:
          "Gerakan yang dilakukan dengan bantuan orang lain atau alat tanpa usaha aktif dari individu itu sendiri.",
      },
      {
        title: "Gerakan Leher",
        description:
          "Memiringkan kepala ke kiri dan kanan secara perlahan.",
      },
      {
        title: "Gerakan Bahu",
        description:
          "Mengangkat dan menurunkan bahu secara perlahan.",
      },
      {
        title: "Pergelangan Kaki",
        description:
          "Melakukan gerakan memutar pergelangan kaki.",
      },
      {
        title: "Siku dan Pergelangan Tangan",
        description:
          "Melakukan gerakan menekuk siku dan memutar pergelangan tangan.",
      },
      {
        title: "Pinggul dan Lutut",
        description:
          "Melakukan gerakan mengangkat kaki ke depan, ke samping, dan menekuk lutut sesuai kemampuan.",
      },
    ],
    note:
      "Gerakan perlu disesuaikan dengan kemampuan dan kondisi lansia. Gerak pasif sebaiknya dilakukan oleh pendamping yang memahami tekniknya.",
  },
  {
    id: 3,
    category: "Keseimbangan Tubuh",
    title: "Latihan Fisik untuk Keseimbangan Lansia",
    description:
      "Latihan keseimbangan merupakan serangkaian gerakan atau aktivitas fisik yang bertujuan meningkatkan stabilitas tubuh, koordinasi, serta kemampuan berdiri dan berjalan dengan aman.",
    icon: "accessibility",
    benefits: [
      "Meningkatkan stabilitas tubuh",
      "Mendukung mobilitas dan fleksibilitas",
      "Membantu menjaga kekuatan otot dan sendi",
      "Membantu mengurangi risiko cedera akibat jatuh",
      "Mendukung kemandirian lansia",
    ],
    activities: [
      {
        title: "Berjalan Menyamping",
        description:
          "Berdiri dengan kedua kaki rapat, kemudian melangkah ke samping secara perlahan dan terkendali.",
      },
      {
        title: "Pohon Anggur Sederhana",
        description:
          "Menyilangkan kaki kanan di atas kaki kiri, kemudian membawa kaki kiri untuk menyatukannya kembali.",
      },
      {
        title: "Berjalan dari Tumit ke Ujung Kaki",
        description:
          "Berdiri tegak dan letakkan tumit satu kaki di depan jari kaki lainnya. Lakukan secara bergantian.",
      },
      {
        title: "Berdiri dengan Satu Kaki",
        description:
          "Berdiri menghadap dinding, rentangkan tangan, dan angkat satu kaki secara perlahan.",
      },
      {
        title: "Langkah ke Atas",
        description:
          "Melangkah ke atas menggunakan satu kaki, kemudian mengangkat kaki lainnya dan kembali ke posisi awal.",
      },
    ],
    note:
      "Latihan keseimbangan memiliki risiko jatuh. Lakukan di area aman, gunakan pegangan yang kokoh, dan dampingi lansia. Hindari latihan tanpa pendamping jika keseimbangan sangat terbatas.",
  },
]
