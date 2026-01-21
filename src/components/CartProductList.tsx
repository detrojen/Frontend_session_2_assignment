import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import CartProductCard from "./CartProductCard"

function CartProductList(){
    const {cartDetail:{products}} = useContext(CartContext)
    return<>
        <div>
            {products.map(product=><CartProductCard {...product} key={product.id}/>)}
        </div>
    </>
}
export default CartProductList