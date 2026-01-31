const bookSection = document.getElementById("book-list");

// heartIcon for book cards
function heartIcon() {
  return `<img src="../simple-books-catalogue/heart-icon.svg" alt="heart icon" class="heart-icon"/>`;
}

// loading animation component
function renderLoading() {
  return `
  <div id="loading" class="state">
    <p class="loading-text">
      Searching<span class="dots"></span>
    </p>
  </div>
  `;
}

// error message component
function renderError(message) {
  bookSection.innerHTML = `
    <p class="error">${message}</p>
  `;
}

// theme mode toggle
function toggleThemeMode() {
  document.body.classList.toggle("vivid-mode");
  const themeButton = document.querySelector(".theme-mode");
  themeButton.textContent = document.body.classList.contains("vivid-mode")
    ? "vivid"
    : "light";
}


export {
  renderLoading,
  renderError,
  heartIcon,
  toggleThemeMode,
};
