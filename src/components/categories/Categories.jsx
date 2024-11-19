import { useContext, useEffect, useState } from 'react'
import './categories.css'
import { ProductsContext } from '../../state/context/ProductsContext'

// const categoryList = ['food', 'electronics', 'clothing']
const categoryList = ['chair', 'bed', 'sofa', 'desk']

const Categories = () => {
  const { data, setProducts, categories, setCategories } = useContext(ProductsContext)

  const handleClick = (category) => {
    let temp
    if (categories.includes(category)) {
        temp = categories.filter(cat => cat !== category)
    } else {
        temp = [...categories, category]
    }
    setCategories(temp)

    const updatedProducts = data.filter(({ category }) => temp.includes(category))

    if (!temp.length) {
        setProducts(data)
        return
    }

    setProducts(updatedProducts)
  }

  return (
  <div className="categories">
    <h4 className='categories__title'>Categories</h4>
    
    <div className="categories__line"></div>
    
    <ul className="categories__list">
      {categoryList.map((category, index) => (
          <li key={index} className='category'>
              <button className={`category__button ${categories.includes(category) ? 'active' : ''}`} onClick={() => handleClick(category)}>{category}</button>
          </li>
      ))}
    </ul>
  </div>
  )
}

export default Categories