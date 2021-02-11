import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ButtonProps } from "./_types";
import Button from "./index";

describe("Button", function () {
  let expectedProps: ButtonProps;

  beforeEach(function () {
    expectedProps = {
      text: "Entrar",
      showSpinner: false,
      type: "submit",
    };
  });

  it("should render text and type", function () {
    const { getByText } = render(<Button {...expectedProps} />);

    expect(getByText(expectedProps.text)).toBeVisible();
    expect(getByText(expectedProps.text)).toHaveTextContent(expectedProps.text);
  });

  it("should render spinner", function () {
    const { container } = render(
      <Button {...expectedProps} showSpinner={true} />
    );

    expect(container.firstChild).not.toHaveTextContent(expectedProps.text);
    expect(container.firstChild).toHaveAttribute("disabled");
  });
});
