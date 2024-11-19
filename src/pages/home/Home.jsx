import Categories from '../../components/categories/Categories'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Products from '../../components/products/Products'
import Sort from '../../components/sort/Sort'
import './home.css'
import { Toaster } from 'react-hot-toast';

const Home = () => {
  return (
    <>
      <div className='home'>
          <div className="home__content">
              <Header showSearchbar={true} />
              
              <div className="home__filter">
                <Categories />
                <Sort />
              </div>
              <Products />
          </div>
      </div>
      <Footer />
      
      <Toaster 
        position="bottom-right"
      />
    </>
  )
}

export default Home