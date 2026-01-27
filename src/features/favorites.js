import { renderFavorites } from "../components/favoriteBookCard.js";
import { saveFavorites, loadFavorites } from "../utils.js";

export function attachFavoriteToggleListeners() {
  document.querySelectorAll(".fav-btn").forEach((btn) => {
    btn.addEventListener("click", handleFavoriteToggle);
  });
}
export function attachRemoveFavoriteListeners() {
  document.querySelectorAll(".remove-fav-btn").forEach((btn) => {
    btn.addEventListener("click", handleFavoriteToggle);
  });
}

// Handle favorite button toggle
export function handleFavoriteToggle(e) {
  let favorites = loadFavorites();

  const btn = e.target;
  console.log("Toggling favorite for book:", btn.dataset);
    console.log("Loaded favorites b:", favorites);

  const bookData = {
    key: btn.dataset.key,
    title: btn.dataset.title,
    author: btn.dataset.author,
    year: btn.dataset.year,
    coverUrl: btn.dataset.cover || null,
  };

  const isFavorited = favorites.some((fav) => fav.key === bookData.key);

  if (isFavorited) {
    favorites = favorites.filter((fav) => fav.key !== bookData.key);
    btn.classList.remove("favorited");
    btn.textContent = "🤍 Add to Favorites";
  } else {
    favorites.push(bookData);
    console.log("Loaded favorites a:", favorites);
    
    btn.classList.add("favorited");
    btn.textContent = "❤️ Favorited";
  }

  saveFavorites(favorites);
  renderFavorites();
}
