//import { lol } from "./api";
import { DOMSelectors } from "./DOM";

console.log(DOMSelectors);

import "regenerator-runtime/runtime";

const init = async function () {
  const query = `http://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/champion.json`;
  try {
    const response = await fetch(query);
    const list = await response.json();
    //coverts the api objects into an array, allowing it to be passed through forEach
    const champNames = Object.values(list.data);
    console.log(champNames);

    //using champ.id instead of champ.name gives the names with no spaces, which is needed if accessing a url such as the images
    champNames.forEach((champ) => {
      //stats had the same issue as the actual values, turned them into an array to display them
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
    console.log(error);
  }
};

init();
