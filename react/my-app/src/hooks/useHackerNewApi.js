import axios from "axios";
import React from "react";
export default function useHackerNewsApi(initialUrl, initialData) {
  const [data, setData] = React.useState(initialData);
  const [query, setQuery] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [url, setUrl] = React.useState(initialUrl);
  const isMounted = React.useRef(true);
  React.useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  const handleFetchData = React.useRef({});
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      if (isMounted.current) {
        setData(response.data || []);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error happened ${error}`);
    }
  };

  React.useEffect(() => {
    handleFetchData.current();
  }, [url]);
  return {
    data,
    query,
    loading,
    errorMessage,
    setUrl,
    setQuery,
  };
}
