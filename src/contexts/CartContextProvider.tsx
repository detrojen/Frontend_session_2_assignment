import { CartContext } from "./CartContext";
import { useCart } from "../hooks/useCart";

function CartContextProvider({children}){
     
    const cartContextValue = useCart();
    return <CartContext.Provider value={cartContextValue}>
            {children}
    </CartContext.Provider>
}

export default CartContextProvider