import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../../apollo";
import { GET_HOTELS } from "../../services/queries";

const initialState = {
  hotels: [],
  isLoading: false,
  isError: false,
};

export const fetchHotels = createAsyncThunk("hotel", async () => {
  const response = await client.query({
    query: GET_HOTELS,
  });
  return response.data.hotels;
});

export const HotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHotels.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchHotels.fulfilled, (state, action) => {
      state.hotels = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(fetchHotels.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default HotelSlice.reducer;

export const getHotels = (state) => {
  return state.hotels;
};
