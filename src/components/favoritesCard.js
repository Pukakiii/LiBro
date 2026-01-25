function createFavoriteBookCard(book) {
  const card = document.createElement("div");
  card.className = "fav-book-card";

  const cover = book.coverUrl
    ? `<img src="${book.coverUrl}" alt="${book.title}" class="book-cover">`
    : `<div class="book-cover-placeholder">No Cover</div>`;
  
  card.innerHTML = `
    ${cover}
    <div class="fav-book-info">
      <h3>${book.title}</h3>
      <p class="fav-author">by ${book.author}</p>
      <p class="fav-year">${book.year}</p>
      <button class="fav-btn" data-key="${book.key}">Add to favorites</button>
    </div>
  `;

  return card;
}