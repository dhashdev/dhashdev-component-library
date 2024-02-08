// Card/__test__/Card.test.tsx
import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Card from "../Card";

describe("Card component", () => {
  it("should render correctly with default variant", () => {
    render(<Card />);
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
  });

  it("should render heading correctly", () => {
    const headingText = "Test Heading";
    render(<Card heading={headingText} />);
    const headingElement = screen.getByText(headingText);
    expect(headingElement).toBeInTheDocument();
  });

  it("should render description correctly", () => {
    const descriptionText = "Test Description";
    render(<Card description={descriptionText} />);
    const descriptionElement = screen.getByText(descriptionText);
    expect(descriptionElement).toBeInTheDocument();
  });

  it("should render image correctly", () => {
    const imageUrl = "test-image.jpg";
    render(<Card variant="image" imageUrl={{ url: imageUrl }} />);
    const imageElement = screen.getByAltText("card image");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute("src")).toBe(imageUrl);
  });

  it("should render footer correctly", () => {
    const footerText = "Test Footer";
    render(<Card variant="footer" footer={footerText} />);
    const footerElement = screen.getByText(footerText);
    expect(footerElement).toBeInTheDocument();
  });
});
