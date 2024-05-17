import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        loading: 'idle',
        orderList: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrderListThunkAction.pending, (state, action) => {
                state.loading = 'loading'
            })
            .addCase(fetchOrderListThunkAction.fulfilled, (state, action) => {
                state.loading = 'idle'
                state.orderList = action.payload
            })
    }
})

export const fetchOrderListThunkAction = createAsyncThunk('order/fetchOrderListThunkAction',
    async () => {
        let res = await fetch('https://jsonserver-vercel-api.vercel.app/orderList?_sort=id&_order=desc')
        let payload = await res.json()
        console.log(payload);
        return payload
    }
)

export default orderSlice