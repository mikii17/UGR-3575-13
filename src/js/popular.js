function init() {
  let count = 8;
  let data = popular;
  const popularMovies = document.getElementById("popular-movies");
  const loadMore = document.getElementById("load-more");
  const filterCatagories = document.getElementsByClassName("genre");

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
    count = loadMoreUtil(popularMovies, data, count);
  }

  loadMore.addEventListener("click", loadMoreHandler);

  Array.prototype.forEach.call(filterCatagories, (element) => {
    element.addEventListener("click", (ev) => {
      const genre = ev.target.textContent;

      data = popular.filter((movie) => movie.genre_ids.includes(genre));

      if (data.length <= 8) {
        // loadMore.removeEventListener("click", loadMoreHandler);
        // loadMore.classList.add("none");
        loadMore.style.display = "none";
      } else {
        loadMore.addEventListener("click", loadMoreHandler);
        // loadMore.classList.add("none");
        loadMore.style.display = "block";
      }
      count = data.length > 8 ? 8 : data.length;
      removeChildElements(popularMovies);
      createList(popularMovies, data.slice(0, count));
    });
  });
  createList(popularMovies, popular.slice(0, 8));
  count = 8;
}

document.addEventListener("DOMContentLoaded", init);
