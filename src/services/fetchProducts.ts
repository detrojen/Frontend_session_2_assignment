import type { TProduct } from "../types/productType"

export function fetchProducts() : TProduct[]{
    const jsonData = localStorage.getItem("products")
    const products : TProduct[] = jsonData ? JSON.parse(jsonData) : []
    return products
}

