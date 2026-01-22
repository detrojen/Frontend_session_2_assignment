import Layout from './Layout'
import ProductList from './components/ProductList'
import CartPage from './components/CartPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Checkout from './components/Checkout'

function App() {
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <ProductList />
        },
        {
          path: "cart",
          element: <CartPage />
        },
        {
          path: "checkout",
          element: <Checkout />
        },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
