import { lol } from "./api";
import { DOMSelectors } from "./DOM";

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
        DOMSelectors.champs.insertAdjacentHTML(
          "beforeend",
          `<div class="champ-profile">
        <div class="champ-profile-img">
          <img
            src="${champ.big_image_url}"
            alt=""
            class="poster"
          />
        </div>
        <div class="movie-card-back">
          <h3 class="movie-card-header">${movie.original_title}</h3>
          <div class="score-box">
            <p class="user-score">Community Score</p>
            <p class="user-score">${movie.vote_average}</p>
          </div>
          <div class="release-box">
            <p class="release-date">Released</p>
            <p class="release-date">${movie.release_date}</p>
          </div>
          <div class="movie-genres">
            <div>${genreArr}</div>
          </div>
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
