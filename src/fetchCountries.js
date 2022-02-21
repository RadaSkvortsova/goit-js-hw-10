// export function fetchCountries({ name, capital, population, flags, languages }) {
//   return fetch(`${BASE_URL}/v2/all?fields=name`).then(response => response.json());
// }
// const BASE_URL = 'https://restcountries.com';
// const name = 'flag';

// export function fetchCountries(name) {
//   return fetch(
//     `${BASE_URL}/v2/all?fields={name.official},{capital},{population},{flags.svg},{languages}`,
//   ).then(response => response.json());
// }
// const BASE_URL = 'https://restcountries.com';

// export function fetchCountries(name) {
//   return fetch(`${BASE_URL}/v3.1/name/${name}`).then(response => response.json());
// }
const BASE_URL = 'https://restcountries.com';

//name.official,capital,population,flags.svg,languages

export function fetchCountries(name) {
  return fetch(`${BASE_URL}/v3.1/name/${name}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
