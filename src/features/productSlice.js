import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("/products/fetcProducts", async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
});

export const deleteProducts = createAsyncThunk("/products/deleteProducts", async (id) => {
    const response = await axios.delete(`https://fakestoreapi.com/products/${id}`);
    return id;
})

export const updatedProducts = createAsyncThunk("/products/updatedProducts", async ({id, updatedProduct}) => {
    const response = await axios.put(`https://fakestoreapi.com/products/${id}`, updatedProduct);
    return response.data;
})

const productSlice = createSlice({
    name: "productData",
    initialState:{
        products: [],
        status: "idle",
        error: null,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state,action) => {
                state.status = "succeeded";
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(deleteProducts.fulfilled, (state,action) => {
                state.products = state.products.filter((product) => product.id !== action.payload);
            })
            .addCase(updatedProducts.fulfilled, (state,action) => {
                state.products = state.products.map((product) => 
                product.id === action.payload.id ? action.payload: product
            );
            })
    }
});

export default productSlice.reducer;