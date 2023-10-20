import { api } from "./api";
import { endPoints } from "./resources";
import { ICountry } from "@/types/countriesData.type";

/**
 *
 * CountriesService class abstracts methods for making api requests
 */
export class CountriesService {
  /**
   * getAllCountries method gets all countries
   * @param none - takes in no params
   * @returns Promise<any> - returns a promise with the response data as a list of all countries
   */
  static async getAllCountries() {
    const data = await api.get(endPoints.allCountries);
    return data;
  }

  /**
   * getIndependentCountries method gets all independent countries
   * @param none - takes in no params
   * @returns Promise<any> - returns a promise with the response data as a list of all independent countries
   */
  static async getIndependentCountries(): Promise<ICountry[]> {
    const { data } = await api.get<ICountry[]>(endPoints.independentCountries);
    return data;
  }
}
