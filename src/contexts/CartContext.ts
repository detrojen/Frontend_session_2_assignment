import { createContext } from "react";
import type { TCartContext } from "../types/cartContextType";
import type { TProduct } from "../types/productType";

export const CartContext = createContext<TCartContext>({
    cartDetail: {products:[], additonalBillInfo: {
        couponCode: null,
        discount: 0
    }},
    handleAddToCart : (product:TProduct, quantaty:number) => {},
    handleAddeProductQuntaty : (id:number) => {},
    handleRemoveProductQuantaty : (id:number) => {},
    handleRemoveProduct : (id:number) => {},
    clearCart : () => {}
})