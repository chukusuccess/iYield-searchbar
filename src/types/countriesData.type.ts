// relevant data type for countries list

/**
 * ICountry contains ONLY the relevant field types to be used by the search page
 */
export type ICountry = {
  name: {
    common: string; // common name e.g America
    official?: string; // official name e.g United States of America
  };
  cca2: string; // country code, e.g USA
  flags: {
    png: string; // remote src link for flag image (png)
    svg: string; // remote src link for flag image (svg)
    alt: string; // alternate text for flag image
  };
};

// full data type for countries list.
export type ICountryFullData = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  latlng: [number, number];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: {
    [key: string]: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: {
    [key: string]: number;
  };
  fifa: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: [number, number];
  };
  postalCode: {
    format: string;
    regex: string;
  };
};
