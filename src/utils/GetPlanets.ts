import { Planet } from "../types";
import planets from "./planets.json";

/**
 * Translates a planet from JSON to a format used by this app
 */
const translatePlanet = (planet: any): Planet => ({ 
  name: planet.pl_name, 
  hostName: planet.hostname, 
  numberOfStars: planet.sy_snum,
  discoveryYear: planet.disc_year,
  orbitalDays: planet.pl_orbper,
  radiusInEarthRadiuses: planet.pl_rade  
});

/**
 * Returns all planets from the JSON-file
 */
const getPlanets = () => planets.map(translatePlanet);

export default getPlanets;