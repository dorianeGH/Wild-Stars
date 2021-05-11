// import { useParams } from "react-router";
import Puzzle from "../components/Puzzle";
import { useLocation } from "react-router-dom";

const GamePage = () => {
  // const { id } = useParams();
  const location = useLocation();
  let imgSrc = "";
  let imageHeight = 0;
  let imageWidth = 0;
  if (location.state != null) {
    imgSrc = location.state.url;
    imageHeight = location.state.imageHeight;
    imageWidth = location.state.imageWidth;
  }
  return (
    <div>
      <h1>Jouez !</h1>
      <Puzzle
        imgSrc={imgSrc}
        imageHeight={imageHeight}
        imageWidth={imageWidth}
      />
    </div>
  );
};

export default GamePage;
