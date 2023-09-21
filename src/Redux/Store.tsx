import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./Features/Auth-Slice";
// import errorSlice from "./Features/Error-Slice";
// import dashSlice from "./Features/dashboard-slice";

// Configure Store Here
const Store = configureStore({
  reducer: {
    // Auth: authSlice.reducer,
    // ErrorReducer: errorSlice.reducer,
    // DashReducer: dashSlice.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
