import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Text from "./index";

describe("Text", function () {
  it("should render text title", function () {
    const { getByText } = render(<Text.Title children="Testing" />);

    expect(getByText("Testing")).toBeVisible();
    expect(getByText("Testing")).toContainHTML("h1");
  });

  it("should render text subtitle", function () {
    const { getByText } = render(<Text.Subtitle children="Testing" />);

    expect(getByText("Testing")).toBeVisible();
    expect(getByText("Testing")).toContainHTML("h2");
  });
});
