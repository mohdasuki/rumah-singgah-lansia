
export type GalleryItem = {
  id: number
  title: string
  category: string
  image: string
  size: "large" | "normal"
}

export const gallery: GalleryItem[] = [
  {
    id: 1,
    title: "Pemeriksaan Kesehatan Lansia",
    category: "Pelayanan Kesehatan",
    image: "/images/gallery/kegiatan-01.jpg",
    size: "large",
  },
  {
    id: 2,
    title: "Edukasi Kesehatan",
    category: "Edukasi",
    image: "/images/gallery/kegiatan-02.jpg",
    size: "normal",
  },
  {
    id: 3,
    title: "Pendampingan oleh Kader",
    category: "Pendampingan",
    image: "/images/gallery/kegiatan-03.jpg",
    size: "normal",
  },
  {
    id: 4,
    title: "Aktivitas Bersama Lansia",
    category: "Aktivitas Sosial",
    image: "/images/gallery/kegiatan-04.jpg",
    size: "normal",
  },
  {
    id: 5,
    title: "Kebersamaan Komunitas",
    category: "Komunitas",
    image: "/images/gallery/kegiatan-05.jpg",
    size: "normal",
  },
]
