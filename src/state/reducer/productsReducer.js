// initial state
export const initialState = {
    data: [],         // holds all products
    products: [],     // holds searched AND/OR filtered AND/OR sorted products 
    query: '',        // search query
    categories: [],   // holds list of categories used for filtering 
    order: '',        // sort order (ascending or descending)
    cart: [],         // holds IDs of products added to the cart
}

// reducer function to set state based on action type
const productsReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'SET_DATA':
            return {
                ...state,
                data: payload,
            }

        case 'SET_PRODUCTS':
            return {
                ...state,
                products: payload
            }

        case 'SET_QUERY': {
            return {
                ...state,
                query: payload
            }
        }

        case 'SET_ACTIVE_CATEGORIES': {
            return {
                ...state,
                categories: payload
            }
        }

        case 'SET_ORDER': {
            return {
                ...state,
                order: payload
            }
        }

        case 'SET_CART': {
            return {
                ...state,
                cart: payload
            }
        }
    
        default:
            console.log(`Can't update state for action type ${type}`)
            return state
    }
}

export default productsReducer