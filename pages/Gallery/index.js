import axios from "axios";
import { useEffect, useState } from "react";
import { useAppContext } from "@/context";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Grid from "@/components/Grid";

const Gallery = () => {
  const apiKey = "39553829-20c593789c441a532db0de841";
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useAppContext();

  const { searchTerm: query, isTyping } = state;

  useEffect(() => {
    let timer;

    if (isTyping) {
      setLoading(true);
      timer = setTimeout(async () => {
        await axios
          .get(
            `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type="photo"`
          )
          .then((res) => {
            setLoading(false);
            setImages(res.data.hits);
          })
          .catch((err) => console.error(err));
        dispatch({ type: "SET_IS_TYPING", payload: false });
      }, 5000);
    } else {
      clearTimeout(timer);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [query, dispatch, isTyping]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 max-w-screen-lg mx-auto gap-8 mt-10 mb-10">
      <div className={`${loading ? "block" : "hidden"}`}>
        {loading && (
          <Skeleton
            rectangle={true}
            height="200%"
            width="100%"
            count={10}
            containerClassName="grid lg:grid-cols-4 md:grid-cols-3 gap-10"
          />
        )}
      </div>

      <Grid items={images} loading={loading} />

      {/* {images?.map((image, index) => (
        
      ))} */}
    </div>
  );
};

export default Gallery;
