import './sort.css'
import { useContext, useEffect } from 'react'
import { ProductsContext } from '../../state/context/ProductsContext'

const Sort = () => {
  
  const { products, setProducts, order, setOrder, categories }  = useContext(ProductsContext)

  // sorts in ascending or descending
  const sort = (sortOrder) => {
    setOrder(sortOrder)
    if (sortOrder === 'ascending') {
      const updatedProducts = products.sort((a, b) => a.price - b.price)
      setProducts(updatedProducts)
    } else if (sortOrder === 'descending') {
      const updatedProducts = products.sort((a, b) => b.price - a.price)        
      setProducts(updatedProducts)
    }
  }

  // sorts every time products are filtered (based on selected category)
  useEffect(() => {
    sort(order)
  }, [categories])

  return (
    <div className="sort">
        <h4 className='sort__title'>Price</h4>
        <div className="sort__line"></div>

        <ul className="sort__list">
          <li className='sort__item'>
              <button onClick={() => sort('ascending')} className={`sort__button ${order == 'ascending' ? 'active' : ''}`}>Low <i className="ri-arrow-right-line"></i> High</button>
          </li>

          <li className='sort__item'>
              <button onClick={() => sort('descending')} className={`sort__button ${order == 'descending' ? 'active' : ''}`}>High <i className="ri-arrow-right-line"></i> Low</button>
          </li>
        </ul>
    </div>
  )
}

export default Sort