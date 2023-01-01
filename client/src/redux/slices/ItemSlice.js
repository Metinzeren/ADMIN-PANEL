import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../../apollo";
import { ADD_ITEM, DELETE_ITEM, ITEM_QUERY } from "../../services/queries";

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
  isDel: [],
  additem: {},
};

export const fetchItemSub = createAsyncThunk("itemsSub", async () => {
  const response = await client.query({
    query: ITEM_QUERY,
  });
  return response.data;
});

export const deteleItem = createAsyncThunk("deleteItem", async (id) => {
  const response = await client.mutate({
    mutation: DELETE_ITEM,
    variables: { id },
  });
  return response.data;
});

export const addItem = createAsyncThunk("addItem", async (itemler) => {
  const response = await client.mutate({
    mutation: ADD_ITEM,
    variables: {
      data: itemler,
    },
  });
  return response.data;
});

export const ItemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItemSub.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchItemSub.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(deteleItem.fulfilled, (state, action) => {
      state.isDel = action.payload;
      const check = state.items.items.filter(
        (y) => y.id !== action.payload.delete_items_by_pk.id
      );
      state.items.items = check;
    });
    builder.addCase(addItem.fulfilled, (state, action) => {
      state.additem = action.payload;
      state.items.items = [
        ...state.items.items,
        action.payload.insert_items_one,
      ];
    });
    builder.addCase(fetchItemSub.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default ItemSlice.reducer;

export const getItems = (state) => {
  return state.items;
};
