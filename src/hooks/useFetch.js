import { useEffect, useState } from "react";


export function useFetch(fetchFn, initialValue) {
    const [fetchedData, setFetchedData] = useState(initialValue);
    const [isFetching, setIsFetching] = useState(false);
    const [errorFetching, setErrorFetching] = useState();
    
    useEffect(() => {
        async function fetchPlaces() {
          setIsFetching(true);
          try {
            const places = await fetchFn();
            setFetchedData(places);
          } catch (error) {
            setErrorFetching({ message: error.message || 'Failed to fetch data.' });
          }
    
          setIsFetching(false);
        }
    
        fetchPlaces();
      }, []);

      return {
        fetchedData,
        isFetching,
        errorFetching,
        setFetchedData
      }
}