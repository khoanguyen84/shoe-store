export function setSearchTextAction(payload) {
    return {
        type: 'filters/searchText',
        payload: payload
    }
}

export function setRecommendedAction(payload) {
    return {
        type: 'filters/recommended',
        payload: payload
    }
}

export function setCategoryAction(payload) {
    return {
        type: 'filters/category',
        payload: payload
    }
}

export function setColorAction(payload) {
    return {
        type: 'filters/color',
        payload: payload
    }
}

export function setPriceAction(payload) {
    return {
        type: 'filters/price',
        payload: payload
    }
}