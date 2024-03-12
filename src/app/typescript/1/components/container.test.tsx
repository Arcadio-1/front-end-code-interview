import { fireEvent, render, screen } from "@testing-library/react";
import { Container } from "./Container";

describe("first solution test", () => {
  test("renders initial state with empty input and result", () => {
    render(<Container />);

    const input = screen.getByPlaceholderText("enter string");
    const resultLabel = screen.getByText("result:");
    const result = screen.getByTestId("result"); // Empty result
    expect(input).toBeDefined();
    expect(resultLabel).toBeDefined();
    expect(result).toBeDefined();
  });

  test("get most frequent character in hello ", () => {
    render(<Container />);
    const input = screen.getByTestId("inputer");
    const firstSolutionButton = screen.getByText(/first solution/i);
    const result = screen.getByTestId("result");

    fireEvent.change(input, { target: { value: "hello" } });
    fireEvent.click(firstSolutionButton);

    expect(result).toHaveTextContent("l");
  });
});
