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
      DOMSelectors.displayContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="champ-card">
        <div class="champ-card-front">
          <img
            src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg"
            alt=""
            class="poster"
          />
        </div>
      </div>`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

init();

/*<div class="champ-card">
        <div class="champ-card-front">
          <img
            src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg"
            alt=""
            class="poster"
          />*/
