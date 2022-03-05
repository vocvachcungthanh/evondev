import axios from "axios";
import React from "react";

const initialState = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
  url: 'https://hn.algolia.com/api/v1/search?query=""',
};
const reducerHackerNews = (state, actions) => {
  let { payload, type } = actions;
  // eslint-disable-next-line default-case
  switch (type) {
    case "SET_LOADING":
      return { ...state, loading: payload };
    case "SET_HITS":
      return { ...state, hits: payload };
    case "SET_ERROR":
      return { ...state, error: payload };

    case "SET_URL":
      return { ...state, url: payload };

    case "SET_QUERY":
      return { ...state, query: payload };
  }
};
const HackerNewsWithReduce = () => {
  const [state, dispatch] = React.useReducer(reducerHackerNews, initialState);
  const { hits, query, loading, errorMessage, url } = state;

  const handleFetchData = React.useRef({});
  handleFetchData.current = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const response = await axios.get(url);

      dispatch({
        type: "SET_HITS",
        payload: response.data?.hits || [],
      });
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    } catch (error) {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      dispatch({
        type: "SET_ERROR",
        payload: `The error happened ${error}`,
      });
    }
  };

  React.useEffect(() => {
    handleFetchData.current();
  }, [url]);

  return (
    <div className="p-5 text-sm  mb-5 text-justify text-gray-700 mx-auto shadow-md w-2/4 mt-5">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-md  transition-all outline-none focus:border-blue-400 focus-visible:border-blue-400"
          defaultValue={query}
          onChange={(e) =>
            dispatch({ type: "SET_QUERY", payload: e.target.value })
          }
          placeholder="Typing your keyword ..."
        />
        <button
          onClick={() =>
            dispatch({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${query}`,
            })
          }
          disabled={loading}
          style={{
            opacity: loading ? "0.25" : "1",
          }}
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
        hits.length > 0 &&
        hits.map((item, index) => {
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
export default HackerNewsWithReduce;
