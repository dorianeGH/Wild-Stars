/*components import*/
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

//Call API for pictures

export default function GalleryPage() {
  const apiUrl = process.env.REACT_APP_API_SERVICE_URL;
  const apiKey = process.env.REACT_APP_NASA_API_KEY;
  const start_date = "2021-05-01";
  const end_date = "2021-05-11";
  const [pictureList, setPictureList] = useState([]);

  //api.nasa.gov/planetary/apod?api_key=zf6xTmUCfd1EPqqoaApM6xSgtYTXz44wmlvrzNiU&start_date=2021-05-01&end_date=2021-05-11
  useEffect(() => {
    axios
      .get(
        apiUrl +
          "?api_key=" +
          apiKey +
          "&start_date=" +
          start_date +
          "&end_date=" +
          end_date
      )
      .then((res) => setPictureList(res.data));
  }, []);

  return (
    <div>
      {pictureList.map(({ title, url, key }) => (
        <div>
          <h1>{title}</h1>
          <img style={{ width: "100%" }} src={url} alt={title} />
        </div>
      ))}
    </div>
  );
}
