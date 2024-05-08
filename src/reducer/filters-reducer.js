const initState = {
    searchText: '',
    category: 'All',
    recommended: 'All',
    color: 'All',
    price: '0,0'
}

const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case "filters/searchText":{
            return {
                ...state,
                searchText: action.payload
            }
        }
        case "filters/recommended":{
            return {
                ...state,
                recommended: action.payload
            }
        }
        case "filters/color":{
            return {
                ...state,
                color: action.payload
            }
        }
        case "filters/category":{
            return {
                ...state,
                category: action.payload
            }
        }
        case "filters/price":{
            return {
                ...state,
                price: action.payload
            }
        }
        default:
            return state
    }
}
export default filterReducer