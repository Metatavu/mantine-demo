import { Accordion } from "@mantine/core";
import { useEffect, useState } from "react";
import getPlanets from "../utils/GetPlanets";
import { Planet } from "../types";
import PlanetDisplay from "./PlanetDisplay";
import { useNetwork } from '@mantine/hooks';
import { showNotification } from "@mantine/notifications";

/**
 * Renders a list of planets
 */
const Planets = () => {
  const [ planets, setPlanets ] = useState<Planet[]>([]);
  
  /**
   * Loads all planets
   */
  const loadPlanets = () => {
    const foundPlanets = getPlanets();
    setPlanets(foundPlanets);
  }

  useEffect(() => {
    loadPlanets();
  }, []);


  const networkStatus = useNetwork().online;
  useEffect(() => {
    if (!networkStatus) {
      showNotification({
        title: "Network",
        color: "red",
        message: "No connection"
      });

      return;
    }

    showNotification({
      title: "Network",
      color: "green",
      message: "Connection"
    });
  }, [ networkStatus ]);

  return (
      <Accordion style={{ width: "100%" }}>
      { planets.map(PlanetDisplay) }
      </Accordion>
  ); 
}

export default Planets;