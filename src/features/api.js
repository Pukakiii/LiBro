// Base URL
const API_BASE_URL = "https://openlibrary.org";
const STORAGE_KEY = "libroFavorites";

// Search books from Open Library API

async function searchBooks(query) {
  const url = `${API_BASE_URL}/search.json?title=${encodeURIComponent(query)}&limit=10`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch from Open Library");

  const data = await response.json();
  console.log(data);
  return data.docs.map((doc) => ({
    key: doc.key,
    title: doc.title,
    author: doc.author_name?.[0] || "Unknown Author",
    year: doc.first_publish_year || "N/A",
    coverUrl: doc.cover_i ? `${API_BASE_URL}/b/id/${doc.cover_i}-M.jpg` : null,
    description: doc.description || "No description available",
  }));
}
