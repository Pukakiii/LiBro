import searchBooks from "./api.js";
// DOM form elements
const searchInput = document.getElementsByTagName("searchInput");
const searchBtn = document.getElementById("searchBtn");

// Event Listener
searchBtn.addEventListener("submit", handleSearch);

// Handle search functionality
async function handleSearch(event) {
  event.preventDefault();

  const query = searchInput.value.trim();

  try {
    const books = await searchBooks(query);
  } catch (error) {
    console.error("Error searching books:", error);
  }
}