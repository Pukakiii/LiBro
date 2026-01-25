import {handleSearch} from "./features/search.js";

const form = document.getElementById("search-form");
const searchInput = document.getElementById("input");
const favContainer = document.getElementById("favorites");
const favBtn = document.getElementById("fav-btn");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  handleSearch();
});

favBtn.addEventListener("click", (event) => {
  event.preventDefault();

  handleFavorites()
});

// Initialize favorites display

/**
 * Attach event listeners to favorite buttons
 */
// function attachBookCardListeners() {
//   document.querySelectorAll(".favorite-btn").forEach((btn) => {
//     btn.addEventListener("click", handleFavoriteToggle);
//   });
// }

/**
 * Handle favorite button toggle
 */
// function handleFavoriteToggle(e) {
//   const btn = e.target;
//   const bookData = {
//     key: btn.dataset.key,
//     title: btn.dataset.title,
//     author: btn.dataset.author,
//     year: btn.dataset.year,
//     coverUrl: btn.dataset.cover || null,
//   };

//   const isFavorited = favorites.some((fav) => fav.key === bookData.key);

//   if (isFavorited) {
//     favorites = favorites.filter((fav) => fav.key !== bookData.key);
//     btn.classList.remove("favorited");
//     btn.textContent = "🤍 Add to Favorites";
//   } else {
//     favorites.push(bookData);
//     btn.classList.add("favorited");
//     btn.textContent = "❤️ Favorited";
//   }

//   saveFavorites();
//   renderFavorites();
// }

/**
 * Render favorites section
 */
// function renderFavorites() {
//   favoriteCount.textContent = favorites.length;

//   if (favorites.length === 0) {
//     favoritesContainer.innerHTML =
//       '<p class="empty-state">No favorites yet. Add books to your collection!</p>';
//     return;
//   }

//   favoritesContainer.innerHTML = favorites
//     .map(
//       (book) => `
//     <div class="favorite-item">
//       ${book.coverUrl ? `<img src="${book.coverUrl}" alt="${book.title}" class="favorite-cover">` : '<div class="favorite-cover-placeholder">No Cover</div>'}
//       <div class="favorite-info">
//         <h4>${book.title}</h4>
//         <p class="author">${book.author}</p>
//         <button class="remove-btn" data-key="${book.key}">Remove ✕</button>
//       </div>
//     </div>
//   `,
//     )
//     .join("");

//   document.querySelectorAll(".remove-btn").forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       favorites = favorites.filter((fav) => fav.key !== btn.dataset.key);
//       saveFavorites();
//       renderFavorites();
//       handleSearch(); // Refresh results if any
//     });
//   });
// }

/**
 * Save favorites to localStorage
 */

// function saveFavorites() {
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
// }

/**
 * Load favorites from localStorage
 */
// function loadFavorites() {
//   const stored = localStorage.getItem(STORAGE_KEY);
//   return stored ? JSON.parse(stored) : [];
// }
