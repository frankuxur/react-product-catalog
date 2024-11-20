import './products.css'
import { useContext } from 'react'
import useGetProducts from '../../hooks/useGetProducts'
import Product from './ProductItem'
import { ProductsContext } from '../../state/context/ProductsContext'


const ProductList = () => {
  
  // getting loading state from custom hook
  const { loading } = useGetProducts()

  // getting list of products from context
  const { products } = useContext(ProductsContext)

  // list of products
  return (
    <>
      {products.length && !loading ? (
        <section className="products">
          {products.map(product => <Product key={product.id} product={product} />)}
        </section>
      ) : (
        // showing loader when loading
        <div className="loader-box">
          <div className="loader"></div>
        </div>
      )}
    </>
  )
}

export default ProductList