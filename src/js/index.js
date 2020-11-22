//import { lol } from "./api";
import { DOMSelectors } from "./DOM";

console.log(DOMSelectors);

import "regenerator-runtime/runtime";

const init = async function () {
  const query = `http://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/champion.json`;
  try {
    const response = await fetch(query);
    const list = await response.json();
    console.log(list);

    list.data.forEach((champ) => {
      DOMSelectors.displayContainer.insertAdjacentHTML(
        "beforeend",
        `<p class="please-work">${champ.name}</p>`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

init();
