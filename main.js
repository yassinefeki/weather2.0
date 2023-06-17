import { getWeather2 } from "./weather2.js";
import { checkWeather } from "./weather1.js";

async function fetchData() {
  const coord = await checkWeather();
  const x = coord.lon;
  const y = coord.lat;

  getWeather2(y, x).then((res) => {
    console.log(res.data);
  });
}

fetchData();
