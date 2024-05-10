import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../slices/products-slice";
import filtersSlice from "../slices/filters-slice";

const store = configureStore({
    reducer: {
        productList: productsSlice.reducer,
        filters: filtersSlice.reducer
    }
})

export default store;