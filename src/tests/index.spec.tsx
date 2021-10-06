import React from "react";
import Home from "pages";
import { render } from "@testing-library/react";

describe("Home page", () => {
  it("should render the Home component", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
