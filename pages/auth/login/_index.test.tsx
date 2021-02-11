import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import Login from "./index";
import { makeStore } from "app/store";

function Wrapper({ children }) {
  return <Provider store={makeStore()}>{children}</Provider>;
}

describe("Login", function () {
  it("should render login page", function () {
    const { getByText } = render(<Login />, {
      wrapper: Wrapper,
    });

    expect(getByText("Entrar")).toBeVisible();
  });
});
