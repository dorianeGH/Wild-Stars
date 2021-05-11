import { useParams } from "react-router";
import Puzzle from "../components/Puzzle";
import { useLocation } from "react-router-dom";

const GamePage = () => {
  const { id, url } = useParams();
  console.log(id);

  const location = useLocation();
  const imgSrc = location.state != null ? location.state.url : "";
  console.log(imgSrc);
  return (
    <div>
      <h1>Jouez !</h1>
      <Puzzle />
    </div>
  );
};

export default GamePage;
