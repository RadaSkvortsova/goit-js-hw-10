import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import countryList from '../src/country-list.hbs';
import countryName from '../src/country-name.hbs';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const refs = {
  searchBox: document.querySelector('#search-box'),
  countryInfo: document.querySelector('.country-list'),
};

refs.searchBox.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch() {
  const name = refs.searchBox.value.trim();

  if (name === '') {
    refs.countryInfo.innerHTML = '';
    return;
  }

  fetchCountries(name)
    .then(listOfAllCountries => renderCountryList(listOfAllCountries))
    .catch(error => {
      refs.countryInfo.innerHTML = '';
      notiflix.Notify.failure('Oops, there is no country with that name');
    });
}

function renderCountryList(params) {
  if (params.length === 1) {
    const markupCountry = countryList(params);
    refs.countryInfo.innerHTML = markupCountry;
    return;
  } else if (params.length > 10) {
    refs.countryInfo.innerHTML = '';
    return notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
  } else {
    const markupCountry = countryName(params);
    refs.countryInfo.innerHTML = markupCountry;
  }
}
