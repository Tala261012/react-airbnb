import "./index.css";

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";

import guest from "./guest.svg";
import bedroom from "./bedroom.svg";
import bed from "./bed.svg";
import bath from "./bath.svg";

export default function Details({ title, guests, bedrooms, beds, baths }) {
  return (
    <Box shadow className="details">
      <Heading border>{title}</Heading>
      <ListItem imageSrc={guest}>{guests} гостей</ListItem>
      <ListItem imageSrc={bedroom}>{bedrooms} спальня</ListItem>
      <ListItem imageSrc={bed}>{beds} ліжко</ListItem>
      <ListItem imageSrc={bath}>{baths} ваная кімната</ListItem>
    </Box>
  );
}
