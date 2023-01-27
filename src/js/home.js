function init() {
  const trendingMovies = document.getElementById("trending-movies");
  const popularMovies = document.getElementById("popular-movies");
  const upcomingMovies = document.getElementById("upcoming-movies");
  const popularTable = document.getElementById("popular-table");
  const trendingTable = document.getElementById("trending-table");

  const popularTableBody = document.createElement("tbody");
  const trendingTableBody = document.createElement("tbody");

  populateTable(popularTableBody, popular);
  populateTable(trendingTableBody, day);

  console.log(popular, day);

  popularTable.append(popularTableBody);
  trendingTable.append(trendingTableBody);

  createList(upcomingMovies, upcoming, false);
  createList(trendingMovies, day.slice(0, 4));
  createList(popularMovies, popular.slice(0, 4));
}

const populateTable = (container, data) => {
  for (let index = 0; index <= 9; index++) {
    const tableRow = document.createElement("tr");
    tableRow.classList.add("fw-normal", "fs-5");
    const number = document.createElement("td");
    number.classList.add("border-white", "border-bottom", "p-3", "text-center");
    const title = document.createElement("td");
    title.classList.add("border-white", "border-bottom", "p-3", "text-start");
    const vote = document.createElement("td");
    vote.classList.add("border-white", "border-bottom", "p-3", "text-start");
    const voteText = document.createElement("span");

    number.textContent = `${index + 1}.`;
    title.textContent = data[index]?.title || data[index]?.name;
    voteText.textContent = (
      Math.round(data[index].vote_average * 10) / 10
    ).toFixed(1);
    voteText.classList.add(
      "bg-yellow",
      "p-1",
      "rounded",
      "text-dark",
      "fw-bold",
      "text-end"
    );
    vote.append(voteText);
    tableRow.append(number);
    tableRow.append(title);
    tableRow.append(vote);
    container.append(tableRow);
  }
};
document.addEventListener("DOMContentLoaded", init);
