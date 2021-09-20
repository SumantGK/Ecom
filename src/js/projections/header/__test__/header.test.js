import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import Header from "../";
import { render } from "@testing-library/react";

describe("Exists test", () => {
  beforeEach(() => {
    render(<Header />);
  });
  test("Search input exists", () => {
    expect(screen.getByTestId("search-opt")).toBeInTheDocument();
  });
});
beforeAll();
test("Search exists", () => {});
