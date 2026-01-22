// Open Library API Base URL
const API_BASE_URL = "https://openlibrary.org";
const STORAGE_KEY = "libroFavorites";

// DOM Elements
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resultsContainer = document.getElementById("results");
const favoritesContainer = document.getElementById("favorites");
const favoriteCount = document.getElementById("favoriteCount");
const loadingDiv = document.getElementById("loading");

// Initialize favorites from localStorage
let favorites = loadFavorites();

// Event Listeners
searchBtn.addEventListener("click", handleSearch);
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSearch();
});

// Initialize favorites display
renderFavorites();

/**
 * Handle search functionality
 */
async function handleSearch() {
  const query = searchInput.value.trim();

  if (!query) {
    resultsContainer.innerHTML =
      '<p class="error">Please enter a book title</p>';
    return;
  }

  loadingDiv.style.display = "block";
  resultsContainer.innerHTML = "";

  try {
    const books = await searchBooks(query);

    if (books.length === 0) {
      resultsContainer.innerHTML =
        '<p class="empty-state">No books found. Try another search!</p>';
    } else {
      resultsContainer.innerHTML = books
        .map((book) => createBookCard(book))
        .join("");
      attachBookCardListeners();
    }
  } catch (error) {
    resultsContainer.innerHTML = `<p class="error">Error searching books: ${error.message}</p>`;
  } finally {
    loadingDiv.style.display = "none";
  }
}

/**
 * Search books from Open Library API
 */
async function searchBooks(query) {
  const url = `${API_BASE_URL}/search.json?title=${encodeURIComponent(query)}&limit=10`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch from Open Library");

  const data = await response.json();
  return data.docs.map((doc) => ({
    key: doc.key,
    title: doc.title,
    author: doc.author_name?.[0] || "Unknown Author",
    year: doc.first_publish_year || "N/A",
    coverUrl: doc.cover_i ? `${API_BASE_URL}/b/id/${doc.cover_i}-M.jpg` : null,
    description: doc.description || "No description available",
  }));
}

/**
 * Create book card HTML
 */

function createBookCard(book) {
  const isFavorited = favorites.some((fav) => fav.key === book.key);
  return `
    <div class="book-card">
      ${book.coverUrl ? `<img src="${book.coverUrl}" alt="${book.title}" class="book-cover">` : '<div class="book-cover-placeholder">No Cover</div>'}
      <div class="book-info">
        <h3>${book.title}</h3>
        <p class="author">by ${book.author}</p>
        <p class="year">${book.year}</p>
        <button 
          class="favorite-btn ${isFavorited ? "favorited" : ""}" 
          data-key="${book.key}"
          data-title="${book.title}"
          data-author="${book.author}"
          data-year="${book.year}"
          data-cover="${book.coverUrl || ""}"
        >
          ${isFavorited ? "❤️ Favorited" : "🤍 Add to Favorites"}
        </button>
      </div>
    </div>
  `;
}

/**
 * Attach event listeners to favorite buttons
 */
function attachBookCardListeners() {
  document.querySelectorAll(".favorite-btn").forEach((btn) => {
    btn.addEventListener("click", handleFavoriteToggle);
  });
}

/**
 * Handle favorite button toggle
 */
function handleFavoriteToggle(e) {
  const btn = e.target;
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
    btn.classList.add("favorited");
    btn.textContent = "❤️ Favorited";
  }

  saveFavorites();
  renderFavorites();
}

/**
 * Render favorites section
 */
function renderFavorites() {
  favoriteCount.textContent = favorites.length;

  if (favorites.length === 0) {
    favoritesContainer.innerHTML =
      '<p class="empty-state">No favorites yet. Add books to your collection!</p>';
    return;
  }

  favoritesContainer.innerHTML = favorites
    .map(
      (book) => `
    <div class="favorite-item">
      ${book.coverUrl ? `<img src="${book.coverUrl}" alt="${book.title}" class="favorite-cover">` : '<div class="favorite-cover-placeholder">No Cover</div>'}
      <div class="favorite-info">
        <h4>${book.title}</h4>
        <p class="author">${book.author}</p>
        <button class="remove-btn" data-key="${book.key}">Remove ✕</button>
      </div>
    </div>
  `,
    )
    .join("");

  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      favorites = favorites.filter((fav) => fav.key !== btn.dataset.key);
      saveFavorites();
      renderFavorites();
      handleSearch(); // Refresh results if any
    });
  });
}

/**
 * Save favorites to localStorage
 */
function saveFavorites() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}

/**
 * Load favorites from localStorage
 */
function loadFavorites() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}
