import { useContext, useEffect, useState } from "react"
import { ProductsContext } from "../state/context/ProductsContext"

const useGetProducts = () => {
    const [loading, setLoading] = useState(false)
    const { setProducts, setData } = useContext(ProductsContext)

    const URL = (import.meta.env.VITE_PRODUCTS_URL)

    useEffect(() => {
        const getProducts = async() => {
            setLoading(true)
            try {
                const response = await fetch(URL)
                const data = await response.json()
                
                setData(data)
                setProducts(data)
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