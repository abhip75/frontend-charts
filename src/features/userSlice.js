import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
    const response = await axios.get("https://fakestoreapi.com/users");
    return response.data;
});

export const deleteUsers = createAsyncThunk("/user/deleteUser", async (id) => {
    const response= await axios.get(`https://fakestoreapi.com/users/${id}`);
    return id;
})

const userSlice = createSlice({
    name: "userData",
    initialState: {
        users: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.users = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(deleteUsers.fulfilled, (state,action) => {
                state.users = state.users.filter((user) => user.id !== action.payload)
            })
    },
});

export default userSlice.reducer;
