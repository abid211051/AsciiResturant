import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "@/redux/features/categoriesSlice";
import RandomMealReducer from "@/redux/features/mealSlice";
const store = configureStore({
  reducer: {
    categories: CategoryReducer,
    randomMeal: RandomMealReducer,
  },
});

export default store;
