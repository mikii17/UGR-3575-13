function init() {
  let data;
  count = 8;

  const searchValue = document.getElementById("search-value");
  const searchMovies = document.getElementById("search-movies");
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search");
  const loadMore = document.getElementById("load-more");

  loadMore.addEventListener("click", loadMoreHandler);
  searchForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    query = searchInput.value.toLowerCase().trim();

    data = popular.filter(
      (movie) =>
        movie?.title?.toLowerCase().includes(query) ||
        movie?.name?.toLowerCase().includes(query)
    );
    count = 8;
    searchValue.textContent = query;
    removeChildElements(searchMovies);
    createList(searchMovies, data.slice(0, count));
    if (data.length <= 8) {
      loadMore.removeEventListener("click", loadMoreHandler);
      // loadMore.classList.add("none");
      loadMore.style.display = "none";
    } else {
      loadMore.addEventListener("click", loadMoreHandler);
      // loadMore.classList.add("none");
      loadMore.style.display = "block";
    }
  });

  let uri = decodeURI(window.location.href);

  let query = uri.slice(uri.indexOf("?search=") + 8);

  searchValue.textContent = query.toLowerCase().trim();
  data = popular.filter(
    (movie) =>
      movie?.title?.toLowerCase().includes(query) ||
      movie?.name?.toLowerCase().includes(query)
  );
  createList(searchMovies, data.slice(0, count));

  function loadMoreHandler(ev) {
    if (data.length <= count + 8) {
      loadMore.removeEventListener("click", loadMoreHandler);
      // loadMore.classList.add("none");
      loadMore.style.display = "none";
    } else {
      loadMore.addEventListener("click", loadMoreHandler);
      // loadMore.classList.add("none");
      loadMore.style.display = "block";
    }
    count = loadMoreUtil(searchMovies, data, count);
  }
}

document.addEventListener("DOMContentLoaded", init);
