import { Fragment } from "react";
import Heading from "../heading";
import Box from "../box";

import "./index.css";

export default function Review({ list }) {
  return (
    <div className="review__block">
      <Heading>Відгуки клієнтів</Heading>

      <div className="review__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="review__block">
      <div className="review__author">
        <span className="review__name">{guestName}</span>
        <span>Рейтинг: {rating}</span>
      </div>

      <span className="review__info">{review}</span>
    </Box>
  );
}
