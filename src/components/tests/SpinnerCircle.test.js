import { mount } from "@vue/test-utils";
import { SpinnerCircle } from "@components";

test("renders spinner circle", () => {
  const wrapper = mount(SpinnerCircle);

  // Check if the root div has the correct role
  expect(wrapper.attributes("role")).toBe("status");

  // Check if the svg element is present
  const svg = wrapper.find("svg");
  expect(svg.exists()).toBe(true);

  // Check if the svg has the correct classes
  expect(svg.classes()).toEqual(
    expect.arrayContaining([
      "inline",
      "w-8",
      "h-8",
      "text-gray-200",
      "animate-spin",
      "dark:text-gray-200",
      "fill-yellow-400",
    ])
  );

  // Check if the svg has the correct attributes
  expect(svg.attributes("viewBox")).toBe("0 0 100 101");
  expect(svg.attributes("fill")).toBe("none");

  // Check if the paths are present
  const paths = wrapper.findAll("path");
  expect(paths.length).toBe(2);
});
