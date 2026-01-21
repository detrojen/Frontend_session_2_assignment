import { useEffect, useState } from "react"
import type { TProduct } from "../types/productType"

export const useFetchProducts = () => {
    const [products, setProducts] = useState<TProduct[]>([])
    useEffect(
        ()=>{
            fetch("https://dummyjson.com/products")
                                .then(res=>res.json())
                                .then(res=>{
                                    setProducts(res.products)
                                })
        },[]
    )

    const handleCategoryFilter = (category: string) => {
        const url = category === "all" ? "https://dummyjson.com/products" : `https://dummyjson.com/products/category/${category}`
        fetch(url)
        .then(res=>res.json())
        .then(res=>{
            setProducts(res.products)
        })
    }
    const handleSearchFilter = (search: string) => {
        fetch(`https://dummyjson.com/products/search?q=${search}`)
        .then(res=>res.json())
        .then(res=>{
            setProducts(res.products)
        })
    }
    return {products, handleCategoryFilter, handleSearchFilter}
}