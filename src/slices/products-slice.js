import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/**
 * createSlice({
 *  name: '',
 *  initialState: '',
 *  reducers: '',
 *  extraReducers: ''
 * })
 */
const productsSlice = createSlice({
    name: 'productList',
    initialState: {
        loading: 'idle',
        products: []
    },
    reducers: {
        // fetchProductList: (state, action) => {
        //     state = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductListThunkAction.pending, (state, action) => {
                state.loading = 'loading'
            })
            .addCase(fetchProductListThunkAction.fulfilled, (state, action) => {
                state.products = action.payload
                state.loading = 'idle'
            })
    }
})

/**
 * createAsyncThunk => thunk action = {
 *  type: 
 *  payload:
 * }
 * return types 
 *  1. pending
 *  2. fulfilled
 *  3. rejected
 * payloadCreator() => payload
 */
export const fetchProductListThunkAction = createAsyncThunk('productList/fetchProductListThunkAction',
    async () => {
        let res = await fetch('https://jsonserver-vercel-api.vercel.app/products')
        let data = await res.json()
        return data
    }
)

export default productsSlice;