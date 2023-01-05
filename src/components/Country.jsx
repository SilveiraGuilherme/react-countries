export default function Country({ children: country = null }) {
  return !country ? <div>Not a valid country</div> : <div>{country.name}</div>;
}
