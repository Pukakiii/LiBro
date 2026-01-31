const STORAGE_KEY = "favoriteBooks";
// save favorites to localStorage
export function saveFavorites(favorites) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}

// Load fav orites from localStorage
export function loadFavorites() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}
