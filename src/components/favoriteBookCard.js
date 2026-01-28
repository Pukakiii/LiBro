import { loadFavorites, saveFavorites } from "../utils.js";

const favoritesContainer = document.getElementById("favorites");

// rendering favorited book cards inside favoritesContainer
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
}

// favorite book card component
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
      <button class="fav-btn" 
        data-key="${book.key}"
        data-title="${book.title}"
        data-author="${book.author}"
        data-year="${book.year}"
        data-cover="${book.coverUrl || ''}">
        remove from Favorites
      </button>
    </div>
  `;

  return card;
}
