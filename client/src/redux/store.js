import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage/session";
import ItemReducer from "./slices/ItemSlice";
import HotelReducer from "./slices/HotelSlice";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
const reducers = combineReducers({
  items: ItemReducer,
  hotels: HotelReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

let persistor = persistStore(store);
export default store;
export { persistor };
