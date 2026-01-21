import type { TProduct } from "../types/productType"
import { fetchProducts } from "./fetchProducts"

export const fetchProductByID :(id:number)=> TProduct | null = (id:number) => {
    const products:TProduct[] = fetchProducts()
    const productByID = products.find(product => product.id === id)
    return productByID ?? null
}