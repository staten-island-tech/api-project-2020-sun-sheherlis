import { lol } from "./api";
import { DOMSelectors } from "./DOM";

console.log(DOMSelectors);

import "regenerator-runtime/runtime";

const query = `http://ddragon.leagueoflegends.com/cdn/10.23.1/data/en_US/champion.json`;
const key = "F5RO5i94v6yDF4yzrrmxKcU4s6PjhQFGWgr5mMIkypCWKsLH5FI";
const psquery = `https://api.pandascore.co/lol/champions?token=${key}`;

const init = async function () {
  try {
    const riotapi = await fetch(query);
    const psapi = await fetch(psquery);
    const riotdata = await riotapi.json();
    const psdata = await psapi.json();

    Promise.all([riotdata, psdata]).then((values) => {
      console.log(values);
      values.forEach((champ) => {
        DOMSelectors.displayContainer.insertAdjacentHTML(
          "beforeend",
          `<div class="champ-profile">
        <div class="champ-profile-img">
          <img
            src="${champ.big_image_url}"
            alt=""
            class="poster"
          />
        </div>
      </div>`
        );
      });
    });
  } catch (error) {
    console.log("fail");
  }
};

init();
