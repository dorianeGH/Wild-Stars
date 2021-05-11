import { Link } from "react-router-dom";

export default function Card({ id, title }) {
  return (
    <div>
      {/* <Link to={`/game/${id}`}>{title}</Link> */}
      {title}
    </div>
  );
}
