import { useEffect, useState } from "react"

export const useFetchCategoryList = () => {
    const [categrories, setCategories] = useState<string[]>([])
    useEffect(()=>{
        fetch("https://dummyjson.com/products/category-list")
        .then(res=>res.json())
        .then(res=>setCategories(res))
    },[])

    return {categrories}
}