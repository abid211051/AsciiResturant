import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "@/redux/features/categoriesSlice";
import RandomMealReducer from "@/redux/features/mealSlice";
import SearchMealReducer from "@/redux/features/searchSlice";
const store = configureStore({
  reducer: {
    categories: CategoryReducer,
    randomMeal: RandomMealReducer,
    searchMeal: SearchMealReducer,
  },
});

export default store;
