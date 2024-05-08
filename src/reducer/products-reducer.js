const initState = [
    
]

const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case "products/fetchProductList": {
            return [
                ...action.payload
            ]
        }
        default:
            return state
    }
}

export default productsReducer