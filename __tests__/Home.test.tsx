import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import HomePage, { HOME_TEST_ID } from "@/app/page";
import { mockData } from "@/dummyData";
import { ICountry } from "@/types/countriesData.type";

describe("Home page", () => {
  it("renders Home page", async () => {
    render(<HomePage />);
    const Container = screen.getByTestId(HOME_TEST_ID);
    expect(Container).toBeInTheDocument(); // HomePage is rendered
  });

  test("case-sensitive country name search", async () => {
    render(<HomePage />);
    const userInput = "Sweden";
    let results: ICountry[] = [];

    const handleSearch = (word: string) => {
      const input: string = word;
      const containsUppercase: Boolean = /[A-Z]/.test(input);
      const firstLetterUppercase: Boolean = /[A-Z]/.test(input[0]);
      const secondLetterUppercase: Boolean = /[A-Z]/.test(input[1]);

      const filterCountryCode = () => {
        const filteredCountries: ICountry[] = mockData!.filter((country) => {
          const searchString: string =
            firstLetterUppercase && secondLetterUppercase ? input : input.toUpperCase();
          return country.cca2.includes(searchString);
        });

        results = filteredCountries;
      };

      const filterCountryName = () => {
        const filteredCountries: ICountry[] = mockData!.filter((country) => {
          const searchString: string =
            firstLetterUppercase && !secondLetterUppercase ? input : input;
          return country.name.common.includes(searchString);
        });

        results = filteredCountries;
      };

      if (firstLetterUppercase && secondLetterUppercase) {
        filterCountryCode();
        return;
      } else if (firstLetterUppercase && !secondLetterUppercase) {
        filterCountryName();
        return;
      } else {
        const filteredCountries: ICountry[] = mockData!.filter((country) => {
          const searchString: string = containsUppercase ? input : input.toLowerCase();
          return country.name.common.toLowerCase().includes(searchString);
        });
        results = filteredCountries;
        return;
      }
    };

    handleSearch(userInput);
    expect(results[0]?.name?.common).toBe("Sweden"); // returned country should be Sweden
  });

  test("case-sensitive country code search", async () => {
    render(<HomePage />);
    const userInput = "SE";
    let results: ICountry[] = [];

    const handleSearch = (word: string) => {
      const input: string = word;
      const containsUppercase: Boolean = /[A-Z]/.test(input);
      const firstLetterUppercase: Boolean = /[A-Z]/.test(input[0]);
      const secondLetterUppercase: Boolean = /[A-Z]/.test(input[1]);

      const filterCountryCode = () => {
        const filteredCountries: ICountry[] = mockData!.filter((country) => {
          const searchString: string =
            firstLetterUppercase && secondLetterUppercase ? input : input.toUpperCase();
          return country.cca2.includes(searchString);
        });

        results = filteredCountries;
      };

      const filterCountryName = () => {
        const filteredCountries: ICountry[] = mockData!.filter((country) => {
          const searchString: string =
            firstLetterUppercase && !secondLetterUppercase ? input : input;
          return country.name.common.includes(searchString);
        });

        results = filteredCountries;
      };

      if (firstLetterUppercase && secondLetterUppercase) {
        filterCountryCode();
        return;
      } else if (firstLetterUppercase && !secondLetterUppercase) {
        filterCountryName();
        return;
      } else {
        const filteredCountries: ICountry[] = mockData!.filter((country) => {
          const searchString: string = containsUppercase ? input : input.toLowerCase();
          return country.name.common.toLowerCase().includes(searchString);
        });
        results = filteredCountries;
        return;
      }
    };

    handleSearch(userInput);
    expect(results[0]?.name?.common).toBe("Sweden"); // returned country should be Sweden
    expect(results[0]?.cca2).toBe("SE"); // returned country code should be SE
  });

  test("case-insensitive country name search", async () => {
    render(<HomePage />);
    const userInput = "sweden";
    let results: ICountry[] = [];

    const handleSearch = (word: string) => {
      const input: string = word;
      const containsUppercase: Boolean = /[A-Z]/.test(input);
      const firstLetterUppercase: Boolean = /[A-Z]/.test(input[0]);
      const secondLetterUppercase: Boolean = /[A-Z]/.test(input[1]);

      const filterCountryCode = () => {
        const filteredCountries: ICountry[] = mockData!.filter((country) => {
          const searchString: string =
            firstLetterUppercase && secondLetterUppercase ? input : input.toUpperCase();
          return country.cca2.includes(searchString);
        });

        results = filteredCountries;
      };

      const filterCountryName = () => {
        const filteredCountries: ICountry[] = mockData!.filter((country) => {
          const searchString: string =
            firstLetterUppercase && !secondLetterUppercase ? input : input;
          return country.name.common.includes(searchString);
        });

        results = filteredCountries;
      };

      if (firstLetterUppercase && secondLetterUppercase) {
        filterCountryCode();
        return;
      } else if (firstLetterUppercase && !secondLetterUppercase) {
        filterCountryName();
        return;
      } else {
        const filteredCountries: ICountry[] = mockData!.filter((country) => {
          const searchString: string = containsUppercase ? input : input.toLowerCase();
          return country.name.common.toLowerCase().includes(searchString);
        });
        results = filteredCountries;
        return;
      }
    };

    handleSearch(userInput);
    expect(results[0]?.name?.common).toBe("Sweden"); // returned country should be Sweden
  });
});
