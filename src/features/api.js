// Base URL
const API_BASE_URL = "https://openlibrary.org";

// Search books from Open Library API
export async function searchBooks(query) {
  const url = `${API_BASE_URL}/search.json?title=${encodeURIComponent(query)}&limit=30`;

  const response = await fetch(url);

  if (!response.ok) throw new Error(`Error: ${response.status}`);

  const data = await response.json();

  return data.docs.map(
    (doc) => (
      {
        key: doc.key,
        title: doc.title,
        author: doc.author_name?.[0] || "Unknown Author",
        year: doc.first_publish_year || "N/A",
        coverUrl: doc.cover_i ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg` : null,
        description: doc.description || "No description available",
      }
    ),
  );
}
