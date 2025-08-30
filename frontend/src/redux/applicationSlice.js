import { createSlice } from "@reduxjs/toolkit";
const applicationSlice = createSlice({
    name:'application',
    initialState:{
        applicants:[],
    },
    reducers:{
        setAllApplcants:(state, action) => {
            state.applicants = action.payload;
        }
    }
});

export const {setAllApplcants} = applicationSlice.actions;
export default applicationSlice.reducer;