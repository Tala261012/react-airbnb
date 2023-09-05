import "./index.css";

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

export default function Additional({
  rules,
  policy,
  transport,
  lang,
  offer,
  instructions,
}) {
  return (
    <Box shadow className="details">
      <Heading border>Додаткові властивості</Heading>
      <ListItem title="Правила дому" children={rules} />
      <ListItem title="Політика скасування" children={policy} />
      <ListItem title="Місцевий транспорт" children={transport} />

      <ListItem title="Мови хоста">{lang.join(", ")}</ListItem>

      <ListItem title="Спеціальні пропозиції" children={offer} />
      <ListItem title="Інструкції щодо реєстрації" children={instructions} />
    </Box>
  );
}
