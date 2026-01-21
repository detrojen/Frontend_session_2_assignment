import {  useContext, useMemo } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import { CartContext } from "../contexts/CartContext"
import type { TCartProduct } from "../types/productType"
function calcGrossTotal(products:TCartProduct[]) : {grossPrice:number, totalQuantaty: number}{
    let grossPrice = 0
    let totalQuantaty=0
    products.forEach((product)=>{
        totalQuantaty += product.addedQnty
        grossPrice += Math.round(product.addedQnty*product.price)
    })
    return {grossPrice, totalQuantaty}
}
function BillInfoCard() {
    const {cartDetail: {products,additonalBillInfo}, clearCart} = useContext(CartContext)
    const {theme:{card, btn}} = useContext(ThemeContext)
    const calculatedBillInfo = useMemo<{grossPrice:number, totalQuantaty: number}>(()=>calcGrossTotal(products),[products]) 
    return <>
        <div className={`${card.bg} p-2`}>
            <div className=" pe-1">
                <table className="table-auto w-full my-2" >
                    <thead>
                        <tr>
                            <th className="text-wrap border border-grey-300 text-white bg-gray-600">Title</th>
                            <th className="text-wrap border border-grey-300 text-white bg-gray-600">Price</th>
                            <th className="text-wrap border border-grey-300 text-white bg-gray-600">qty</th>
                            <th className="text-wrap border border-grey-300 text-white bg-gray-600">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(
                                product=>
                                    <tr>
                                        <td className="text-wrap text-center border border-grey-300">{product.title}</td>
                                        <td className="text-wrap border text-end pe-0.5 border-grey-300">{product.price}</td>
                                        <td className="text-wrap border text-end pe-0.5 border-grey-300">{product.addedQnty}</td>
                                        <td className="text-wrap border text-end pe-0.5 border-grey-300">{Math.round(product.price * product.addedQnty)}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

                <div>
                    <p>Gross total:- {calculatedBillInfo.grossPrice}</p>
                    <p>total items:- {calculatedBillInfo.totalQuantaty}</p>
                </div>
                <button className={`${btn}`} onClick={clearCart}>clear all</button>

            </div>
                  
        </div>
    </>

}
export default BillInfoCard