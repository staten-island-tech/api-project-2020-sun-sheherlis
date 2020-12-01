import { DOMSelectors } from "./DOM";

console.log(DOMSelectors);

const click = function () {
  DOMSelectors.searchBar.addEventListener("keyup", function (e) {
    DOMSelectors.errorMessage.innerHTML = "";
    e.preventDefault();
    DOMSelectors.displayContainer.innerHTML = "";
    const searchPara = DOMSelectors.searchBar.value;
    console.log(searchPara);
    const searchInit = async function () {
      let query = `http://ddragon.leagueoflegends.com/cdn/10.24.1/data/en_US/champion/${searchPara}.json`;
      console.log(query);
      //resets to init if search bar is blank
      if (searchPara === "") {
        query = `http://ddragon.leagueoflegends.com/cdn/10.24.1/data/en_US/champion.json`;
      }
      try {
        const response = await fetch(query);
        const list = await response.json();
        const champNames = Object.values(list.data);
        console.log(champNames);
        champNames.forEach((champ) => {
          const stats = Object.values(champ.info);
          DOMSelectors.displayContainer.insertAdjacentHTML(
            "beforeend",
            `<div class="card"> 
                    <div class="champ-card">
                    <div class="champ-card-front">
                      <img
                        src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg"
                        alt=""
                        class="poster"
                      />
                    </div>
                    <div class="champ-card-back">
                      <h3 class="champ-card-header">${champ.name}</h3>
                      <div class="stat-box">
                        <p class="champ-stats">Basic Stats</p>
                        <div class="champ-stats-info">
                          <p class="champ-stats-info, attack">Attack: ${stats[0]}</p>
                          <p class="champ-stats-info, defense">Defense: ${stats[1]}</p>
                          <p class="champ-stats-info, magic">Magic: ${stats[2]}</p>
                          <p class="champ-stats-info, difficulty">Difficulty: ${stats[3]}</p>
                        </div>
                      </div>
                      <div class="class-box">
                        <p class="champ-class"><b>Class</b></p>
                        <p class="champ-class">${champ.tags}</p>
                      </div>
                    </div>
                    </div> 
                  </div>`
          );
        });
      } catch (error) {
        DOMSelectors.errorMessage.innerHTML = "";
        DOMSelectors.errorMessage.insertAdjacentHTML(
          "beforeend",
          `<p class="search-error-text">No champ found! Check for proper capitalization or make the champ's name one word</p>`
        );
      }
    };
    searchInit();
  });
};

click();

export { click };
