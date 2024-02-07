import { mount } from "@vue/test-utils";
import { MealItem, YouTubeButton } from "@components";

test("renders meal details", () => {
  const meal = {
    idMeal: "123",
    strMeal: "Test Meal",
    strMealThumb: "http://example.com/test.jpg",
    strYoutube: "http://youtube.com/test",
    strSource: "http://example.com/source",
  };

  const wrapper = mount(MealItem, {
    props: {
      meal,
    },
  });

  expect(wrapper.find("h3").text()).toBe(meal.strMeal);
  expect(wrapper.find("img").attributes("src")).toBe(meal.strMealThumb);
  expect(wrapper.find("img").attributes("alt")).toBe(meal.strMeal);

  // Check the YouTube button
  expect(wrapper.findComponent(YouTubeButton).props("href")).toBe(
    meal.strYoutube
  );

  // Check the source link
  const aTags = wrapper.findAll("a");
  expect(aTags[1].attributes("href")).toBe(meal.strSource);
});
