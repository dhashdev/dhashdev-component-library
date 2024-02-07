import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Text from "../Text";

describe("Text", () => {
  it("should render the text content correctly", () => {
    render(<Text>Hello World</Text>);
    const textElement = screen.getByText("Hello World");
    expect(textElement).toBeInTheDocument();
  });

  it("should apply custom font size", () => {
    render(<Text fontSize="20px">Custom Font Size Text</Text>);
    const textElement = screen.getByText("Custom Font Size Text");
    expect(textElement).toHaveStyle({ fontSize: "20px" });
  });

  it("should apply custom font style", () => {
    render(<Text fontStyle="italic">Italic Text</Text>);
    const textElement = screen.getByText("Italic Text");
    expect(textElement).toHaveStyle({ fontStyle: "italic" });
  });

  it("should apply custom font weight", () => {
    render(<Text fontWeight="bold">Bold Text</Text>);
    const textElement = screen.getByText("Bold Text");
    expect(textElement).toHaveStyle({ fontWeight: "bold" });
  });

  it("should apply custom color", () => {
    render(<Text color="red">Red Text</Text>);
    const textElement = screen.getByText("Red Text");
    expect(textElement).toHaveStyle({ color: "rgb(255, 0, 0)" });
  });
});
