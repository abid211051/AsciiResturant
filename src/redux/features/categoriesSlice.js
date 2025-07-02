import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  categorydata: [],
  error: null,
};

export const fetchCategories = createAsyncThunk(
  "fetch/categories",
  async () => {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    return await res.json();
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        const filteredCategories = action.payload?.categories
          ? action.payload?.categories?.map((it) => ({
              id: it?.idCategory,
              title: it?.strCategory,
              img: it?.strCategoryThumb,
            }))
          : [];
        state.isLoading = false;
        state.categorydata = filteredCategories;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
