import axios from "axios";

export function getWeather2(lat, lon) {
  return axios.get(
    "https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&temperature_unit=celsius&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=auto",
    {
      params: {
        latitude: lat,
        longitude: lon,
      },
    }
  );
}
