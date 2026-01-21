import type { TProduct } from "../types/productType"
import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { CartContext } from "../contexts/CartContext"
import { LucideTrash2 } from "lucide-react"

function ProductCard({product}:{product : TProduct}){
     
   const {theme} = useContext(ThemeContext)
   const {handleAddToCart,cartDetail:{products}} = useContext(CartContext);

    return <>
        <div className={`${theme.card.bg} border-1 overflow-hidden flex flex-col gap-5 p-2 justify-between`}>
            <div>
                <img src={product.thumbnail} className=""></img>
                <h3 className={`text-xl mb-1 ${theme.card.text}`}>{product.title}</h3>
                <p className={theme.card.text}>{product.description}</p>
                <p className={theme.card.text}>${product.price}</p>    
                
            </div>
            { products.findIndex((item)=>item.id===product.id) === -1 ?
                <div className=" flex flex-col gap-2">
                    <button className={theme.btn} onClick={()=>{
                        handleAddToCart(product,1)
                    }}>Add to Cart</button>
                </div> : <p>Already in cart</p>
            }
           
        </div>
    </>
    
}

export default ProductCard