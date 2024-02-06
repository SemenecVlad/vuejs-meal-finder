import { render } from "@testing-library/vue";
import BackButton from "../BackButton.vue";
import { expect } from "vitest";

test("Should render correctly and be <div>", () => {
  const { getByText } = render(BackButton);

  const button = getByText("Go back");
  expect(button).toBeInstanceOf(HTMLDivElement);
});
