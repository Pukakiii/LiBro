const bookSection = document.getElementById("book-list");

// loading animation component
function renderLoading() {
  return `
  <div id="loading">
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

export { renderLoading, renderError };
