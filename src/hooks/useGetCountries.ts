import { useCallback, useEffect, useState } from "react";
import { CountriesService } from "@/services/countries.service";
import { ICountry } from "@/types/countriesData.type";

// custom hook to handle fetching of countries[] list

/**
 * function signature is first expressed
 * @returns an array containing a stateful Object: {data, loading, error}, and a function fetchCountries() to update it.
 *
 */
export const useGetCountries = (): [
  {
    data: ICountry[] | undefined;
    loading: boolean;
    error: any;
  },
  () => Promise<void>,
] => {
  const [data, setData] = useState<ICountry[]>(); // holds countries list data
  const [loading, setLoading] = useState<boolean>(true); // holds api loading state
  const [error, setError] = useState<any>(null); // holds error, if any.

  // function to fetch countries data
  const fetchCountries = useCallback(async () => {
    try {
      const result = await CountriesService.getIndependentCountries();
      setData(result);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [setData, setError, setLoading]);

  // useEffect ensures a fetch attempt is made as soon as the page renders
  useEffect(() => {
    const getData = async () => {
      await fetchCountries();
    };
    getData();
  }, [fetchCountries]);

  return [{ data, loading, error }, fetchCountries];
};
