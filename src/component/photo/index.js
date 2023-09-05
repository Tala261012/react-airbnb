import "./index.css";

export default function Photo({ src, name }) {
  return <img className="photo" src={src} alt={name} />;
}
