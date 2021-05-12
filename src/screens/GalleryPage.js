/*components import*/
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import "./gallery-page.css";
// require("dotenv").config();

//Call API for pictures

export default function GalleryPage() {
  const apiUrl = process.env.REACT_APP_API_SERVICE_URL;
  const apiKey = process.env.REACT_APP_NASA_API_KEY;
  const start_date = "2021-05-01";
  const end_date = "2021-05-11";
  const [pictureList, setPictureList] = useState([]);

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
    <>
      <div className="header-bg  text-center text-4xl bg-auto text-gray-200">
        <h1>Welcome to SpacePuzzle</h1>
        <h2 className="text-2xl">011101100010011110100100100110000101</h2>
        <h4 className="text-xl">
          ( Click on a picture to start the SpacePuzzle )
        </h4>
      </div>
      <div className="gallery-page bg-image bg-fixed w-full min-h-screen flex flex-wrap justify-center items-center gap-10 py-5">
        {pictureList.map(({ title, url }, key) => (
          <Card key={key} id={key} title={title} url={url} />
        ))}
      </div>
    </>
  );
}
