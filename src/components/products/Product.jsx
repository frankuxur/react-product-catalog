import { useContext } from "react"
import { ProductsContext } from "../../state/context/ProductsContext"
import { Link, Outlet } from "react-router-dom"

const Product = ({ product }) => {

  const { category, id, image, name, price } = product
  const { addToCart } = useContext(ProductsContext)
  

  return (
    <article className="product">
      <div className="product__image-wrapper">
        <img src={image} alt={name} className="product__image" />
      </div>

      <header className="product__header">
        <h2 className="product__title">{name}</h2>
        <span className="product__category">{category}</span>
      </header>

      <footer className="product__footer">
        <div className="product__price">₹{price}</div>

        <div className="product__buttons">
            <Link to={`/products/${id}`} state={product} className="product__view">View details</Link>
            
            <button onClick={() => addToCart(id)} className="product__cart">
              Add to cart
              <i className="ri-shopping-bag-2-line icon"></i>
            </button>
        </div>
      </footer>

      <Outlet />
    </article>
  )
}

export default Product