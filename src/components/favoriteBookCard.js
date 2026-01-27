import { loadFavorites, saveFavorites } from "../utils.js";
import { attachRemoveFavoriteListeners } from "../features/favorites.js";

const favoritesContainer = document.getElementById("favorites");

export function renderFavorites() {
  favoritesContainer.innerHTML = "";
  
  const favorites = loadFavorites();

  if (favorites.length === 0) {
    favoritesContainer.innerHTML = "<p>No favorite books added yet.</p>";
    return;
  }
  favorites.forEach((book) => {
    favoritesContainer.appendChild(createFavoriteBookCard(book));
  });
  attachRemoveFavoriteListeners();
}

function createFavoriteBookCard(book) {
  const card = document.createElement("div");
  card.className = "fav-book-card";

  const cover = book.coverUrl
    ? `<img src="${book.coverUrl}" alt="${book.title}">`
    : `<div>No Cover</div>`;

  card.innerHTML = `
    ${cover}
    <div>
      <h3 class="fav title">${book.title}</h3>
      <p class="fav author">by ${book.author}</p>
      <p class="fav year">${book.year}</p>
      <button class="remove-fav-btn"
        data-key="${book.key}">
        Remove from favorites
      </button>
    </div>
  `;

  return card;
}
