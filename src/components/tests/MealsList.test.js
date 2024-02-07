import { mount } from "@vue/test-utils";
import { MealsList, MealItem } from "@components";

test("renders meals list", () => {
  const meals = [
    { idMeal: "1", strMeal: "Meal 1" },
    { idMeal: "2", strMeal: "Meal 2" },
    { idMeal: "3", strMeal: "Meal 3" },
  ];

  const wrapper = mount(MealsList, {
    props: {
      meals,
    },
  });

  // Check if the correct number of MealItem components are rendered
  const mealItems = wrapper.findAllComponents(MealItem);
  expect(mealItems.length).toBe(meals.length);

  // Check if each MealItem component has the correct meal prop
  meals.forEach((meal, index) => {
    expect(mealItems[index].props("meal")).toStrictEqual(meal);
  });
});

test("renders no meals message when meals list is empty", () => {
  const wrapper = mount(MealsList, {
    props: {
      meals: [],
    },
  });

  // Check if the no meals message is rendered
  expect(wrapper.text()).toContain("There is no meals");
});
