import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import Search from "../";
import { render } from "@testing-library/react";

describe("Exists test", () => {
  beforeEach(() => {});
  test("Search input exists", () => {
    const { getByTestId } = render(<Search />);
    expect(getByTestId("search-button")).toBeInTheDocument();
  });
});
beforeAll();
test("Search exists", () => {});
