import { useContext } from "react"
import BillInfoCard from "./BillInfoCard"
import CartProductList from "./CartProductList"
import { CartContext } from "../contexts/CartContext"

function CartPage(){
    const {cartDetail:{products}} = useContext(CartContext)
    if(products.length === 0){
        return <>
            <h1 className="text-center"> EMPTY CART</h1>
        </>
    }
    return <>
       <div className="flex flex-col sm:flex-row gap-2 w-full my-2 sticky top-0">
            <div className="w-full sm:w-6/10">
                <CartProductList />
            </div>
            <div className="flex-1 sticky top-0">
                <BillInfoCard />
            </div>
        </div> 

    </>
}

export default CartPage