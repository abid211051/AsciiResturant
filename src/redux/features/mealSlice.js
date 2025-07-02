import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export const fetchRandomMeal = createAsyncThunk("fetch/random", async () => {
  const chr = letters[Math.ceil(Math.random() * 51)];
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${chr}`
  );
  return await res.json();
});

const randomMeal = createSlice({
  name: "randomMeal",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomMeal.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRandomMeal.fulfilled, (state, action) => {
        const filterdData = action.payload?.meals
          ? action.payload?.meals?.map((it) => ({
              id: it?.idMeal,
              title: it?.strMeal,
              area: it?.strArea,
              img: it?.strMealThumb,
            }))
          : [];
        state.isLoading = false;
        state.data = filterdData;
      })
      .addCase(fetchRandomMeal.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default randomMeal.reducer;
