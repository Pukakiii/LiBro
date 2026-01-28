import { renderFavorites } from "../components/favoriteBookCard.js";
import { saveFavorites, loadFavorites } from "../utils.js";

// Handle favorite button toggle
export function handleFavoriteToggle(e) {
  let favorites = loadFavorites();

  // button that was clicked
  const btn = e.target;

  const bookData = {
    key: btn.dataset.key,
    title: btn.dataset.title,
    author: btn.dataset.author,
    year: btn.dataset.year,
    coverUrl: btn.dataset.cover || null,
  };

  // functionality to add or remove from favorites
  const isFavorited = favorites.some((fav) => fav.key === bookData.key);

  if (isFavorited) {
    favorites = favorites.filter((fav) => fav.key !== bookData.key);
    btn.classList.remove("favorited");
    btn.textContent = "Add to Favorites";
  } else {
    favorites.push(bookData);
    btn.classList.add("favorited");
    btn.textContent = " Favorited";
  }
  // updating the localStorage
  saveFavorites(favorites);
  // rendering favorites list every time there's a click
  renderFavorites();
}
