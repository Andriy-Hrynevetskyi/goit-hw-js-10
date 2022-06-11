import debounce from 'lodash.debounce';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  countriesList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(event) {
  let country = event.target.value;

  fetchCountries(country).then(getCountry);
}

function fetchCountries(country) {
  return fetch(
    `https://restcountries.com/v2/name/${country}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function getCountriesList(countries) {
  const markupCountries = countries.map(markupFewCountries).join('');

  renderFewCountries(markupCountries);
}

function markupFewCountries(countries) {
  let {
    name,
    flags: { svg },
  } = countries;
  return `<li class="country-item">
  <img class="country-flag" src="${svg}" alt="${name} flag" width = 50/>
  <p class="country-name">${name}</p>
</li>`;
}

function renderFewCountries(markup) {
  refs.countriesList.innerHTML = markup;
}

function getCountry(country) {
  const markup = country.map(markupCountry).join('');
  renderCountry(markup);
}

function markupCountry(country) {
  let {
    name,
    capital,
    population,
    flags: { svg },
    languages,
  } = country;
  return `<div class="country-info__main">
  <img src="${svg}" alt="${name} flag" width = 100/>
  <p>${name}</p>
</div>
<div class="country-info__secondary">
  <p class="country-info__value">
    <span class="country-info__headding">Capital</span>${capital}
  </p>
  <p class="country-info__value">
    <span class="country-info__headding">Population</span>
    ${population}
  </p>
  <p class="country-info__value">
    <span class="country-info__headding">Languages</span>${languages}
  </p>
</div>`;
}

function renderCountry(markup) {
  refs.countryInfo.innerHTML = markup;
}

// GET DATA FROM COUNTRIES API

// function getData(data) {
//   return data.map(country => {
//     console.log('name - ', country.name);
//     console.log('capital - ', country.capital);
//     console.log('languages - ', country.languages);
//     console.log('flag svg - ', country.flags.svg);
//   });
// }

// function getData(data) {
//   return data.map(({ name, capital, languages, flags: { svg } } = data) => {
//     console.log('name - ', name);
//     console.log('capital - ', capital);
//     console.log('languages - ', languages[3]);
//     console.log('flag svg - ', svg);
//   });
// }
