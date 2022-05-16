import planets from "./planets.json";

const translatePlanet = (planet: any) => ({ 
  name: planet.pl_name, 
  hostName: planet.hostname, 
  numberOfStars: planet.sy_snum,
  discoveryYear: planet.disc_year,
  orbitalDays: planet.pl_orbper,
  radiusInEarthRadiuses: planet.pl_rade  
});

const getPlanets = () => planets.map(translatePlanet);

export default getPlanets;