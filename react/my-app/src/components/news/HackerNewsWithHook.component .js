import React from "react";
import useHackerNewsApi from "../../hooks/useHackerNewApi";
const HackerNewsWithHook = () => {
  let url = "https://hn.algolia.com/api/v1/search?query=";

  const { query, setQuery, setUrl, loading, errorMessage, data } =
    useHackerNewsApi(url, { hist: [] });
  return (
    <div className="p-5 text-sm  mb-5 text-justify text-gray-700 mx-auto shadow-md w-2/4 mt-5">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-md  transition-all outline-none focus:border-blue-400 focus-visible:border-blue-400"
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Typing your keyword ..."
        />
        <button
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
          className="bg-blue-500 text-white font-semibold p-5 rounded-md"
        >
          Fetching
        </button>
      </div>
      {!loading && errorMessage && (
        <p className="p-2 text-white mb-0 bg-[red] rounded-lg">
          {errorMessage}
        </p>
      )}
      {loading && (
        <div className="loading mx-auto w-8 h-8 rounded-full border-blue-500 border-4 border-5-4 border-r-transparent animate-spin my-10"></div>
      )}
      {!loading &&
        data?.hits.length > 0 &&
        data?.hits.map((item, index) => {
          if (item.title) {
            return (
              <h3 key={index} className="p-3 bg-gray-200 rounded-lg mb-2">
                {item.title}
              </h3>
            );
          }
        })}
    </div>
  );
};
export default HackerNewsWithHook;
