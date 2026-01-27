const bookSection = document.getElementById("book-list");

// heartIcon for book cards
function heartIcon() {
  return `<img src="../simple-books-catalogue/heart-icon.svg" alt="heart icon" class="heart-icon"/>`;
}

// loading animation component
function renderLoading() {
  return `
  <div id="loading">
    <p class="loading-text">
      Searching<span class="dots"></span>
    </p>
  </div>
  `;
}

// error message component
function renderError(message) {
  bookSection.innerHTML = `
    <p class="error">${message}</p>
  `;
}

const STORAGE_KEY = "favoriteBooks";
// save favorites to localStorage
function saveFavorites(favorites) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}

// Load fav orites from localStorage
function loadFavorites() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export { renderLoading, renderError, saveFavorites, loadFavorites, heartIcon };
