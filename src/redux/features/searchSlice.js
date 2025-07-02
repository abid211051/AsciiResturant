import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  meals: {
    isLoading: false,
    mealsdata: [],
    error: null,
  },
  ingredient: {
    isLoading: false,
    ingredientdata: [],
    error: null,
  },
};

export const fetchIngredientsList = createAsyncThunk(
  "fetch/ingredientslist",
  async () => {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
    );
    return await res.json();
  }
);

export const fecthSearchedMeal = createAsyncThunk(
  "fetch/searchedMeals",
  async (query) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    return await res.json();
  }
);

export const fetchFilteredOnIngre = createAsyncThunk(
  "fetch/filteredDataOnIngre",
  async (val) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${val}`
    );
    return await res.json();
  }
);

export const fetchFilteredOnCateg = createAsyncThunk(
  "fetch/filteredDataOnCateg",
  async (val) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${val}`
    );
    return await res.json();
  }
);

const searchMeal = createSlice({
  name: "searchModle",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fecthSearchedMeal.pending, (state) => {
        state.meals.isLoading = true;
        state.meals.error = null;
      })
      .addCase(fecthSearchedMeal.fulfilled, (state, action) => {
        const filterdData = action.payload?.meals
          ? action.payload?.meals?.map((it) => ({
              id: it?.idMeal,
              title: it?.strMeal,
              img: it?.strMealThumb,
            }))
          : [];
        state.meals.isLoading = false;
        state.meals.mealsdata = filterdData;
      })
      .addCase(fecthSearchedMeal.rejected, (state, action) => {
        state.meals.isLoading = false;
        state.meals.error = action.error.message;
      })
      .addCase(fetchIngredientsList.pending, (state) => {
        state.ingredient.isLoading = true;
        state.ingredient.error = null;
      })
      .addCase(fetchIngredientsList.fulfilled, (state, action) => {
        const filterdData = action.payload?.meals
          ? action.payload?.meals?.map((it) => ({
              id: it?.idIngredient,
              title: it?.strIngredient,
            }))
          : [];
        state.ingredient.isLoading = false;
        state.ingredient.ingredientdata = filterdData;
      })
      .addCase(fetchIngredientsList.rejected, (state, action) => {
        state.ingredient.isLoading = false;
        state.ingredient.error = action.error.message;
      })

      .addCase(fetchFilteredOnIngre.pending, (state) => {
        state.meals.isLoading = true;
        state.meals.error = null;
      })
      .addCase(fetchFilteredOnIngre.fulfilled, (state, action) => {
        const filterdData = action.payload?.meals
          ? action.payload?.meals?.map((it) => ({
              id: it?.idMeal,
              title: it?.strMeal,
              img: it?.strMealThumb,
            }))
          : [];
        state.meals.isLoading = false;
        state.meals.mealsdata = filterdData;
      })
      .addCase(fetchFilteredOnIngre.rejected, (state, action) => {
        state.meals.isLoading = false;
        state.meals.error = action.error.message;
      })
      .addCase(fetchFilteredOnCateg.pending, (state) => {
        state.meals.isLoading = true;
        state.meals.error = null;
      })
      .addCase(fetchFilteredOnCateg.fulfilled, (state, action) => {
        const filterdData = action.payload?.meals
          ? action.payload?.meals?.map((it) => ({
              id: it?.idMeal,
              title: it?.strMeal,
              img: it?.strMealThumb,
            }))
          : [];
        state.meals.isLoading = false;
        state.meals.mealsdata = filterdData;
      })
      .addCase(fetchFilteredOnCateg.rejected, (state, action) => {
        state.meals.isLoading = false;
        state.meals.error = action.error.message;
      });
  },
});

export default searchMeal.reducer;
