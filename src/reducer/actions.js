export function setSearchTextAction(payload) {
    return {
        type: 'filters/searchText',
        payload: payload
    }
}

export function setRecommendedAction(payload) {
    return {
        type: 'filters/recommended',
        payload
    }
}

export function setCategoryAction(payload) {
    return {
        type: 'filters/category',
        payload
    }
}
export function setColorAction(payload) {
    return {
        type: 'filters/color',
        payload
    }
}
export function setPriceAction(payload) {
    return {
        type: 'filters/price',
        payload
    }
}

export function fetchProductListAction(payload){
    return {
        type: 'products/fetchProductList',
        payload
    }
}