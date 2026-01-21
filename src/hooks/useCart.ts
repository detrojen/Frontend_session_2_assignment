import type { TProduct } from "../types/productType"
import { useLocalStorage } from "./useLocalStorage"
import type { TCartDetail } from "../types/cartDetailType"

export const useCart = () => {
     
    const {data:cartDetail, updateLocalStorageData} = useLocalStorage<TCartDetail>("cartDetails", {products:[], additonalBillInfo: {couponCode: null, discount:0}})
    
    const handleAddToCart = (product: TProduct, quantaty: number) => {
        updateLocalStorageData({...cartDetail, products: [...cartDetail.products,{...product,addedQnty:quantaty}]})
    }

    const handleAddeProductQuntaty = (id:number) => {
       updateLocalStorageData({...cartDetail, products: cartDetail.products.map(cartProduct=>cartProduct.id===id ? {...cartProduct, addedQnty: cartProduct.addedQnty+1}:cartProduct)})
    }

    const handleRemoveProductQuantaty = (id:number) =>{
        const product = cartDetail.products.find(item => item.id === id)
        if (product && product.addedQnty === 1){
            updateLocalStorageData({...cartDetail,products:cartDetail.products.filter(item=>item.id != product.id)})
        }else{
            updateLocalStorageData({...cartDetail, products: cartDetail.products.map(item => item.id === product?.id ? {...product,addedQnty:product.addedQnty-1}: item)})
        }
    }
    const clearCart = () => {
        updateLocalStorageData({products:[], additonalBillInfo: {
        couponCode: null,
        discount: 0
    }})
    }

    const handleRemoveProduct = (id:number) => {
        updateLocalStorageData({...cartDetail, products: cartDetail.products.filter(item=>item.id != id)})
    }

    return {cartDetail,handleAddToCart,handleAddeProductQuntaty, handleRemoveProduct, handleRemoveProductQuantaty, clearCart}
}