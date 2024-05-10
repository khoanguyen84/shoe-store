import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        searchText: '',
        recommended: 'All',
        category: 'All',
        color: 'All',
        price: '0,0'
    },
    reducers: {
        /**
         * action creator => type: filters/setSearchText
         */
        setSearchText: (state, action) => {
            // return {
            //     ...state,
            //     searchText: action.payload
            // }

            // IMMER
            state.searchText = action.payload
        },
        setRecommended: (state, action) => {
            state.recommended = action.payload
        },
        setCategory: (state, action) => {
            state.category = action.payload
        },
        setColor: (state, action) => {
            state.color = action.payload
        },
        setPrice: (state, action) => {
            state.price = action.payload
        }
    }
})

export default filtersSlice

/**
 * IMMUTATION = bất biến
 * MUTATION = biến đổi
 */