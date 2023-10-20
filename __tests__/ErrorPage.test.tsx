import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ErrorPage, { ERROR_PAGE_TEST_ID } from "@/components/Error";

describe("Error Page", () => {
  it("renders Error page", async () => {
    render(<ErrorPage error="an error occured" />);
    const Container = screen.getByTestId(ERROR_PAGE_TEST_ID);
    expect(Container).toBeInTheDocument(); // error page is rendered
  });
});
