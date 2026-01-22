import { useEffect, useRef, useState } from "react"
import ProductCard from "./ProductCard"
import { useFetchProducts } from "../hooks/useFetchProducts"
import { useFetchCategoryList } from "../hooks/useFetchCategoryList"
import SkeletonProductCard from "./SkeletonProductCard"

function ProductList() {
    // const {register, getValues, setValue} = useForm<TFilter>();
    const { products, handleCategoryFilter, handleSearchFilter, fetchingProductState } = useFetchProducts()
    const { categrories } = useFetchCategoryList()
    const [query,setQuery] = useState("")
    const [category,setCategory] = useState("all")
    useEffect(()=>{
        let idx :number
        if(query!=""){
            idx = setTimeout(()=>handleSearchFilter(query),1000)
            setCategory("all")
            return ()=>clearTimeout(idx!)
        }
    },[query])
    useEffect(()=>{
        if(!fetchingProductState.isFetching){
            let idx :number
        
            idx = setTimeout(()=>handleCategoryFilter(category),1000)
            setQuery("")
            return ()=>clearTimeout(idx!)
        
        }
    },[category])
    return <>
        <div>
            <form className="flex gap-2">
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Product Name
                    </label>
                    <input
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                        value={query}
                        className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Category
                    </label>
                    <select value={category} onChange={(e) => {
                        setCategory(e.target.value)
                    }}>
                        <option value="all">All</option>
                        {categrories.map(category => <option value={category}>{category}</option>)}

                    </select>
                </div>
            </form>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {fetchingProductState.isFetching ?
                <>
                    <SkeletonProductCard />
                    <SkeletonProductCard />
                    <SkeletonProductCard />
                </>
                :

                products.length > 0 ? products.map(product => {
                    return <ProductCard product={product} key={product.id} />
                }) : <h1>Empty list</h1>

            }
        </div>
    </>
}

export default ProductList