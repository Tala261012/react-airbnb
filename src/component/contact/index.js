import "./index.css";
import Heading from "../heading";

export default function Contact({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="contact">
      <div className="contact__block">
        <Avatar src={image} name="avatar" />

        <div className="contact__block-about">
          <Heading>Господар – {name}</Heading>
          <div className="contact__sub-block">
            <span className="contact__sub-value">{phone}</span>
            <span className="contact__sub-value">{response_time}</span>
            <span className="contact__sub-value">
              {response_rate} відсотків швидкості відгуку{" "}
            </span>
          </div>
        </div>
      </div>

      <p className="contact__info">{info}</p>
    </div>
  );
}

function Avatar({ src, name }) {
  return <img className="avatar" src={src} alt={name} />;
}
