"use client";

export const toggleFavorite = (pg) => {
  let favs = JSON.parse(localStorage.getItem("favs")) || [];

  const exists = favs.find((item) => item.id === pg.id);

  if (exists) {
    favs = favs.filter((item) => item.id !== pg.id);
  } else {
    favs.push(pg);
  }

  localStorage.setItem("favs", JSON.stringify(favs));
};