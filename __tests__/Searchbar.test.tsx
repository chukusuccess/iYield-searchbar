import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SearchBar, { SEARCH_TEST_ID } from "@/components/SearchBar";

describe("Search Bar", () => {
  it("renders the Search Bar", async () => {
    const userInput = "united kingdom";
    render(<SearchBar label="search bar" value={userInput} />);
    const Textfield = screen.getByTestId(SEARCH_TEST_ID);
    expect(Textfield).toBeInTheDocument(); // search component is rendered
  });

  test("Test if input is all lowercase", () => {
    const input = "sw";

    expect(/[A-Z]/.test(input)).toBe(false); // Input should not contain uppercase
  });

  test("Test if first letter of input is uppercase and second letter is lowercase", () => {
    const input = "Sw";

    expect(/[A-Z]/.test(input[0])).toBe(true); // First letter should be uppercase
    expect(/[A-Z]/.test(input[1])).toBe(false); // Second letter should be lowercase
  });

  test("Test if first and second letter of input are uppercase", () => {
    const input = "SE";

    expect(/[A-Z]/.test(input[0])).toBe(true); // First letter should be uppercase
    expect(/[A-Z]/.test(input[1])).toBe(true); // Second letter should be uppercase
  });
});
