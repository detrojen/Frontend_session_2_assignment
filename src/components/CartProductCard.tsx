import { useContext } from "react";
import type { TCartProduct } from "../types/productType";
import { CartContext } from "../contexts/CartContext";
import { LucideTrash2 } from "lucide-react";
import { ThemeContext } from "../contexts/ThemeContext";

function CartProductCard({id,title,thumbnail,description,price,addedQnty}:TCartProduct){
    const {theme:{card, btn}} = useContext(ThemeContext)
    const {handleAddeProductQuntaty,handleRemoveProduct,handleRemoveProductQuantaty} = useContext(CartContext)
    return <>
        <div className={`${card.bg} flex my-2 justify-between border align-bottom rounded-2xl overflow-hidden`}>
            <div className={`flex`}>
                <img className="w-3/10" src={thumbnail} />
                <div>
                    <p className={`${card.text}`}>{title}</p>
                    <p className={`${card.text}`}>{description}</p>
                    <p className={`${card.text}`}>price:- ${price}</p>
                </div>
            </div>
            <div className=" flex  justify-end py-2" style={{alignItems: "end"}}>
                <div className="flex" >
                    <button className={`${btn} h-fit m-0`} onClick={()=>handleRemoveProductQuantaty(id)}>-</button>
                    <p className={`${btn} h-fit m-0`}>{addedQnty}</p>
                    <button className={`${btn} h-fit m-0`} onClick={()=>handleAddeProductQuntaty(id)}>+</button>
                </div>
                <button className={`${btn} bg-red-700 hover:bg-red-400 h-fit m-0`} onClick={()=>handleRemoveProduct(id)}>
                    <LucideTrash2 />
                </button>
            </div>
        </div>
    </>
}

export default CartProductCard