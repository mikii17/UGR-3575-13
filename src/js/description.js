function init() {
  let uri = decodeURI(window.location.href);
  let query = uri.slice(uri.indexOf("?") + 1);

  let dataByName = getDataByName(query, [
    ...popular,
    ...day,
    ...week,
    ...upcoming,
  ]);
  fillDescription(dataByName);
}
const fillDescription = (data) => {
  const profileImage = document.getElementById("profile-image");
  const movieTitle = document.getElementById("movie-title");
  const vote = document.getElementById("vote");
  const genre = document.getElementById("genre");
  const overview = document.getElementById("overview");
  const descSection = document.getElementById("description-section");

  descSection.style.backgroundImage = `linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.75) 0%,
    rgba(0, 0, 0, 0.9) 100%
  ), url(${data.backdrop_path})`;
  profileImage.src = data.poster_path;
  profileImage.setAttribute("width", "200");
  profileImage.setAttribute("height", "200");
  let title = data.title || data.name;
  movieTitle.textContent = title;
  const voteText = (Math.round(data.vote_average * 10) / 10).toFixed(1);
  vote.textContent = voteText;
  genre.textContent = data.genre_ids.join(", ");
  overview.textContent = data.overview;

  let archive = getDataByGenre(data.genre_ids, title, popular);
  archive.length > 10 ? (archive = archive.slice(0, 10)) : null;
  createList(document.getElementById("recommendations"), archive);
};

const getDataByName = (name, archive) => {
  return archive.filter(
    (movie) => movie?.title === name || movie?.name === name
  )[0];
};

const getDataByGenre = (genreList, name, archive) => {
  let data = [];
  for (genre of genreList) {
    data.push(
      ...archive.filter(
        (movie) =>
          movie.genre_ids.includes(genre) &&
          !(movie.title === name || movie.name === name)
      )
    );
  }
  return data;
};
document.addEventListener("DOMContentLoaded", init);
