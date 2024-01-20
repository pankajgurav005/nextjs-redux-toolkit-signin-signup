const { configureStore } = require("@reduxjs/toolkit");
import reducer from "../redux/slice";

export const stores = configureStore({
  reducer
});