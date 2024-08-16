import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/userSlice";
import reportsReducer from "../Slices/reportSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        reports: reportsReducer,
    },
    devTools: true
});