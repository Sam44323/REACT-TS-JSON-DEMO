import React from "react";
import ReactDOM from "react-dom";
import ListContainer from "./ListContainer";

test("check for the rendering of loading", () => {
  const root = document.createElement("div");
  ReactDOM.render(<ListContainer />, root);
  expect(root.querySelector("div").textContent).toBe("Loading...");
});
