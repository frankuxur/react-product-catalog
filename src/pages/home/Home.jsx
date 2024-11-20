import CategoryFilter from '../../components/categories/CategoryFilter'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ProductList from '../../components/products/ProductList'
import Sort from '../../components/sort/Sort'
import './home.css'
import { Toaster } from 'react-hot-toast';

const Home = () => {
  return (
    <>
      <div className='home'>
          <div className="home__content">
            {/* Header */}
            <Header showSearchbar={true} />
            
            {/* sort & filter */}
            <div className="home__filter">
              <CategoryFilter />
              <Sort />
            </div>
            
            {/* product list */}
            <ProductList />
          </div>
      </div>
      <Footer />
      
      {/* React Hot Toast */}
      <Toaster position="bottom-right" />
    </>
  )
}

export default Home