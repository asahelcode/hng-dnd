function Grid({ items, loading }) {
  return items.map((image, index) => (
    <div key={index} className={`relative ${loading ? "hidden" : "block"}`}>
      <img
        src={image.webformatURL}
        alt=""
        className={`w-full h-[300px] object-fit object-center rounded-2xl shadow-lg cursor-pointer`}
      />
      <div
        className={`bg-slate-400 bg-opacity-50 p-2 text-xs text-white rounded-lg absolute top-5 left-2  text-center capitalize`}
      >
        {image.tags}
      </div>
    </div>
  ));
}

export default Grid;
