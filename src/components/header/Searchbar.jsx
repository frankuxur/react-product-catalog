import { useContext, useEffect } from 'react'
import { ProductsContext } from '../../state/context/ProductsContext'

const Searchbar = () => {

  const { data, setProducts, query, setQuery, setCategories, setOrder } = useContext(ProductsContext)

  useEffect(() => {
    const updatedProducts = data.filter(({name}) => name.toLowerCase().includes(query.trimStart()))

    setCategories([])
    setOrder('')
    setProducts(updatedProducts)
  }, [query])

  return (
    <div className="searchbar">
      <button className='searchbar__button'>
        <i className="ri-search-line icon"></i>
      </button>
      <input 
        type="text" 
        className='searchbar__input'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}

export default Searchbar