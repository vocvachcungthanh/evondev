import axios from "axios";
import React from "react";

const getRandomPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
function Photos() {
  const [randomPhotos, setRandomPhotos] = React.useState([]);

  const [nextPage, setNextPage] = React.useState(1);
  const handleLoadMore = React.useRef({});
  handleLoadMore.current = async () => {
    const images = await getRandomPhotos(nextPage);
    setRandomPhotos((prev) => [...prev, ...images]);
    setNextPage((prev) => prev + 1);
  };

  React.useEffect(() => {
    handleLoadMore.current();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => (
            <div key={index} className="p-3 bg-white shadow-md rounded-lg">
              <img
                src={item.download_url}
                alt={item.author}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
      <div className="text-center mb-8">
        <button
          onClick={handleLoadMore.current}
          className="inline- px-8 py-4 bg-blue-600 text-white rounded-full"
        >
          Load more
        </button>
      </div>
    </div>
  );
}

export default Photos;
