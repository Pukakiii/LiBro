import searchBooks from "./api.js";

// DOM form elements
const searchInput = document.getElementsByTagName("searchInput");
const form = document.getElementById("searchForm");
const loadingDiv = document.getElementById("loading");

// Event Listener
form.addEventListener("submit", (event) => {
  event.preventDefault();

  handleSearch(event, searchInput);
});

// Handle search functionality
async function handleSearch(event, query) {
  const query = searchInput.value.trim();

  loadingDiv.style.display = "block";

  try {
    const books = await searchBooks(query);
  } catch (error) {
    console.error("Error searching books:", error);
  } finally {
    loadingDiv.style.display = "none";
  }
  
}
