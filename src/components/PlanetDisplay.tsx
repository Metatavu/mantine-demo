import { Accordion, ThemeIcon, Text } from "@mantine/core";

import { Planet as PlanetIcon } from 'tabler-icons-react';
import { Planet } from "../types";

const PlanetDisplay = (planet: Planet) => (
  <Accordion.Item
    style={{ marginLeft: "20px" }}
    label={ <Text size="lg" color="alien">{ planet.name } </Text>}
    styles={{ content: {
      paddingLeft: 0
    }}}
    icon={
      <ThemeIcon size="lg" variant="outline" color="alien">
        <PlanetIcon />
      </ThemeIcon>  
    }
  >
    <Text color="alien" size="md">Host star name: { planet.hostName }</Text>
    <Text color="alien" size="md">Discovery year: { planet.discoveryYear }</Text>
    <Text color="alien" size="md">Radius (earth radiuses): { planet.radiusInEarthRadiuses }</Text>
    <Text color="alien" size="md">Orbital period (days): { planet.orbitalDays }</Text>
    <Text color="alien" size="md">Number of stars in the system: { planet.numberOfStars }</Text>
  </Accordion.Item>
);

export default PlanetDisplay;