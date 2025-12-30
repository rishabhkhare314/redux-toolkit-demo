import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    loader: false,
    error: null,
    results: [],
    activeTab: "Images",
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
    setTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setQuery, setLoader, setError, setResults , setTab} =
  searchSlice.actions;
export default searchSlice.reducer;
