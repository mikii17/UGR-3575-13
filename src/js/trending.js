function init() {
  let count = 8;
  let data = day;

  const trendingMovies = document.getElementById("trending-movies");
  const loadMore = document.getElementById("load-more");
  const dayFilter = document.getElementById("day-filter");
  const weekFilter = document.getElementById("week-filter");

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
    count = loadMoreUtil(trendingMovies, data, count);
  }

  loadMore.addEventListener("click", loadMoreHandler);
  dayFilter.addEventListener("click", (ev) => {
    weekFilter.classList.remove("selected");
    dayFilter.classList.add("selected");
    data = day;
    if (data.length <= 8) {
      loadMore.removeEventListener("click", loadMoreHandler);
      // loadMore.classList.add("none");
      loadMore.style.display = "none";
    } else {
      loadMore.addEventListener("click", loadMoreHandler);
      // loadMore.classList.add("none");
      loadMore.style.display = "block";
    }
    count = 8;
    removeChildElements(trendingMovies);
    createList(trendingMovies, data.slice(0, count));
  });
  weekFilter.addEventListener("click", (ev) => {
    weekFilter.classList.add("selected");
    dayFilter.classList.remove("selected");
    data = week;
    if (data.length <= 8) {
      loadMore.removeEventListener("click", loadMoreHandler);
      // loadMore.classList.add("none");
      loadMore.style.display = "none";
    } else {
      loadMore.addEventListener("click", loadMoreHandler);
      // loadMore.classList.add("none");
      loadMore.style.display = "block";
    }
    count = 8;
    removeChildElements(trendingMovies);
    createList(trendingMovies, data.slice(0, count));
  });
  createList(trendingMovies, data.slice(0, 8));
  count = 8;
}
document.addEventListener("DOMContentLoaded", init);
