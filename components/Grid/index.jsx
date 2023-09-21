import React, { useState, useEffect, useRef } from "react";
import Sortable from "sortablejs";

function Grid({ items, loading }) {
  const gridRef = useRef(null);
  const sortableJsRef = useRef(null);

  useEffect(() => {
    sortableJsRef.current = new Sortable(gridRef.current, {
      animation: 150,
      delayOnTouchOnly: false,
      delay: 70,
    });
  }, []);

  return (
    <div
      className={`${
        loading ? "hidden" : "block"
      } grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 max-w-screen-lg mx-auto gap-8 mt-10 mb-10`}
      ref={gridRef}
    >
      {items.map(({ id, webformatURL, tags }, index) => (
        <div className="relative" key={id} data-id={id}>
          <img
            src={webformatURL}
            alt=""
            className={`w-full h-[300px] object-fit object-center rounded-2xl shadow-lg cursor-pointer`}
          />
          <div
            className={`bg-slate-400 bg-opacity-50 p-2 text-xs text-white rounded-lg absolute top-5 left-2  text-center capitalize`}
          >
            {tags}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Grid;
