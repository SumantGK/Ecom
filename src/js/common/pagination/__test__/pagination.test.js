import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Pagination from "../";
import { CartItems } from "../../../projections/cart/cartItems";
import "@testing-library/jest-dom/extend-expect";

test("Previous button text should be Prev", () => {
  render(
    <Pagination
      data={[{ id: 1, name: "abc", price: 100.0, discount: 10 }]}
      RenderComponent={CartItems}
      limit={5}
    />
  );
  // const prevBtn = getByTestId("Hello");
  expect(screen.getByText(/Hello/)).toBeInTheDocument();
});
// test("Next button text should be Next", () => {
//   const { getByTestId } = render(<Pagination />);
//   const nextBtn = getByTestId("next-btn");
//   expect(nextBtn.textContent).toBe("Next");
// });
