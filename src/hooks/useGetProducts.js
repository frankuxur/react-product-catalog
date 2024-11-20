import { useContext, useEffect, useState } from "react"
import { ProductsContext } from "../state/context/ProductsContext"

// custom hook: fetches products on page load
const useGetProducts = () => {
    const [loading, setLoading] = useState(false)
    const { setProducts, setData, setOrder } = useContext(ProductsContext)

    // accessing from environment variable
    const URL = (import.meta.env.VITE_PRODUCTS_URL)

    useEffect(() => {
        const getProducts = async() => {
            setLoading(true)
            try {
                const response = await fetch(URL)
                const data = await response.json()
                
                setData(data)
                setProducts(data)
                setOrder('')
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        getProducts()
    }, [])

    return { loading }
}

export default useGetProducts