import { createSlice, createSelector } from "@reduxjs/toolkit";


let initialState = {
    currentUser: {},
}

const userSlice = createSlice({
    name: "currentUser",
    initialState: initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        }
    }

});

export const getUserSelector = createSelector(
    (state) => state.currentUser,
    (state) => state
);

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;