import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        orderId: uuid(),
        orderInfo: {
            subtotal: 0,
            shippingFee: 0,
            total: 0,
            orderDate: Date.now() //timestamp
        },
        orderDetails: []
    },
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload);
            /**
             * Bước 1: kiểm tra sản phẩm đã có trong giỏ chưa
             * Bước 2: nếu chưa => thêm mới 1 sản phẩm vào giỏ => bước 4
             * Bước 3: nếu đã tồn tại => cập số lượng => tính lại thành tiền (amount) => bước 4
             * Bước 4: tính lại tổng tiền (subtotal)
             */
            let cartItem = state.orderDetails?.find((item) => item?.id === action.payload.id)
            //sản phẩm đã tồn tại
            if(cartItem?.id) {
                cartItem.quantity = Number(cartItem.quantity) + 1
                cartItem.amount = Number(cartItem.quantity) * Number(cartItem.newPrice)
            }
            //sản phẩm chưa tồn tại
            else {
                state.orderDetails?.push({
                    ...action.payload,
                    quantity: 1,
                    amount: Number(action.payload.newPrice)
                })
            }
            //tính toán lại subtotal và total
            let subtotal = 0;
            for(let item of state.orderDetails) {
                subtotal += Number(item.amount)
            }
            state.orderInfo.subtotal = subtotal
            state.orderInfo.total = subtotal + state.orderInfo?.shippingFee
        },
        removeCartItem: (state, action) => {
            state.orderDetails = state.orderDetails?.filter(item => item.id != action.payload.id)

            let subtotal = 0;
            for(let item of state.orderDetails) {
                subtotal += Number(item.amount)
            }
            state.orderInfo.subtotal = subtotal
            state.orderInfo.total = subtotal + state.orderInfo?.shippingFee
        }
    }
})

export default cartSlice