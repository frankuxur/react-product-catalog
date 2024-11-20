import { useContext } from "react"
import { ProductsContext } from "../../state/context/ProductsContext"

const Cart = ({ showCart }) => {

  const { data, cart, removeFromCart } = useContext(ProductsContext)
  const cartItems = data.filter(({ id }) => cart.includes(id))

  return (
    // toggle 'active' class to show/hide cart
    <ul className={`cart ${showCart ? 'active' : ''}`}>
        {!!cartItems.length ? cartItems.map(({ name, image, id, price }) => (
            <li key={id} className="cart__item">
                <img className="cart__image" src={image} alt={name} />

                <div className="cart__info">
                    <h3 className="cart__item-name">{name}</h3>
                    <p className="cart__item-price">₹{price}</p>

                    <button onClick={() => removeFromCart(id)} className="cart__item-remove">
                        <i className="ri-delete-bin-6-line icon"></i>
                    </button>
                </div>

            </li>
        )) : (
            <div className="cart__empty">cart empty</div>
        )}
    </ul>
  )
}

export default Cart