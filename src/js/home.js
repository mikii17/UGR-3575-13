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

  createList(upcomingMovies, upcoming);
  createList(trendingMovies, day.slice(0, 4));
  createList(popularMovies, popular.slice(0, 4));
}

const populateTable = (container, data) => {
  for (let index = 0; index <= 9; index++) {
    const tableRow = document.createElement("tr");
    const number = document.createElement("td");
    number.classList += "td-number";
    const tilte = document.createElement("td");
    tilte.classList += "td-title";
    const vote = document.createElement("td");
    vote.classList += "td-rating";
    const voteText = document.createElement("span");

    number.textContent = `${index + 1}.`;
    tilte.textContent = data[index]?.title || data[index]?.name;
    voteText.textContent = (
      Math.round(data[index].vote_average * 10) / 10
    ).toFixed(1);
    vote.append(voteText);
    tableRow.append(number);
    tableRow.append(tilte);
    tableRow.append(vote);
    container.append(tableRow);
  }
};
document.addEventListener("DOMContentLoaded", init);
