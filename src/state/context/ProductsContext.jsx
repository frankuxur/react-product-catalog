import { createContext, useReducer } from "react";
import productsReducer, { initialState } from "../reducer/productsReducer";
import toast from "react-hot-toast";

export const ProductsContext = createContext(null)

export const ProductsProvider = ({ children }) => {

    // useReducer hook
    const [state, dispatch] = useReducer(productsReducer, initialState)

    // functions that dispatch actions to update corresponding state value
    const setData = (payload) => {
        dispatch({ type: 'SET_DATA', payload })
    }

    const setProducts = (payload) => {
        dispatch({ type: 'SET_PRODUCTS', payload })
    }

    const setQuery = (payload) => {
        dispatch({ type: 'SET_QUERY', payload })
    }

    const setCategories = (payload) => {
        dispatch({ type: 'SET_ACTIVE_CATEGORIES', payload })
    }

    const setOrder = (payload) => {
        dispatch({ type: 'SET_ORDER', payload })
    }

    const addToCart = (payload) => {
        if (!state.cart.includes(payload)) {
            const cartItems = [...state.cart, payload]
            dispatch({ type: 'SET_CART', payload: cartItems })
            toast.success('Item added to cart')
        }
    }

    const removeFromCart = (payload) => {
        const cartItems = state.cart.filter(id => id !== payload)
        dispatch({ type: 'SET_CART', payload: cartItems })
        toast.success('Item removed from cart')
    }

    // value to be provided
    const value = {
        setData,
        data: state.data,
        setProducts,
        products: state.products,
        setQuery,
        query: state.query,
        setCategories,
        categories: state.categories,
        setOrder,
        order: state.order,
        addToCart,
        removeFromCart,
        cart: state.cart,
    }

    return (
        // making state accesssible via provider
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}