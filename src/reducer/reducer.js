/**
 * action = {
 *  type: phân loại,
 *  payload: dữ liệu
 * }
 */
export const initState = {
    productList: [
        // {
        //     "img": "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
        //     "title": "Nike Air Monarch IV",
        //     "star": 3,
        //     "reviews": 123,
        //     "prevPrice": "140",
        //     "newPrice": "200",
        //     "company": "Nike",
        //     "color": "White",
        //     "category": "Sneakers",
        //     "id": 1
        // },
        // {
        //     "img": "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
        //     "title": "Nike Air Vapormax Plus",
        //     "star": 4,
        //     "reviews": 123,
        //     "prevPrice": "140",
        //     "newPrice": "200",
        //     "company": "Nike",
        //     "color": "Red",
        //     "category": "Sneakers",
        //     "id": 2
        // },
        // {
        //     "img": "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
        //     "title": "Nike Waffle One Sneaker",
        //     "star": 5,
        //     "reviews": 123,
        //     "prevPrice": "140",
        //     "newPrice": "200",
        //     "company": "Nike",
        //     "color": "Green",
        //     "category": "Sneakers",
        //     "id": 3
        // },
        // {
        //     "img": "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
        //     "title": "Nike Running Shoe",
        //     "star": 2,
        //     "reviews": 123,
        //     "prevPrice": "140",
        //     "newPrice": "200",
        //     "company": "Adidas",
        //     "color": "Black",
        //     "category": "Sneakers",
        //     "id": 4
        // },
        // {
        //     "img": "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
        //     "title": "Flat Slip On Pumps",
        //     "star": 5,
        //     "reviews": 123,
        //     "prevPrice": "140",
        //     "newPrice": "200",
        //     "company": "Vans",
        //     "color": "Green",
        //     "category": "Flats",
        //     "id": 5
        // },
        // {
        //     "img": "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
        //     "title": "Knit Ballet Flat",
        //     "star": 4,
        //     "reviews": 123,
        //     "prevPrice": "140",
        //     "newPrice": "150",
        //     "company": "Adidas",
        //     "color": "Black",
        //     "category": "Flats",
        //     "id": 6
        // },
        // {
        //     "img": "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
        //     "title": "Loafer Flats",
        //     "star": 4,
        //     "reviews": 123,
        //     "prevPrice": "140",
        //     "newPrice": "150",
        //     "company": "Vans",
        //     "color": "White",
        //     "category": "Flats",
        //     "id": 7
        // },
        // {
        //     "img": "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
        //     "title": "Nike Zoom Freak",
        //     "star": 4,
        //     "reviews": 123,
        //     "prevPrice": "140",
        //     "newPrice": "200",
        //     "company": "Nike",
        //     "color": "Green",
        //     "category": "Sneakers",
        //     "id": 8
        // },
        // {
        //     "img": "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
        //     "title": "Nike Men's Sneaker",
        //     "star": 4,
        //     "reviews": 123,
        //     "prevPrice": "140",
        //     "newPrice": "200",
        //     "company": "Adidas",
        //     "color": "Blue",
        //     "category": "Sneakers",
        //     "id": 9
        // },
        // {
        //     "img": "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
        //     "title": "PUMA BLACK-OCE",
        //     "star": 4,
        //     "reviews": 123,
        //     "prevPrice": "140",
        //     "newPrice": "150",
        //     "company": "Puma",
        //     "color": "Green",
        //     "category": "Sneakers",
        //     "id": 10
        // },
        // {
        //     "img": "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
        //     "title": "Pacer Future Sneaker",
        //     "star": 4,
        //     "reviews": 123,
        //     "prevPrice": "140",
        //     "newPrice": "150",
        //     "company": "Puma",
        //     "color": "Red",
        //     "category": "Sneakers",
        //     "id": 11
        // },
        // {
        //     "img": "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
        //     "title": "Unisex-Adult Super",
        //     "star": 4,
        //     "reviews": 123,
        //     "prevPrice": "140",
        //     "newPrice": "150",
        //     "company": "Puma",
        //     "color": "Black",
        //     "category": "Sneakers",
        //     "id": 12
        // },
        // {
        //     "img": "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
        //     "title": "Roma Basic Sneaker",
        //     "star": 4,
        //     "reviews": 123,
        //     "prevPrice": "140",
        //     "newPrice": "150",
        //     "company": "Puma",
        //     "color": "White",
        //     "category": "Sneakers",
        //     "id": 13
        // },
        // {
        //     "img": "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
        //     "title": "Pacer Future Doubleknit",
        //     "star": 4,
        //     "reviews": 123,
        //     "prevPrice": "140",
        //     "newPrice": "150",
        //     "company": "Puma",
        //     "color": "Black",
        //     "category": "Sneakers",
        //     "id": 14
        // },
        // {
        //     "img": "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
        //     "title": "Fusion Evo Golf Shoe",
        //     "star": 4,
        //     "reviews": 123,
        //     "prevPrice": "140",
        //     "newPrice": "100",
        //     "company": "Puma",
        //     "color": "Green",
        //     "category": "Sneakers",
        //     "id": 15
        // }
    ],
    filters: {
        searchText: '',
        recommended: 'All',
        category: 'All',
        price: '0,0',
        color: 'All'
    }
}
const reducer = (state, action) => {
    switch (action.type) {
        case "filters/searchText":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    searchText: action.payload
                }
            }
        case 'filters/recommended': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    recommended: action.payload
                }
            }
        }
        case 'filters/category': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    category: action.payload
                }
            }
        }
        case 'filters/color': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    color: action.payload
                }
            }
        }
        case 'filters/price': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    price: action.payload
                }
            }
        }
        case 'products/fetchProducts': {
            return {
                ...state,
                productList: action.payload
            }
        }
        default:
            return state
    }
}

export default reducer