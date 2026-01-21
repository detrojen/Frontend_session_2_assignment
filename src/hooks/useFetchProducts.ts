import { useEffect, useState } from "react"
import type { TProduct } from "../types/productType"

export const useFetchProducts = () => {
    const [products, setProducts] = useState<TProduct[]>([])
    const [fetchingProductState, setFetchingProductState] = useState({
        isFetching: true,
        isError: false,
    })
    useEffect(
        ()=>{
            fetch("https://dummyjson.com/products")
            .then(res=>{
            if(!res.ok)
                throw Error()
            return res.json()
        })
        .then(res=>{
            setFetchingProductState({...fetchingProductState,isFetching:false})
            setProducts(res.products)
        })
        .catch(()=>{
            setFetchingProductState({isFetching:false,isError:true})
        })
        },[]
    )

    const handleCategoryFilter = (category: string) => {
        const url = category === "all" ? "https://dummyjson.com/products" : `https://dummyjson.com/products/category/${category}`
        setFetchingProductState({
             isFetching: true, isError:false
        })
        fetch(url)
        .then(res=>{
            if(!res.ok)
                throw Error()
            return res.json()
        })
        .then(res=>{
            setFetchingProductState({...fetchingProductState,isFetching:false})
            setProducts(res.products)
        })
        .catch(()=>{
            setFetchingProductState({isFetching:false,isError:true})
        })
    }

    const handleSearchFilter = (search: string) => {
        fetch(`https://dummyjson.com/products/search?q=${search}`)
        .then(res=>{
            if(!res.ok)
                throw Error()
            return res.json()
        })
        .then(res=>{
            setFetchingProductState({...fetchingProductState,isFetching:false})
            setProducts(res.products)
        })
        .catch(()=>{
            setFetchingProductState({isFetching:false,isError:true})
        })
    }

    return {products, handleCategoryFilter, handleSearchFilter, fetchingProductState}
}