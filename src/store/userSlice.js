import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        name:"",
        id:""
    },
    reducers: {
        userLoggedIn(state, action) {
            state.isLoggedIn = true;
            state.name = action.payload.name;
            state.id = action.payload.id;
        },
        userLoggedOut(state, action) {
            state.isLoggedIn = false;
            state.name = "";
            state.id = "";
        },
    },
})

export const { userLoggedIn, userLoggedOut } = userSlice.actions;

export default userSlice.reducer