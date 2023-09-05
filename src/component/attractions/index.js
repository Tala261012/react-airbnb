import "./index.css";
import { Fragment } from "react";

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

export default function Attractions({ list }) {
  return (
    <Box shadow className="details">
      <Heading border>Пам'ятки поблизу</Heading>

      {list.map(({ id, ...rest }) => (
        <Fragment key={id}>
          <Item {...rest} />
        </Fragment>
      ))}
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <ListItem>
      <a href={link} className="link">
        {name}
      </a>
    </ListItem>
  );
}
