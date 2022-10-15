export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Electique" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Mecanique" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Hydraulique" }
];

export function getGenres() {
  return genres.filter(g => g);
}
