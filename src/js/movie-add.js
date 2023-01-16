const createList = (container, data) => {
  for (movie of data) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");
    const div = document.createElement("div");
    const titleP = document.createElement("titleP");
    const voteP = document.createElement("p");

    a.setAttribute("href", `./description.html?${movie?.title || movie?.name}`);
    img.setAttribute("src", `${movie.poster_path}`);
    img.setAttribute("alt", `${movie?.title || movie?.name}`);
    img.setAttribute("width", "200");
    img.setAttribute("height", "200");
    img.setAttribute("loading", "lazy");
    div.classList.add("movie-card-title");
    titleP.textContent = movie?.title || movie?.name;
    titleP.classList.add("title");

    const vote = (Math.round(movie.vote_average * 10) / 10).toFixed(1);
    voteP.textContent = vote;

    if (vote <= 5) {
      voteP.classList.add("red-border");
    } else if (vote > 5 && vote <= 7) {
      voteP.classList.add("yellow-border");
    } else {
      voteP.classList.add("green-border");
    }

    div.append(titleP);
    div.append(voteP);
    a.append(img);
    a.append(div);
    li.append(a);
    container.append(li);
  }
};
