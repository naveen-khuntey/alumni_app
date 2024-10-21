import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint,query) => {
  const [data,setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {...query},
    headers: {
      'x-rapidapi-key': 'd088076737msh00f542e79971d25p150cabjsn3a17f718cf1b',
      'x-rapidapi-host': 'jsearch.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("Something went wrong");
    }
    finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }
  return {data,isLoading,error,refetch};
}
export {useFetch};