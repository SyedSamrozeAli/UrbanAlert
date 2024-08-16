import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    allReports: [],
    currentUserReports: [],
}

const reportSlice = createSlice({
    name: "reports",
    initialState: initialState,
    reducers: {
        setAllReports: (state, action) => {
            state.allReports = action.payload;
        },
        setCurrentUserReports: (state, action) => {
            state.currentUserReports = [...state.currentUserReports, ...action.payload];
        }
    }
});

export const { setAllReports, setCurrentUserReports } = reportSlice.actions;
export default reportSlice.reducer;