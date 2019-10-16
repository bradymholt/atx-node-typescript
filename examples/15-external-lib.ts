// External library (with included type definitions)

import axios from "axios";

(async function() {
  const breweries = await axios.request({
    url: "https://api.openbrewerydb.org/breweries?by_state=texas"
  });
  console.log(breweries.data);
})();

//#region
//.node_modules/axios/package.json:111 ("typings")

// interface IBrewery {
//   id: number;
//   name: string;
//   city: string;
// }

// (async function() {
//   const breweries = await axios.request<Array<IBrewery>>({
//     url: "https://api.openbrewerydb.org/breweries?by_state=texas"
//   })
//   breweries.data.map(b=>b.name);
//   console.log(breweries.data.map(b=>b.name));
// })();
//#endregion
