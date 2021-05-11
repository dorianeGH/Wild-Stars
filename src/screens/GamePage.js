import axios from "axios";
import { useParams } from "react-router";

const GamePage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Jouez !</h1>
    </div>
  );
};

export default GamePage;
