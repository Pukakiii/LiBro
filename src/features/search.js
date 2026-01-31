import { searchBooks } from "./api.js";
import { renderBookCards } from "../components/bookCard.js";
import { renderLoading } from "../utils.js";
import { renderError } from "../utils.js";

// DOM form elements
const searchInput = document.getElementById("input");
const bookSection = document.getElementById("book-list");

// search handler
export async function handleSearch() {
  const query = searchInput.value.trim();

  bookSection.innerHTML = renderLoading();

  try {
    const books = await searchBooks(query);

    if (books.length === 0) {
      bookSection.innerHTML = `
        <p class="state empty-state">No results found for "${query}". Please try another title.</p>
      `;
      return;
    }

    renderBookCards(books);
  } catch (error) {
    console.error("Error searching books:", error);
    renderError(error.message);
  }
}
