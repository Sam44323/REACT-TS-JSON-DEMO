import ListContainer from "./ListContainer";
import { render } from "@testing-library/react";

test("check for the rendering of loading", () => {
  const { getByText } = render(<ListContainer />);
  expect(getByText("Loading...")).not.toBeNull();
});
