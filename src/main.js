import { handleSearch } from "./features/search.js";
import { handleFavoriteToggle } from "./features/favorites.js";

// DOM elements
const form = document.getElementById("search-form");
const documentBody = document.body;

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