import { handleSearch } from "./features/search.js";

const form = document.getElementById("search-form");

// fresh start
localStorage.clear();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  handleSearch();
});
