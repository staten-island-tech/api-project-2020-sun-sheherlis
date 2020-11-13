import { lol } from "./api";
import { DOMSelectors } from "./DOM";

import "regenerator-runtime/runtime";

const query = `http://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/champion.json`;

const init = async function () {
  try {
    const response = await fetch(query);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("fail");
  }
};

init();
