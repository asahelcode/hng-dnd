import axios from "axios";
import { useEffect, useState } from "react";

console.log(process.env.API_KEY)
const queryParams = {
  key: process.env.API_KEY,
  q: "",
  page: 1,
};

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://pixabay.com/api/", { params: queryParams })
      .then((res) => {
        console.log(res.data);
      });
  }, []);
  return <div>Hello world</div>;
};

export default Gallery;
