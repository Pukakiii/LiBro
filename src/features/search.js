import { searchBooks } from "./api.js";
import { loading } from "../utils.js";
import { renderBookCards } from "./bookCards.js";
// DOM form elements
const searchInput = document.getElementById("input");
const resultsSection = document.getElementById("results-section");

// Event Listener

// Handle search functionality
export async function handleSearch(event) {
  const query = searchInput.value.trim();

  // resultsSection.innerHTML = loading();

  try {
    const books = await searchBooks(query);
    renderBookCards(books);
  } catch (error) {
    console.error("Error searching books:", error);
  } finally {
    // resultsSection.innerHTML = "";
  }
}
