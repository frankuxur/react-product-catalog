import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ProductsProvider } from './state/context/ProductsContext.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import ProductDetails from './pages/product-details/ProductDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/products/:productId',
    element: <ProductDetails />
  }
], {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </ProductsProvider>
  </StrictMode>,
)
