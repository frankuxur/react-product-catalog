import { createContext, useReducer } from "react";
import productsReducer, { initialState } from "../reducer/productsReducer";
import toast from "react-hot-toast";

export const ProductsContext = createContext(null)

export const ProductsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productsReducer, initialState)

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
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}