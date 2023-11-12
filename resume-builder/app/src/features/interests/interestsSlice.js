// Task 14: Add your solution here
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    interests: [],
};

const interestsSlice = createSlice({
    name: "interests",
    initialState,
    reducers: {
        // reducer code here
        saveInterest: (state, { payload }) => {
            state.interests = payload.interests;
        },
    },
});
export const { saveInterest } = interestsSlice.actions;

export default interestsSlice.reducer;