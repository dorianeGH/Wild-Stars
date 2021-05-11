/*components import*/
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

//Call API for pictures

export default function GalleryPage() {
  const apiUrl = process.env.REACT_APP_API_SERVICE_URL;
  const apiKey = process.env.REACT_APP_NASA_API_KEY;
  const [pictureList, setPictureList] = useState([]);

  useEffect(() => {
    axios.get(apiUrl + "?api_key=" + apiKey).then((res) => {
      console.log(res.data);
    });
  }, []);

  return <div></div>;
}
