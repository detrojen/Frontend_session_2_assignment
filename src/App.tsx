import {  useState } from 'react'
import Layout from './Layout'
import ProductList from './components/ProductList'
import CartPage from './components/CartPage'

function App() {
  const [route,setRoute] = useState<"AddProduct" | "UpdateProduct" | "ShowProducts">("ShowProducts")

  const setAddProductFormRoute = () => {
    setRoute("AddProduct")
  }
  const setProductListRoute = () => {
    setRoute("ShowProducts")
  }

  return (
    <>
      <Layout setAddProductFormRoute={() => setAddProductFormRoute()} setProductListRoute={setProductListRoute}>
         {/* {route === "ShowProducts" && <ProductList/>} */}
         <CartPage />
      </Layout>
    </>
  )
}

export default App
