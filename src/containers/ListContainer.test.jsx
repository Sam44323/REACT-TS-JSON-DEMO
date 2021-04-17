import ReactDOM from "react-dom";
import ListContainer from "./ListContainer";
import { getQueriesForElement } from "@testing-library/react";

test("check for the rendering of loading", () => {
  const root = document.createElement("div");
  ReactDOM.render(<ListContainer />, root);

  const { getByText } = getQueriesForElement(root);
  expect(getByText("Loading...")).not.toBeNull();
});
