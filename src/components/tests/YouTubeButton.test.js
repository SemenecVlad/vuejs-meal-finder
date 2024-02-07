import { mount } from "@vue/test-utils";
import { YouTubeButton } from "@components";

test("renders YouTubeButton with correct href and slot content", () => {
  const href = "http://youtube.com/test";
  const slotContent = "Youtube";

  const wrapper = mount(YouTubeButton, {
    props: {
      href,
    },
    slots: {
      default: slotContent,
    },
  });

  // Check if the a tag is present
  const aTag = wrapper.find("a");
  expect(aTag.exists()).toBe(true);

  // Check if the a tag has the correct href
  expect(aTag.attributes("href")).toBe(href);

  // Check if the a tag has the correct slot content
  expect(aTag.text()).toBe(slotContent);
});
