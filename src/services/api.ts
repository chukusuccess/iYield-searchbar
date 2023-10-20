import axios from "axios";
import { BASE_URL } from "./resources";

// creating api instance using axios

/**
 * Axios api instance created with custom configuration.
 *
 * NOTE: a 10second timeout is included in the api config.
 *
 * api is consumed by CountriesService which calls CRUD methods on the api
 *
 * Example - CountriesService can have its own method that calls api.get()
 */
export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
