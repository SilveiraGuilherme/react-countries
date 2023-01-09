import { useState } from 'react';
import Countries from '../components/Countries';
import Country from '../components/Country';
import Header from '../components/Header';
import Main from '../components/Main';
import TextInput from '../components/TextInput';
import { allCountries } from '../data/countries';

export default function ReactCountriesPage() {
  const [countryFilter, setCountryFilter] = useState('');
  const [visitedCountries, setVisitedCountries] = useState([]);

  const countryFilterLowerCase = countryFilter.trim().toLowerCase();
  const filteredCountries =
    countryFilter.length >= 3
      ? allCountries.filter(({ nameLowerCase }) => {
          return nameLowerCase.includes(countryFilterLowerCase);
        })
      : allCountries;

  let numberOfCountries =
    filteredCountries.length === 1
      ? `${filteredCountries.length} country`
      : `${filteredCountries.length} countries`;
  let numberOfVisitedCountries =
    visitedCountries.length === 1
      ? `${visitedCountries.length} selected country`
      : `${visitedCountries.length} selected countries`;

  function handleCountryFilterChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }
  function toggleVisitedCountry(countryId) {
    let newVisitedCountries = [...visitedCountries];
    if (newVisitedCountries.indexOf(countryId) !== -1) {
      newVisitedCountries = newVisitedCountries.filter(
        visitedCountryId => visitedCountryId !== countryId
      );
    } else {
      newVisitedCountries.push(countryId);
    }
    setVisitedCountries(newVisitedCountries);
  }

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
        <Countries>
          <h2 className="text-center font-semibold">{numberOfCountries}</h2>
          <h3 className="text-center font-semibold text-sm">
            {numberOfVisitedCountries}
          </h3>
          {filteredCountries.map(country => {
            const isVisited = visitedCountries.indexOf(country.id) !== -1;
            return (
              <Country
                isVisited={isVisited}
                onCountryClick={toggleVisitedCountry}
                key={country.id}
              >
                {country}
              </Country>
            );
          })}
        </Countries>
      </Main>
    </>
  );
}
