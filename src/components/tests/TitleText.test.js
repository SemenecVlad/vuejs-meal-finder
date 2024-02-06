import { mount } from "@vue/test-utils";
import TitleText from "../TitleText.vue";
import { expect } from "vitest";

test("Renders slot content inside TextTitle", () => {
  const slotContent = "Hello, World!";
  const wrapper = mount(TitleText, {
    slots: {
      default: slotContent,
    },
  });

  expect(wrapper.html()).toContain(slotContent);
});
