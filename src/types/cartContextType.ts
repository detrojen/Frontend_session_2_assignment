import type { TCartDetail } from "./cartDetailType"
import type {  TProduct } from "./productType"

export type TCartContext = {
    cartDetail: TCartDetail
    handleAddToCart : (product:TProduct, quantaty:number) => void
    handleAddeProductQuntaty : (id:number) => void
    handleRemoveProductQuantaty : (id:number) => void
    handleRemoveProduct : (id:number) => void
    clearCart : () => void
    applyCoupon: (code: number)=>void
}