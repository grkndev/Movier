export const SortBy = [
  {
    id: "popularity.asc",
    name: "Popularity Ascending",
  },
  {
    id: "popularity.desc",
    name: "Popularity Descending",
  },
  {
    id: "title.asc",
    name: "Title Ascending",
  },
  {
    id: "title.desc",
    name: "Title Descending",
  },
];
export const AllKinds = [
  {
    id: 28,
    name: "Aksiyon",
  },
  {
    id: 12,
    name: "Macera",
  },
  {
    id: 16,
    name: "Animasyon",
  },
  {
    id: 35,
    name: "Komedi",
  },
  {
    id: 80,
    name: "Suç",
  },
  {
    id: 99,
    name: "Belgesel",
  },
  {
    id: 18,
    name: "Dram",
  },
  {
    id: 10751,
    name: "Aile",
  },
  {
    id: 14,
    name: "Fantastik",
  },
  {
    id: 36,
    name: "Tarih",
  },
  {
    id: 27,
    name: "Korku",
  },
  {
    id: 10402,
    name: "Müzik",
  },
  {
    id: 9648,
    name: "Gizem",
  },
  {
    id: 10749,
    name: "Romantik",
  },
  {
    id: 878,
    name: "Bilim-Kurgu",
  },
  {
    id: 10770,
    name: "TV film",
  },
  {
    id: 53,
    name: "Gerilim",
  },
  {
    id: 10752,
    name: "Savaş",
  },
  {
    id: 37,
    name: "Vahşi Batı",
  },
];
export type MovieKind = (typeof AllKinds)[number];
