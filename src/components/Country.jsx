import Item from './Item';

export default function Country({
  children: country = null,
  onCountryClick = null,
  isVisited = false,
}) {
  if (!country) {
    return <div>Impossible to render country</div>;
  }

  const { id, name, capital, region, population, area, flag } = country;
  const demographicPopulation = (country.population / country.area).toFixed(2);
  const isVisitedClassName = isVisited ? 'bg-green-100' : '';

  function handleCountryClick() {
    if (onCountryClick) {
      onCountryClick(id);
    }
  }

  return (
    <div
      className={`border p-2 my-2 flex items-center space-x-2 ${isVisitedClassName} cursor-pointer`}
      onClick={handleCountryClick}
    >
      <img className="w-48" src={flag} alt={name} />
      <ul>
        <li>
          <Item label="Name: ">{name}</Item>
        </li>
        <li>
          <Item label="Capital">{capital}</Item>
        </li>
        <li>
          <Item label="Region">{region}</Item>
        </li>
        <li>
          <Item label="Population">{population}</Item>
        </li>
        <li>
          <Item label="Area">{area}</Item>
        </li>
        <li>
          <Item label="Demographic Population">{demographicPopulation}</Item>
        </li>
      </ul>
    </div>
  );
}
