import { useRef } from "react"
import ProductCard from "./ProductCard"
import { useFetchProducts } from "../hooks/useFetchProducts"
import { useFetchCategoryList } from "../hooks/useFetchCategoryList"

function ProductList(){
    // const {register, getValues, setValue} = useForm<TFilter>();
    const {products, handleCategoryFilter, handleSearchFilter} = useFetchProducts()
    const {categrories} = useFetchCategoryList()
    const queryInputRef = useRef(null)
    const categoryInputRef = useRef(null)
    return<>
    <div>
        <form className="flex gap-2">
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Product Name
                </label>
                <input 
                    ref={queryInputRef} 
                    onChange={(e)=>{
                        queryInputRef.current.value = e.target.value
                        categoryInputRef.current.value = "all"
                        handleSearchFilter(queryInputRef.current.value)
                    }}
                    className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                />
            </div>
            
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Category
                </label>
                <select ref={categoryInputRef} onChange={(e)=>{
                    categoryInputRef.current.value = e.target.value
                    queryInputRef.current.value = ""
                    handleCategoryFilter(categoryInputRef.current.value)
                }}>
                    <option value="all">All</option>
                    {categrories.map(category=><option value={category}>{category}</option>)}
                    
                </select>
            </div>
        </form>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {products.length>0 ? products.map(product=>{
            return <ProductCard product={product} key={product.id} />
        }) : <h1>Empty list</h1>}
    </div>
    </>
}

export default ProductList