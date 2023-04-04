export default async function PlanetInfo({id=3}) {
  const res = await fetch(`https://swapi.dev/api/planets/${id}/`);
  const data = await res.json();

  return (<div>
    <p>Welcome to the planet {data.name}. Its diameter is {data.diameter} and its population is {data.population} inhabitants</p>
  </div>)
}