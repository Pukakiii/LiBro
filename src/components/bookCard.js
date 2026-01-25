const bookSection = document.getElementById("book-list");
  
export function renderBookCards(books) {
  bookSection.innerHTML = "";

  books.forEach(book => {
    bookSection.appendChild(createBookCard(book));
  });
} 

function createBookCard(book) {
  const card = document.createElement("div");
  card.className = "book-card";

  const cover = book.coverUrl
    ? `<img src="${book.coverUrl}" alt="${book.title}" class="book-cover">`
    : `<div class="book-cover-placeholder">No Cover</div>`;
  
  card.innerHTML = `
    ${cover}
    <div class="book-info">
      <h3>${book.title}</h3>
      <p class="author">by ${book.author}</p>
      <p class="year">${book.year}</p>
      <button class="fav-btn" data-key="${book.key}">Add to favorites</button>
    </div>
  `;

  return card;
} 

