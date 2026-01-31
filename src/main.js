import { handleSearch } from "./features/search.js";
import { handleFavoriteToggle } from "./features/favorites.js";
import { toggleThemeMode } from "./utils.js";
import { renderFavorites } from "./components/favoriteBookCard.js";

// DOM elements
const form = document.getElementById("search-form");
const themeBtn = document.querySelector(".theme-mode");
const documentBody = document.body;

// Initial rendering of favorites on page load
renderFavorites();

// rendering book cards on form submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  handleSearch();
});

// Event delegation for favorite button toggles
documentBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("fav-btn")) {
    handleFavoriteToggle(e);
  }
});

// Theme mode toggle button event listener
themeBtn.addEventListener("click", () => {
  toggleThemeMode();
});