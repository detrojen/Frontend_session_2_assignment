import type { TCartProduct, TProduct } from "../types/productType"
import { useLocalStorage } from "./useLocalStorage"
import type { TCartDetail } from "../types/cartDetailType"

function calculateBillInfo(products: TCartProduct[]): { grossTotal: number, totalItems: number } {
    let grossTotal = 0
    let totalItems = 0
    products.forEach((product) => {
        totalItems += product.addedQnty
        grossTotal += Math.round(product.addedQnty * product.price)
    })
    return { grossTotal, totalItems }
}
export const useCart = () => {

    const { data: cartDetail, updateLocalStorageData } = useLocalStorage<TCartDetail>("cartDetails", {
        products: [],
        additonalBillInfo: {
            couponCode: null,
            discount: 0,
            payable: 0,
            totalItems: 0,
            grossTotal: 0
        }
    })

    const handleAddToCart = (product: TProduct, quantaty: number) => {
        const products = [...cartDetail.products, { ...product, addedQnty: quantaty }]
        updateLocalStorageData({ products, additonalBillInfo: {
            ...cartDetail.additonalBillInfo,
            grossTotal: cartDetail.additonalBillInfo.grossTotal + product.price,
            totalItems: cartDetail.additonalBillInfo.totalItems + 1,
            payable: cartDetail.additonalBillInfo.grossTotal + product.price - cartDetail.additonalBillInfo.discount
        }  })
    }

    const handleAddeProductQuntaty = (id: number) => {
        const products = cartDetail.products.map(cartProduct => cartProduct.id === id ? { ...cartProduct, addedQnty: cartProduct.addedQnty + 1 } : cartProduct)
        const { grossTotal, totalItems } = calculateBillInfo(products)
        updateLocalStorageData(
            {
                products,
                additonalBillInfo: {
                    ...cartDetail.additonalBillInfo,
                    grossTotal,
                    totalItems,
                    payable: grossTotal - cartDetail.additonalBillInfo.discount
                }
            }
        )
    }

    const handleRemoveProductQuantaty = (id: number) => {
        const product = cartDetail.products.find(item => item.id === id)
        if (!product) return
        let products = cartDetail.products.filter(item => item.id != product.id)

        if (product && product.addedQnty === 1) {
            products = cartDetail.products.filter(item => item.id != product.id)
        } else {
            products = cartDetail.products.map(item => item.id === product?.id ? { ...product, addedQnty: product.addedQnty - 1 } : item)
            // updateLocalStorageData({ ...cartDetail, products: cartDetail.products.map(item => item.id === product?.id ? { ...product, addedQnty: product.addedQnty - 1 } : item) })
        }
        updateLocalStorageData(
            {
                products,
                additonalBillInfo: {
                    ...cartDetail.additonalBillInfo,
                    grossTotal: cartDetail.additonalBillInfo.grossTotal - product.price,
                    totalItems: cartDetail.additonalBillInfo.totalItems - 1,
                    payable: cartDetail.additonalBillInfo.grossTotal - product.price - cartDetail.additonalBillInfo.discount
                },

            }
        )
    }
    const clearCart = () => {
        updateLocalStorageData({
            products: [], additonalBillInfo: {
                couponCode: null,
                discount: 0,
                payable: 0,
                totalItems: 0,
                grossTotal: 0
            }
        })
    }

    const handleRemoveProduct = (id: number) => {
        const product = cartDetail.products.find(item => item.id === id)
        if (!product) {
            return
        }
        const products = cartDetail.products.filter(item => item.id != id)
        updateLocalStorageData({
            products,
            additonalBillInfo: {
                ...cartDetail.additonalBillInfo,
                grossTotal: cartDetail.additonalBillInfo.grossTotal - (product.price*product.addedQnty),
                totalItems: cartDetail.additonalBillInfo.totalItems - product.addedQnty,
                payable: cartDetail.additonalBillInfo.grossTotal - (product.price*product.addedQnty) - cartDetail.additonalBillInfo.discount

            }
        })
    }
    const applyCoupon = (code: number) => {
        const discount = cartDetail.additonalBillInfo.grossTotal * 5 / 100
        const payable = cartDetail.additonalBillInfo.grossTotal - discount
        updateLocalStorageData({
            ...cartDetail,
            additonalBillInfo: { ...cartDetail.additonalBillInfo, couponCode: code, discount, payable }
        })
    }
    return { cartDetail, handleAddToCart, handleAddeProductQuntaty, handleRemoveProduct, handleRemoveProductQuantaty, clearCart, applyCoupon }
}