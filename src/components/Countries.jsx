import Country from './Country';

export default function Countries({ children: countries = [] }) {
  let numberOfCountries = countries.length;
  countries.length === 1
    ? (numberOfCountries = `${countries.length} country`)
    : (numberOfCountries = `${countries.length} countries`);

  return (
    <div>
      <h2 className="text-center font-semibold">{numberOfCountries}</h2>
      {countries.map(country => {
        return <Country key={country.id}>{country}</Country>;
      })}
    </div>
  );
}
