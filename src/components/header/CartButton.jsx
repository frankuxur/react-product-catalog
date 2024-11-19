import { useContext } from "react"
import { ProductsContext } from "../../state/context/ProductsContext"

const CartButton = ({ setShowCart }) => {

  const { cart } = useContext(ProductsContext)

  return (
    <button onClick={() => setShowCart(prev => !prev)} className="header__cart">
      <i className="ri-shopping-cart-line icon"></i>
      <span className="mid">|</span>
      <span>{cart.length}</span>
    </button>
  )
}

export default CartButton