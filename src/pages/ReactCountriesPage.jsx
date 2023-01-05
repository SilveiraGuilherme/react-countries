import { useState } from 'react';
import Countries from '../components/Countries';
import Header from '../components/Header';
import Main from '../components/Main';
import TextInput from '../components/TextInput';

import { allCountries } from '../data/countries';

export default function ReactCountriesPage() {
  const [countryFilter, setCountryFilter] = useState('Argentina');
  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }
  const countryFilterLowerCase = countryFilter.trim().toLowerCase();
  const filteredCountries =
    countryFilter.length >= 3
      ? allCountries.filter(({ nameLowerCase }) => {
          return nameLowerCase.includes(countryFilterLowerCase);
        })
      : allCountries;

  return (
    <>
      <Header>react-countries</Header>
      <Main>
        <TextInput
          id="inputCountryFilter"
          labelDescription="Type the name of the country (at least 3 characters):"
          inputValue={countryFilter}
          onInputChange={handleCountryFilterChange}
          autoFocus
        />
        <Countries>{filteredCountries}</Countries>
      </Main>
    </>
  );
}
